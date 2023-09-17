import React from "react";

const ThemeBtns = ({ theme }) => {
  const changeTheme = () => {
    //a função vai pegar os props de cor para usar na mudança do tema do calculadora
    console.log(`${theme}`);
    //document.body.style = `background: ${color}`;
    //document.querySelector('.App').style = 'background: blue'
    document.body.className = `${theme}`;
    //agora só definir a cor para os varios elementos
  };
  return <button onClick={changeTheme}></button>;
};
export default ThemeBtns;
