// 型定義（Facility, FacilityCategory）

export type Facility = {
  name: string;
  description: string;
  image: string;
};

export type Category = {
  category: string;
  items: Facility[];
};
