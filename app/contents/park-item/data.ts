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
        image: "/images/underground-parking.jpg",
      },
      {
        id: 12,
        name: "スポーツセンター地下駐車場出入口",
        description: "スポーツセンター地下駐車場の出入口です。",
        image: "/images/sports-center-parking.jpg",
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
        image: "/images/sports-ground.jpg",
      },
      {
        id: 3,
        name: "野球スタンド",
        description: "野球観戦用のスタンドです。",
        image: "/images/baseball-stand.jpg",
      },
      {
        id: 7,
        name: "区営総合スポーツセンター",
        description: "総合的なスポーツ施設です。",
        image: "/images/sports-center.jpg",
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
        image: "/images/lawn-area.jpg",
      },
      {
        id: 11,
        name: "遊具広場",
        description: "子供向けの遊具が設置された広場です。",
        image: "/images/playground.jpg",
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
        image: "/images/pond.jpg",
      },
      {
        id: 6,
        name: "桜の樹林",
        description: "桜が美しい樹林エリアです。",
        image: "/images/cherry-trees.jpg",
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
        image: "/images/day-camp.jpg",
      },
    ],
  },
  {
    category: "水辺・遊歩道",
    items: [
      {
        id: 13,
        name: "隅田川テラス",
        description: "隅田川沿いのテラスです。",
        image: "/images/sumida-terrace.jpg",
      },
    ],
  },
];