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

  // カテゴリ名でDOM要素を登録
  const handleRefSet = (categoryName: string, el: HTMLElement | null) => {
    sectionRefs.current[categoryName] = el;
  };

  // カテゴリ名でスクロール
  const scrollToSection = (categoryName: string) => {
    console.log("Scrolling to:", categoryName);
    console.log("Target element:", sectionRefs.current[categoryName]);
    console.log("sectionRefs.current:", sectionRefs.current);

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

  // ボタン用にカテゴリ名だけ取り出す（施設リストは使わない）
  const flatItems = items.flatMap((category) =>
    category.items.map((facility) => ({
      ...facility,
      category: category.category,
    })),
  );

  return (
    <div className="space-y-10">
      {/* カテゴリボタンリスト */}
      <div className="p-4">
        <ButtonList items={flatItems} onScroll={scrollToSection} />
      </div>

      {/* 施設詳細セクション */}
      <div ref={facilityDetailRef}>
        <FacilityDetail sectionRefs={handleRefSet} />
      </div>
    </div>
  );
};
