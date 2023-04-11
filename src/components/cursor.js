import React, { useEffect, useState } from "react";
import { ReactComponent as CursorSvg } from "../images/custom-cursor.svg";
import defaultCursor from "../images/transparent.png"; // Import the transparent image

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ top: 500, left: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ top: e.clientY, left: e.clientX });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Render the default cursor */}
      <img
        src={defaultCursor}
        alt="Custom Cursor"
        className="default-cursor"
        style={{ top: cursorPosition.top, left: cursorPosition.left }}
      />
      {/* Render the custom cursor */}
      <svg  className="custom-cursor"
        style={{ top: cursorPosition.top, left: cursorPosition.left }} fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 18.5415C20.2857 -4.96649 47.8163 -7.3654 71 18.5415C48.7823 42.5337 21.2517 41.0943 0 18.5415Z" fill="#DFDFDF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.5 29C45.7173 29 54 20.9411 54 11C54 8.56382 53.5026 6.24067 52.6012 4.12147C41.1417 -1.42691 29.3817 -1.25326 18.4864 3.91909C17.5297 6.09243 17 8.48603 17 11C17 20.9411 25.2827 29 35.5 29Z" fill="black"/>
</svg>

    </>
  );
};

export default CustomCursor;