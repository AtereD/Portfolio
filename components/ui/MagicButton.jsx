import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-900%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#eece1a_10%,#eece1a_40%)]" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-primary px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;