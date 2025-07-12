// 実データ本体

import { Category } from "./type";

export const facilitiesData: Category[] = [
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
