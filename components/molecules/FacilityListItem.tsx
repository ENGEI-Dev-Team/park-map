import React from "react";
import { FacilityToggleButton } from "../atoms/FacilityToggleButton";
import { FacilityDescription } from "../atoms/FacilityDescription";
import { Facility } from "../../app/contents/park-item";

/**
 * FacilityListItem
 * 1つの施設アイテム（トグルボタン＋詳細説明）
 * 状態は親から受け取る（isOpen）
 */

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
  <>
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
        image={facility.image}
        alt={facility.name}
      />
    </div>
  </>
);
