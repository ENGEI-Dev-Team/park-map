import React from "react";
import { FacilityToggleButton } from "../atoms/FacilityToggleButton";
import { FacilityDescription } from "../atoms/FacilityDescription";

/**
 * FacilityListItem
 * 1つの施設アイテム（トグルボタン＋詳細説明）
 * 状態は親から受け取る（isOpen）
 */
import { Facility } from "../../contents/park-item/type";

interface FacilityListItemProps {
  facility: Facility;
  isOpen: boolean;
  toggleOpen: () => void;
}

export const FacilityListItem: React.FC<FacilityListItemProps> = ({
  facility,
  isOpen,
  toggleOpen,
}) => (
  <li className="border-t border-gray-300">
    <FacilityToggleButton
      name={facility.name}
      isOpen={isOpen}
      onClick={toggleOpen}
    />
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-screen" : "max-h-0"
      }`}
    >
      <FacilityDescription
        description={facility.description}
        images={facility.images}
        alt={facility.name}
      />
    </div>
  </li>
);