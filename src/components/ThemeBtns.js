import React from "react";

const ThemeBtns = ({ theme }) => {
  const changeTheme = () => {
    document.body.className = `${theme}`;
  };
  return <button onClick={changeTheme}></button>;
};
export default ThemeBtns;
