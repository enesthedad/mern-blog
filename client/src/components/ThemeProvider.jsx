import React from "react";
import { useSelector } from "react-redux";

export const ThemeProvider = ({ children }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className="text-gray-700 bg-white dark:text-gray-200 dark:bg-[#212022] min-h-screen">
        {children}
      </div>
    </div>
  );
};
