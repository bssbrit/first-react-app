import ThemeBtns from "./ThemeBtns";
const Theme = () => {
  return (
    <div className="theme">
      <div className="themeP">
        <p>THEME</p>
      </div>
      <div className="themeOption">
        <div>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div className="themeOptionBtn">
          <ThemeBtns theme="light-mode" />
          <ThemeBtns theme="grey-mode" />
          <ThemeBtns theme="dark-mode" />
        </div>
      </div>
    </div>
  );
};

export default Theme;
