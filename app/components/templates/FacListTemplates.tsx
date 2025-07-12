"use client";

import { useRef } from "react";
import { ButtonList } from "../molecules/ButtonList";
import { SectionList } from "../organisms/SectionList";
import { Facilities } from "@/app/components/const/type";

type Props = {
  items: Facilities[];
};

export const FacListTemplates: React.FC<Props> = ({ items }) => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // コールバック関数を追加
  const handleRefSet = (id: string, element: HTMLElement | null) => {
    sectionRefs.current[id] = element;
  };

  const scrollToSection = (id: string) => {
    /*デバッグ
    console.log('Scrolling to:', id);
    console.log('Available refs:', Object.keys(sectionRefs.current));
    console.log('Target element:', sectionRefs.current[id]);    */
    const element = sectionRefs.current[id];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="p-4 space-y-10">
      <ButtonList items={items} onScroll={scrollToSection} />
      <SectionList items={items} sectionRefs={handleRefSet} />
    </div>
  );
};
