import { facilitiesData } from "../app/contents/park-item";
import { FacListTemplates } from "./FacListTemplates";
import { FC } from "react";

export const FacilitiesList: FC = () => {
  return (
    <div id="info" className="scroll-mt-20">
      <h2 className="pl-4 py-2 bg-[#e8d3d1] text-[#741910] font-bold text-2xl border-l-8 border-[#741910] rounded-sm">
        公園施設一覧
      </h2>
      <p className="py-4">施設名をクリックすると施設情報が確認できます。</p>
      <FacListTemplates items={facilitiesData} />
    </div>
  );
};
