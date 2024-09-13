import ThemeButton from "./ThemeButton";
import Link from "next/link";
import RenderImage from "./RenderImage";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  // {
  //     name: 'Portfolio',
  // },
];

type navTypes = {
  name: string;
  href: string;
};

function Header() {
  return (
    <div
      className={`bg-[#FDFBF5] dark:bg-[#101010] fixed top-0 z-20 w-full flex justify-between items-center main-gutter py-5 border-b-[1px] shadow-sm`}
    >
      <div>
        <RenderImage width={50} height={50} />
      </div>
      <div className="h-[10px] w-[1px]" />
      <div className="flex gap-4 items-center">
        <div className=" space-x-4">
          {navLinks.map((items: navTypes) => (
            <Link
              className="text-black dark:text-white font-normal"
              href={items.href}
              key={items.name}
            >
              {items.name}
            </Link>
          ))}
        </div>

        <div>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
