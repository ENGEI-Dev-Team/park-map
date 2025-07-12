// components/molecules/ButtonList.tsx
import { FC } from "react";
import { Facilities } from "@/app/components/const/type";

type Props = {
  items: Facilities[];
  onScroll: (id: string) => void;
};

export const ButtonList: FC<Props> = ({ items, onScroll }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
    {items.map((item) => (
      <button
        key={item.id}
        onClick={() => onScroll(item.id)}
        className="relative w-full px-6 py-4 text-black rounded border border-gray-200 bg-slate-100 hover:bg-red-100 transition-colors duration-200"
      >
        <span className="block text-center font-medium">{item.title}</span>
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
