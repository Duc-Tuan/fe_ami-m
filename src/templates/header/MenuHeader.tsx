import Icon from "@/assets";
import { Func } from "@/types/typeGlobal";
import { Button, Image } from "antd";
import headerDeco from "@/assets/images/header-deco-3.png";
import "@/scss/header.scss";

const data = [
  {
    id: 1,
    name: "Về chúng tôi",
    path: "#21",
  },
  {
    id: 2,
    name: "Từ điển Ami",
    path: "#22",
  },
  {
    id: 3,
    name: "Cơ hội nghề nghiệp",
    path: "#23",
  },
  {
    id: 4,
    name: "Tin tức",
    path: "#24",
  },
];

function MenuHeader({
  onClickClose,
  onCloseMobile,
}: {
  onClickClose: Func;
  onCloseMobile: any;
}) {
  return (
    <div className="custom-color-bg-menu h-full relative z-[200]">
      <header className="flex justify-between items-center gap-2 container pt-6">
        <Icon name="icon-logo" className="w-20 lg:w-30 text-white" />

        <Button
          color="primary"
          variant="text"
          onClick={() => {
            onCloseMobile();
            onClickClose();
          }}
          className="text-white! p-3! h-auto! rounded-[100%]!"
        >
          <Icon name="icon-close" />
        </Button>
      </header>

      <div className="absolute bottom-0 right-0 left-0 flex justify-between items-center gap-40">
        <div className="flex justify-between items-center">
          <img src={headerDeco.src} className="colored-png" />
          <img src={headerDeco.src} className="colored-png" />
        </div>
        <img src={headerDeco.src} className="colored-png" />
      </div>

      <div className="absolute bottom-0 left-0 -z-10">
        <Icon name="icon-vertor-menu" />
      </div>
      <div className="cursor-pointer xl:w-50 xl:h-50 w-30 h-30 bg-[#f4475c] absolute xl:top-20 xl:bottom-0 bottom-10 xl:right-100  right-20 group hover:scale-110 transition-all duration-200 text-[16px] md:text-[20px] text-center font-bold z-100 rounded-full text-white flex flex-col gap-5 justify-center items-center">
        <Icon
          name="icon-right"
          className="-rotate-45 scale-150 group-hover:scale-200 transition-all duration-300"
        />
        <h1>
          Kết Nối Với <br />
          Ami&M
        </h1>
      </div>

      <main className="text-white container mt-10 font-quicksand-bold relative">
        <div className="max-w-[600px]!">
          <h1 className="text-[#FFFFFF8A] text-[24px] mb-2 hidden md:block">Menu</h1>
          {data.map((i, idx) => (
            <a
              href={i.path}
              className="text-white! relative cursor-pointer mt-5 md:mt-0 block w-auto group"
              key={idx}
            >
              <div className="absolute top-0 left-0 text-[20px] text-sub-menu-header">
                0{idx + 1}/
              </div>
              <div className="pl-10 lg:text-[52px] text-[28px] group-hover:translate-x-[20px] transition-all duration-300">
                {i.name}
              </div>
            </a>
          ))}

          <div className="md:text-[18px] text-[12px] mt-10 space-y-2 max-w-[500px]">
            <a
              href={"#"}
              className="text-white! flex justify-start items-start gap-2 cursor-pointer"
            >
              <div className="md:pt-2 pt-1">
                <Icon name="icon-local" />
              </div>
              <div className="">
                Địa chỉ: Số 14 phố Đỗ Hành, phường Nguyễn Du, quận Hai Bà Trưng,
                thành phố Hà Nội
              </div>
            </a>
            <a
              href={"#"}
              className="text-white! flex justify-start items-start gap-2 cursor-pointer"
            >
              <div className="">
                <Icon name="icon-phone" />
              </div>
              <div className="">Liên hệ hotline: (+84) 243 201 2889</div>
            </a>
            <a
              href={"#"}
              className="text-white! flex justify-start items-start gap-2 cursor-pointer"
            >
              <div className="">
                <Icon name="icon-email" />
              </div>
              <div className="">Email: Info@amigroup.com.vn</div>
            </a>
          </div>

          <div className="flex justify-start items-center gap-6 mt-10 md:text-[24px] text-[14px]">
            <a href="#1" className="text-white! cursor-pointer">
              VIE
            </a>
            <a href="#2" className="text-gray-400! cursor-pointer">
              ENG
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MenuHeader;
