import { FC } from "react";
import { Facilities } from "../const/type";

type SectionListProps = {
  items: Facilities[];
  sectionRefs: (id: string, element: HTMLElement | null) => void;
};

export const SectionList: FC<SectionListProps> = ({ items, sectionRefs }) => {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <section
          key={item.id}
          ref={(el) => {
            console.log("Setting ref for:", item.id, el); // デバッグ用
            sectionRefs(item.id, el);
          }}
          className="p-6 border rounded-md shadow bg-white min-h-[300px]"
          id={item.id} // HTML idも追加
        ></section>
      ))}
    </div>
  );
};
