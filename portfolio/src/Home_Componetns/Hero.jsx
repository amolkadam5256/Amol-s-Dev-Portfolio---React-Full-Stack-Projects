// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Circ } from "gsap/all";
import HeaderLogo from "../Home_Componetns/HeaderLogo";
import TitalText from "../Home_Componetns/TitalText";
import HomeBottomText from "../Home_Componetns/HomeBottomText";
import HomeBottomImage from "../Home_Componetns/HomeBottomImage";

const Hero = () => {
    const canvasRef = useRef(null);
    const largeHeaderRef = useRef(null);

    useEffect(() => {
        let width, height, ctx, points, target, animateHeader;

        const initHeader = () => {
            const largeHeader = largeHeaderRef.current;
            const canvas = canvasRef.current;

            // Dynamically set dimensions to 100% of the viewport
            width = largeHeader.offsetWidth;
            height = largeHeader.offsetHeight;

            largeHeader.style.width = "100%";
            largeHeader.style.height = "100%";

            canvas.width = width;
            canvas.height = height;

            ctx = canvas.getContext("2d");

            target = { x: width / 2, y: height / 2 };
            animateHeader = true;

            points = [];
            for (let x = 0; x < width; x += width / 20) {
                for (let y = 0; y < height; y += height / 20) {
                    const px = x + (Math.random() * width) / 20;
                    const py = y + (Math.random() * height) / 20;
                    const p = { x: px, originX: px, y: py, originY: py };
                    points.push(p);
                }
            }

            points.forEach((p1) => {
                const closest = [];
                points.forEach((p2) => {
                    if (p1 !== p2) {
                        if (closest.length < 5) {
                            closest.push(p2);
                        } else {
                            for (let i = 0; i < 5; i++) {
                                if (getDistance(p1, p2) < getDistance(p1, closest[i])) {
                                    closest[i] = p2;
                                    break;
                                }
                            }
                        }
                    }
                });
                p1.closest = closest;
            });

            points.forEach((point) => {
                point.circle = new Circle(
                    point,
                    2 + Math.random() * 2,
                    "rgba(255,255,255,0.3)"
                );
            });
        };

        const resize = () => {
            const largeHeader = largeHeaderRef.current;
            const canvas = canvasRef.current;

            width = largeHeader.offsetWidth;
            height = largeHeader.offsetHeight;

            canvas.width = width;
            canvas.height = height;
        };

        const addListeners = () => {
            window.addEventListener("mousemove", mouseMove);
            window.addEventListener("scroll", scrollCheck);
            window.addEventListener("resize", resize);
        };

        const mouseMove = (e) => {
            target.x = e.pageX || e.clientX + document.documentElement.scrollLeft;
            target.y = e.pageY || e.clientY + document.documentElement.scrollTop;
        };

        const scrollCheck = () => {
            animateHeader = document.body.scrollTop <= height;
        };

        const initAnimation = () => {
            animate();
            points.forEach(shiftPoint);
        };

        const animate = () => {
            if (animateHeader) {
                ctx.clearRect(0, 0, width, height);
                points.forEach((point) => {
                    if (Math.abs(getDistance(target, point)) < 4000) {
                        point.active = 0.3;
                        point.circle.active = 0.6;
                    } else if (Math.abs(getDistance(target, point)) < 20000) {
                        point.active = 0.1;
                        point.circle.active = 0.3;
                    } else if (Math.abs(getDistance(target, point)) < 40000) {
                        point.active = 0.02;
                        point.circle.active = 0.1;
                    } else {
                        point.active = 0;
                        point.circle.active = 0;
                    }
                    drawLines(point);
                    point.circle.draw();
                });
            }
            requestAnimationFrame(animate);
        };

        const shiftPoint = (p) => {
            gsap.to(p, {
                x: p.originX - 50 + Math.random() * 100,
                y: p.originY - 50 + Math.random() * 100,
                duration: 1 + Math.random(),
                ease: Circ.easeInOut,
                onComplete: () => shiftPoint(p),
            });
        };

        const drawLines = (p) => {
            if (!p.active) return;
            p.closest.forEach((closePoint) => {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(closePoint.x, closePoint.y);
                ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
                ctx.stroke();
            });
        };

        function Circle(pos, rad, color) {
            this.pos = pos;
            this.radius = rad;
            this.color = color;
            this.active = 0;

            this.draw = function () {
                if (!this.active) return;
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = `rgba(156,217,249,${this.active})`;
                ctx.fill();
            };
        }

        const getDistance = (p1, p2) => {
            return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
        };

        initHeader();
        initAnimation();
        addListeners();

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("scroll", scrollCheck);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <>
            <div className="relative md:p-3">
                <div className="relative block">
                    <div
                        ref={largeHeaderRef}
                        className="relative md:rounded-[35px] shadow-xl shadow-gray-700 custom-bg bg-cover bg-center bg-no-repeat"
                    >
                        <canvas ref={canvasRef} className="absolute top-0 left-0" />
                        <div className="relative block">
                            <HeaderLogo />
                        </div>

                        <div className="relative block pl-5 md:pl-10">
                            <TitalText />
                        </div>

                        <div className="relative block pl-5 md:pl-10">
                            <HomeBottomText />
                        </div>

                        <div className="absolute block bottom-[70%] right-[80%] md:bottom-5 md:right-5">
                            <HomeBottomImage />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
