"use client";

import React, { useState } from "react";
import Image from "next/image";

// -----------------------------
//  Atoms：最小パーツ
// -----------------------------

/**
 * FacilityToggleButton
 * 施設名と開閉アイコンを表示するボタン
 * 押すと詳細の開閉をトグルする
 */
const FacilityToggleButton: React.FC<{
  name: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ name, isOpen, onClick }) => (
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

/**
 * FacilityDescription
 * 施設の説明文と画像を横並びで表示する部品
 */
const FacilityDescription: React.FC<{
  description: string;
  image: string;
  alt: string;
}> = ({ description, image, alt }) => (
  <div className="pb-6 px-2 sm:px-4">
    <div className="sm:flex sm:gap-6">
      <div className="sm:flex-1 mb-2 sm:mb-0">
        <p className="text-sm sm:text-base">{description}</p>
      </div>
      <div className="sm:w-[400px] sm:shrink-0">
        <Image
          src={image}
          alt={alt}
          width={400}
          height={250}
          className="rounded"
        />
      </div>
    </div>
  </div>
);

// -----------------------------
//  Molecules：複合部品
// -----------------------------

/**
 * FacilityListItem
 * 1つの施設アイテム（トグルボタン＋詳細説明）
 * 状態は親から受け取る（isOpen）
 */
const FacilityListItem: React.FC<{
  facility: Facility;
  isOpen: boolean;
  toggleOpen: () => void;
}> = ({ facility, isOpen, toggleOpen }) => (
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
        image={facility.image}
        alt={facility.name}
      />
    </div>
  </li>
);

// -----------------------------
// 型定義とサンプルデータ
// -----------------------------

type Facility = {
  name: string;
  description: string;
  image: string;
};

type Category = {
  category: string;
  items: Facility[];
};

const facilitiesData: Category[] = [
  {
    category: "遊具",
    items: [
      {
        name: "すべり台",
        description: "全長10mのローラーすべり台です。",
        image: "/images/slide.jpg",
      },
      {
        name: "ブランコ",
        description: "小さなお子様向けのブランコ。",
        image: "/images/swing.jpg",
      },
    ],
  },
  {
    category: "休憩所",
    items: [
      {
        name: "東屋",
        description: "日陰で休める東屋があります。",
        image: "/images/gazebo.jpg",
      },
    ],
  },
];

// -----------------------------
//  Organisms：大きな構成要素
// -----------------------------

/**
 * FacilityCategoryList
 * カテゴリ名とそのカテゴリに属する施設リストの表示
 */
const FacilityCategoryList: React.FC<{
  category: Category;
  openItems: Record<string, boolean>;
  toggleItem: (name: string) => void;
}> = ({ category, openItems, toggleItem }) => (
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
