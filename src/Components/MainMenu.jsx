import { useState } from "react";

import "./MainMenu.css";

function MainMenu() {

  const [menuAbierto, setMenuAbierto] = useState(false);

  const cursos = ["Matemáticas", "Historia", "Programación", "Física", "Inglés"];

  return (

    <div className="Body">

      <div className="Header">

        <h1 className="Titulo">BXP</h1>

        <div className="Acciones">

          <button className="BtnHeader" onClick={() => setMenuAbierto(!menuAbierto)}>

            Cursos

          </button>

          <button className="BtnPerfil">U</button>

        </div>

      </div>

     
      <div className="Container">
       
        <div className="ColumnIzq">

          <h2 className="Subtitulo">Novedades</h2>

          <div className="CajaNovedades">

            <p>Aquí aparecerán las novedades de los cursos...</p>

          </div>

        </div>

       
        {menuAbierto && (

          <div className="ColumnDerOverlay">

            <button className="BtnC" onClick={() => setMenuAbierto(false)}>X</button>

            <h2 className="Subtitulo">Mis Cursos</h2>

            <ul className="ListaCursos">

              {cursos.map((curso, i) => (

                <li key={i} className="CursoItem">{curso}</li>

              ))}

            </ul>

          </div>

        )}

      </div>

    </div>

  );
}

export default MainMenu;
