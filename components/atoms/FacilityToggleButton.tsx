import React from "react";

interface FacilityToggleButtonProps {
  name: string;
  isOpen: boolean;
  onClick: () => void;
}

export const FacilityToggleButton: React.FC<FacilityToggleButtonProps> = ({
  name,
  isOpen,
  onClick,
}) => (
  <button
    className={`w-full h-[45px] flex justify-between items-center px-4 mx-auto text-left transition-colors duration-200 ${
      isOpen ? "bg-gray-100" : "bg-white"
    } hover:bg-gray-50`}
    onClick={onClick}
    type="button"
  >
    <span className="text-base sm:text-lg font-medium truncate" title={name}>
      {name}
    </span>
    <span className="text-2xl w-6 text-right select-none">
      {isOpen ? "−" : "+"}
    </span>
  </button>
);
