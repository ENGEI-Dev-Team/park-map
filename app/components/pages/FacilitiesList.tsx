import { FacListTemplates } from "../templates/FacListTemplates";
import { Data } from "../const/data";
import { FC } from "react";

export const FacilitiesList:FC = () => {
  return (
    <div>
      <h2 className="pl-4 py-2 bg-red-200 text-slate-800 font-bold text-2xl border-l-8 border-red-500 rounded-sm">
        公園施設一覧
      </h2>
      <p className="py-4">施設名をクリックすると施設情報が確認できます。</p>
      <FacListTemplates items={Data} />
    </div>
  );
};
