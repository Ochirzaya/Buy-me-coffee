import Image from "next/image";

export default function Authlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white w-screen h-screen flex ">
      <div className="w-1/2 h-full bg-[#FBBF24] flex items-center justify-center">
        <div className="flex absolute items-center   top-8 left-20">
          <Image src="/Logo.png" alt="logo" height={20} width={147} />
        </div>
        <div className="flex flex-col items-center gap-10">
          <Image src="/icon.png" alt="icon" height={240} width={240} />
          <div className="flex flex-col items-start gap-3">
            <p className="w-full text-[#09090B] font-bold text-2xl items-center flex justify-center">
              Fund your creative work
            </p>
            <p className=" flex text-[#09090B] font-normal text-[16px] ">
              Accept support. Start a membership. Setup a shop. It’s easier than
              you think.
            </p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
