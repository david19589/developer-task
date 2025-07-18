import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-[#152535] px-2.5 py-3.5 mb-2.5">
      <span className="lg:w-[4.6875rem] lg:h-10 flex w-15 h-8 bg-[#253241] rounded-lg" />
      <div className="lg:gap-1.25 flex items-center gap-5">
        <div className="lg:gap-3.75 flex bg-[#10202D] gap-5 rounded-md border-1 border-[#192C40]">
          <div className="flex items-center gap-2.5 p-2 pr-0">
            <Image
              src="icons/dollar_icon.svg"
              alt="dollar_icon"
              width={24}
              height={24}
              className="rounded-full bg-[#192C40]"
            />
            <h2 className="lg:text-[0.9375rem] lg:leading-4 lg:tracking-[0.00625rem] text-[0.75rem] font-[500] leading-[0.875rem] tracking-[0.0125rem] text-[#FFF]">
              500.00
            </h2>
          </div>
          <div className="lg:px-[1.3125rem] flex items-center justify-center rounded-md rounded-l-none bg-[#0F70DC] p-2 cursor-pointer">
            <Image
              src="icons/deposit_icon.svg"
              alt="deposit_icon"
              width={24}
              height={24}
              className="lg:hidden"
            />
            <h2 className="lg:flex hidden text-[0.9375rem] leading-4 tracking-[0.0125rem] font-[500] text-[#FFF]">
              DEPOSIT
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-1.25">
          <div className="rounded-md bg-[#1C2E3D] p-2 cursor-pointer border-1 border-[#273344]">
            <Image
              src="icons/bell_icon.svg"
              alt="bell_icon"
              width={24}
              height={24}
              className="h-6"
            />
          </div>
          <div className="rounded-md bg-[#1C2E3D] p-2 cursor-pointer border-1 border-[#273344]">
            <Image
              src="icons/user_icon.svg"
              alt="user_icon"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
