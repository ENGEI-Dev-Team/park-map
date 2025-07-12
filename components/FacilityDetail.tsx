"use client";

import React, { useState } from "react";
import { FacilityCategoryList } from "../app/components/organisms/FacilityCategoryList";
import { facilitiesData } from "../app/contents/park-item/data";

/**
 * FacilityDetail
 * 公園施設ページ全体を構成するルートコンポーネント
 * カテゴリ単位で施設を整理・表示する
 */
const FacilityDetail: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (name: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="w-full max-w-[1024px] mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 border-b pb-2">
        公園施設詳細
      </h2>
      {facilitiesData.map((category) => (
        <FacilityCategoryList
          key={category.category}
          category={category}
          openItems={openItems}
          toggleItem={toggleItem}
        />
      ))}
    </div>
  );
};

export default FacilityDetail;
