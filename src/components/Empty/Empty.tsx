import React from "react";

interface EmptyProps {
  /** Custom message to display */
  message?: string;
  /** Additional CSS class name */
  className?: string;
  /** Custom styling */
  style?: React.CSSProperties;
}

const Empty: React.FC<EmptyProps> = ({
  message = "Empty component",
  className,
  style,
}) => {
  return (
    <div className={className} style={style}>
      {message}
    </div>
  );
};

export default Empty;
