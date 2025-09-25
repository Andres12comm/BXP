import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import Logo from "./Logo";
import "./Register.css";

function Register() {
  return (
    <div className="BodyRegister">
      <div className="CardRegister">
        <Logo scale={1.7} />
        <p className="SubtitleRegister">Crea tu cuenta y empieza a jugar</p>

        <h2 className="TitleRegister">Registro</h2>

        <form className="FormRegister">
          {/* Nombres */}
          <div className="FormGroupRegister">
            <label>Nombre(s)</label>
            <div className="relative">
              <User className="InputIcon" />
              <input type="text" placeholder="Tus nombres" className="InputRegister" />
            </div>
          </div>

          {/* Apellidos */}
          <div className="FormGroupRegister">
            <label>Apellido(s)</label>
            <div className="relative">
              <User className="InputIcon" />
              <input type="text" placeholder="Tus apellidos" className="InputRegister" />
            </div>
          </div>

          {/* Email */}
          <div className="FormGroupRegister">
            <label>Email</label>
            <div className="relative">
              <Mail className="InputIcon" />
              <input type="email" placeholder="tu@email.com" className="InputRegister" />
            </div>
          </div>

          {/* Contraseña */}
          <div className="FormGroupRegister">
            <label>Contraseña</label>
            <div className="relative">
              <Lock className="InputIcon" />
              <input type="password" placeholder="Crea una contraseña" className="InputRegister" />
            </div>
          </div>

          {/* Botón */}
          <button type="submit" className="BtnRegister">
            Registrarse
          </button>
        </form>

        {/* Volver */}
        <p className="LoginLinkText">
          ¿Ya tienes una cuenta? <Link to="/">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
