import React from "react";
import { FacilityListItem } from "../molecules/FacilityListItem";
import { Facility, Category } from "../../app/contents/park-item/type";

interface FacilityCategoryListProps {
  category: Category;
  openItems: Record<string, boolean>;
  toggleItem: (name: string) => void;
  sectionRefs?: (categoryName: string, element: HTMLElement | null) => void; // stringキーに変更
}

export const FacilityCategoryList: React.FC<FacilityCategoryListProps> = ({
  category,
  openItems,
  toggleItem,
  sectionRefs,
}) => (
  <div
    className="mb-12 md:scroll-mt-20 scroll-mt-16"
    ref={(el) => {
      sectionRefs?.(category.category, el);
    }}
  >
    <h3 className="text-xl sm:text-2xl font-semibold mb-4">
      {category.category}
    </h3>
    <ul>
      {category.items.map((facility) => (
        <li key={facility.id} className="border-t border-gray-300">
          <FacilityListItem
            facility={facility}
            isOpen={!!openItems[facility.name]}
            toggleOpen={() => toggleItem(facility.name)}
          />
        </li>
      ))}
    </ul>
  </div>
);
