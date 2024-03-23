import { useSelector } from "react-redux";
export const BlogIcon = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={theme}>
      <h1 className="text-[30px] md:text-[42px] font-bold justify-center flex">
        <a href="/">
          <div className="relative text-stone-800 dark:text-[#f3f3f3">
            e<span className="text-[#FE7D91]">.</span>soyturk
            <p className="absolute right-0 top-[-10px] text-[12px] md:text-[20px]">
              엔<span className="text-[#B1DCC9]">에</span>스
            </p>
          </div>
        </a>
      </h1>
    </div>
  );
};
