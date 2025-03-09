// Cursor.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;
        const container = containerRef.current;

        // Move cursor effect
        const moveCursor = (e) => {
            const { clientX: x, clientY: y} = e;

            gsap.to(cursor, { x, y, duration: 0.1, ease: "power3.out" });
            gsap.to(follower, { x, y, duration: 0.3, ease: "power3.out" });
        };

        // Hover effects
        const hoverEffects = () => {
            gsap.to(cursor, { scale: 1.5, backgroundColor: "#ffffff", duration: 0.3, ease: "power3.out" });
            gsap.to(follower, { scale: 2, opacity: 0.6, duration: 0.3, ease: "power3.out" });
        };

        const removeHoverEffects = () => {
            gsap.to(cursor, { scale: 1, backgroundColor: "#007bff", duration: 0.3, ease: "power3.out" });
            gsap.to(follower, { scale: 1, opacity: 0.5, duration: 0.3, ease: "power3.out" });
        };

        // Create star effect on click
        const createStar = (x, y) => {
            const star = document.createElement("div");
            star.className = "absolute w-2 h-2 bg-yellow-300 rounded-full pointer-events-none";
            container.appendChild(star);

            gsap.set(star, { x, y });

            gsap.to(star, {
                scale: 2,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                onComplete: () => star.remove(),
            });
        };

        // Handle click effect with multiple stars
        const clickEffect = (e) => {
            const { clientX: x, clientY: y } = e;
            for (let i = 0; i < 8; i++) {
                const offsetX = (Math.random() - 0.5) * 50;
                const offsetY = (Math.random() - 0.5) * 50;
                createStar(x + offsetX, y + offsetY);
            }
        };

        // Add event listeners
        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("click", clickEffect);

        // Hover effects for interactive elements
        document.querySelectorAll("a, button, .hover-target").forEach((el) => {
            el.addEventListener("mouseenter", hoverEffects);
            el.addEventListener("mouseleave", removeHoverEffects);
        });

        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("click", clickEffect);
            document.querySelectorAll("a, button, .hover-target").forEach((el) => {
                el.removeEventListener("mouseenter", hoverEffects);
                el.removeEventListener("mouseleave", removeHoverEffects);
            });
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute top-0 left-0  z-50 pointer-events-none w-screen h-screen">
            <div
                ref={cursorRef}
                className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-[9999]"
                style={{ transform: "translate(-50%, -50%)", willChange: "transform" }}
            />
            <div
                ref={followerRef}
                className="absolute top-0 left-0 w-10 h-10 bg-blue-300 opacity-50 rounded-full pointer-events-none z-[9998]"
                style={{ transform: "translate(-50%, -50%)", willChange: "transform" }}
            />
        </div>
    );
};

export default Cursor;
