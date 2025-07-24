"use client";

import { useRef } from "react";
import { ButtonList } from "./molecules/ButtonList";
import { Category } from "../app/contents/park-item";
import FacilityDetail from "./FacilityDetail";

type Props = {
  items: Category[];
};

export const FacListTemplates: React.FC<Props> = ({ items }) => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const facilityDetailRef = useRef<HTMLDivElement>(null);

  const handleRefSet = (categoryName: string, el: HTMLElement | null) => {
    sectionRefs.current[categoryName] = el;
  };

  const scrollToSection = (categoryName: string) => {
    /*
    console.log("Scrolling to:", categoryName);
    console.log("Target element:", sectionRefs.current[categoryName]);
    console.log("sectionRefs.current:", sectionRefs.current);
    */

    const element = sectionRefs.current[categoryName];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn("Section not found for category:", categoryName);
    }
  };

  const flatItems = items.flatMap((category) =>
    category.items.map((facility) => ({
      ...facility,
      category: category.category,
    })),
  );

  return (
    <div className="space-y-10">
      <div className="p-4">
        <ButtonList items={flatItems} onScroll={scrollToSection} />
      </div>
      <div ref={facilityDetailRef}>
        <FacilityDetail sectionRefs={handleRefSet} />
      </div>
    </div>
  );
};
