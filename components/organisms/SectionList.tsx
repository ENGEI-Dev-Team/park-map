import { FC } from "react";
import { Facility } from "../../app/contents/park-item";

type SectionListProps = {
  items: Facility[];
  sectionRefs: (id: number, element: HTMLElement | null) => void;
};

export const SectionList: FC<SectionListProps> = ({ items, sectionRefs }) => {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <section
          key={item.id}
          ref={(el) => {
            /*console.log("Setting ref for:", item.id, el); */
            sectionRefs(item.id, el);
          }}
          className="p-6 border rounded-md shadow bg-white min-h-[300px]"
          id={item.id.toString()}
        ></section>
      ))}
    </div>
  );
};
