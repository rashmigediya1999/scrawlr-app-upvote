import React from "react";
import { Button } from "./styles";

interface UpvoteButtonProps {
  selected: boolean;
  onClick: () => void;
}

export const UpvoteButton: React.FC<UpvoteButtonProps> = ({
  selected,
  onClick,
}) => {
  const strokeColor = selected ? "#253CF2" : "#343A40";

  // Define the rectangle dimensions and its position offset
  const rectX = 0.5;
  const rectY = 0.5;
  const size = 50; // Changing this scales the rectangle and arrow together

  // Calculate arrow coordinates relative to the rectangle size
  // Original multipliers come from:
  // horizontal line from 19.5 to 31.5 with y at 15 (i.e., 19.5/50, 15/50, etc.)
  const arrowCapStartX = rectX + size * 0.39; // ~19.5
  const arrowCapEndX = rectX + size * 0.63; // ~31.5
  const arrowCapY = rectY + size * 0.3; // ~15
  const arrowVerticalX = rectX + size * 0.51; // ~25.5
  const arrowVerticalEndY = rectY + size * 0.7; // ~35

  // Calculate triangle height as a fraction of size. Adjust 0.12 to change the triangle's height.
  const triangleHeight = size * 0.12; // e.g. 6 when size = 50

  return (
    <Button onClick={onClick} data-testid="upvote-button">
      <svg
        width={size + 1}
        height={size + 1}
        viewBox={`0 0 ${size + 1} ${size + 1}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rounded square with background color */}
        <rect
          x={rectX}
          y={rectY}
          width={size}
          height={size}
          rx="4"
          stroke={strokeColor}
          fill={selected ? "#e0eaff" : "#f5f5f5"}
        />
        {/* Arrow head as a triangle */}
        <polygon
          points={`
            ${arrowCapStartX},${arrowCapY} 
            ${arrowCapEndX},${arrowCapY} 
            ${arrowVerticalX},${arrowCapY - triangleHeight}
          `}
          fill={strokeColor}
        />
        {/* Vertical line (arrow body) */}
        <line
          x1={arrowVerticalX}
          y1={arrowCapY}
          x2={arrowVerticalX}
          y2={arrowVerticalEndY}
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </Button>
  );
};
