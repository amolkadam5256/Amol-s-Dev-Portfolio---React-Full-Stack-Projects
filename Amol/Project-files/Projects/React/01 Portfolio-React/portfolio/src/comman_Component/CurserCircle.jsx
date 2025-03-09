import React from 'react';

function CurserCircle() {
  const cursorDotOutline = React.useRef();
  const cursorDot = React.useRef();
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();
  let [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = React.useState(false);
  const [cursorEnlarged, setCursorEnlarged] = React.useState(false);
  const [cursorClicked, setCursorClicked] = React.useState(false);
  const [clickAnimation, setClickAnimation] = React.useState(false);

  const onMouseMove = event => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
    positionDot(event);
  };

  const onMouseEnter = () => {
    setCursorVisible(true);
  };

  const onMouseLeave = () => {
    setCursorVisible(false);
  };

  const onMouseDown = () => {
    setCursorEnlarged(true);
    setCursorClicked(true);
  };

  const onMouseUp = () => {
    setCursorEnlarged(false);
    setCursorClicked(false);
  };

  const handleClick = (event) => {
    setClickAnimation(true);
    setTimeout(() => setClickAnimation(false), 300);
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("click", handleClick);
    requestRef.current = requestAnimationFrame(animateDotOutline);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("click", handleClick);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  let { x, y } = mousePosition;
  let endX = x;
  let endY = y;

  function positionDot(e) {
    endX = e.pageX;
    endY = e.pageY;
    cursorDot.current.style.top = endY + "px";
    cursorDot.current.style.left = endX + "px";
  }

  const animateDotOutline = time => {
    if (previousTimeRef.current !== undefined) {
      x += (endX - x) / 8;
      y += (endY - y) / 8;
      cursorDotOutline.current.style.top = y + "px";
      cursorDotOutline.current.style.left = x + "px";
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <>
      {/* <div
        ref={cursorDotOutline}
        className={`z-[100] absolute rounded-full transition-opacity duration-150 ease-in-out transform -translate-x-1/2 -translate-y-1/2 pointer-events-none ${cursorVisible ? 'opacity-100 scale-5' : 'opacity-0'}`}
        style={{ backgroundColor: 'rgba(255, 178, 178, 0.3)', width: '20px', height: '20px' }}
      /> */}
      <div
        ref={cursorDot}
        className={`z-[100] absolute rounded-full transition-transform duration-150 ease-in-out transform -translate-x-1/2 -translate-y-1/2 pointer-events-none ${cursorVisible ? 'opacity-100' : 'opacity-0'} ${clickAnimation ? 'animate-ping' : ''}`}
        style={{ backgroundColor: '#ff0000', width: '20px', height: '20px', transform: cursorEnlarged || cursorClicked ? 'scale(0.7)' : 'scale(1)' }}
      />
    </>
  );
}

export default CurserCircle;
