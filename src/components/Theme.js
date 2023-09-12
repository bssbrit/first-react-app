import ThemeBtns from "./ThemeBtns"
const Theme = () => {
  return (
    <div className="theme">
      <p>THEME</p>
      <div className="themeOption">
           <ThemeBtns theme='light-mode' />
           <ThemeBtns theme='grey-mode'/>
           <ThemeBtns theme='dark-mode'/>
      </div>
    </div>
  )
}

export default Theme
