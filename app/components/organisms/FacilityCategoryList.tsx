import React from "react";
import { FacilityListItem } from "../molecules/FacilityListItem";

/**
 * FacilityCategoryList
 * カテゴリ名とそのカテゴリに属する施設リストの表示
 */
import { Facility, Category } from "../../contents/park-item/type";

interface FacilityCategoryListProps {
  category: Category;
  openItems: Record<string, boolean>;
  toggleItem: (name: string) => void;
}

export const FacilityCategoryList: React.FC<FacilityCategoryListProps> = ({
  category,
  openItems,
  toggleItem,
}) => (
  <div className="mb-12">
    <h3 className="text-xl sm:text-2xl font-semibold mb-4">
      {category.category}
    </h3>
    <ul>
      {category.items.map((facility) => (
        <FacilityListItem
          key={facility.name}
          facility={facility}
          isOpen={!!openItems[facility.name]}
          toggleOpen={() => toggleItem(facility.name)}
        />
      ))}
    </ul>
  </div>
);