import { FC } from "react";

type Props = {
  label: string;
  onClick: () => void;
};

export const ScrollButton: FC<Props> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    {label}
  </button>
);
