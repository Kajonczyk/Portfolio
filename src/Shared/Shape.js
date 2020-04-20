import React from "react";

export const Shape = ({
  width,
  height = 100,
  rotation = 0,
  scale = 1,
  left,
  top,
  translateX = "-50%",
  translateY = "-50%",
  position = "relative",
}) => {
  const styleObject = {
    width,
    height: `100%`,

    position: `${position}`,
    left,
    top,
    transform: `translate(${translateX},${translateY}) rotate(${rotation}deg) scale(${scale})`,
  };
  return (
    <div style={styleObject}>
      <svg
        viewBox="0 0 375 297"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M460.859 2.50465C429.635 -112.529 321.746 -195.568 195.106 -198.899C128.156 -200.659 57.7056 -179.856 6.41254 -107.057C-85.2794 23.0789 12.0472 113.007 79.9008 155.739C112.682 176.425 142.22 201.299 167.659 229.639C213.492 280.595 301.664 343.916 406.673 244.702C482.783 172.792 481.658 79.1288 460.859 2.50465Z"
          fill="#F2F2F2"
        />
      </svg>
    </div>
  );
};
