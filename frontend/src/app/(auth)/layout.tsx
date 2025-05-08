import { Coffee } from "lucide-react";

export default function Authlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white w-[1440px] h-[1024px] justify-center items-center flex ">
      {children}
      <div className="w-[710px] h-full bg-[#FBBF24]">
        <div className="inline-flex items-center gap-2 w-[147px] h-5">
          <Coffee width={20} height={20} />
          <p className="text-[#09090B] font-bold text-[16px]">Buy Me Coffee</p>
        </div>
      </div>
      <div className="w-[710px] h-full bg-[#FFF]"></div>
    </div>
  );
}
