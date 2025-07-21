// components/molecules/ButtonList.tsx
import { FC } from "react";
import { Facility } from "../../app/contents/park-item";

type FacWithCate = Facility & { category: string };

type Props = {
  items: FacWithCate[];
  onScroll: (categoryName: string) => void;
};

export const ButtonList: FC<Props> = ({ items, onScroll }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
    {items.map((item) => (
      <button
        key={item.id}
        onClick={() => onScroll(item.category)}
        className="relative w-full h-20 flex items-center justify-center px-6 py-4 text-[#4d392d] bg-[#efe4cf] rounded border  border-[#741910] hover:bg-[#e59c96] transition-colors  duration-200"
      >
        <span className="block text-center font-medium pr-10">{item.name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </button>
    ))}
  </div>
);
