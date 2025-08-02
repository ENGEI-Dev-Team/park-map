// 実データ本体
import { Category } from "./type";

export const facilitiesData: Category[] = [
  {
    category: "駐車場",
    items: [
      {
        id: 1,
        name: "区営地下駐車場出入口",
        description: "区営地下駐車場の出入口です。",
        images: [
          "/images/parking1.jpg",
          "/images/parking2.jpg",
          "/images/parking3.jpg",
          "/images/parking4.jpg",
        ],
      },
    ],
  },
  {
    category: "スポーツ施設",
    items: [
      {
        id: 2,
        name: "区営浜町運動場",
        description: "区営の運動場です。",
        images: [
          "/images/sports field1.jpg",
          "/images/sports field2.jpg",
          "/images/sports field3.jpg",
        ],
      },
      {
        id: 3,
        name: "野球スタンド",
        description: "野球観戦用のスタンドです。",
        images: [
          "/images/bleachers1.jpg",
          "/images/bleachers2.jpg",
          "/images/bleachers3.jpg",
        ],
      },
      {
        id: 7,
        name: "区営総合スポーツセンター",
        description: "総合的なスポーツ施設です。",
        images: [
          "/images/Sports Complex1.jpg",
          "/images/Sports Complex2.jpg",
          "/images/Sports Complex3.jpg",
        ],
      },
    ],
  },
  {
    category: "公園・広場",
    items: [
      {
        id: 4,
        name: "芝生広場",
        description: "広々とした芝生広場です。",
        images: [
          "/images/Lawn Area1.jpg",
          "/images/Lawn Area2.jpg",
          "/images/Lawn Area3.jpg",
        ],
      },
      {
        id: 9,
        name: "遊具広場",
        description: "子供向けの遊具が設置された広場です。",
        images: [
          "/images/playground1.jpg",
          "/images/playground2.jpg",
          "/images/playground3.jpg",
          "/images/playground4.jpg",
          "/images/playground5.jpg",
        ],
      },
    ],
  },
  {
    category: "自然・景観",
    items: [
      {
        id: 5,
        name: "もや立ちの池",
        description: "自然豊かな池です。",
        images: ["/images/pond1.jpg", "/images/pond2.jpg"],
      },
      {
        id: 6,
        name: "桜の樹林",
        description: "桜が美しい樹林エリアです。",
        images: ["/images/sakura-trees.jpg"],
      },
    ],
  },
  {
    category: "レクリエーション",
    items: [
      {
        id: 8,
        name: "デイキャンプ場",
        description: "日帰りキャンプが楽しめる場所です。",
        images: ["/images/day-camp.jpg"],
      },
    ],
  },
  {
    category: "水辺・遊歩道",
    items: [
      {
        id: 11,
        name: "隅田川テラス",
        description: "隅田川沿いのテラスです。",
        images: [
          "/images/sumida-terrace1.jpg",
          "/images/sumida-terrace2.jpg",
          "/images/sumida-terrace3.jpg",
        ],
      },
    ],
  },
  {
    category: "施設",
    items: [
      {
        id: 10,
        name: "浜町メモリアル",
        description: "浜町メモリアルです。",
        images: [
          "/images/hamatyomemory1.jpg",
          "/images/hamatyomemory2.jpg",
          "/images/hamatyomemory3.jpg",
        ],
      },
    ],
  },
];
