import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import "./Login.css";
import Logo from "./Logo";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página
    navigate("/MainMenu"); // Redirige a MainMenu
  };

  return (
    <div className="BodyLogin">
      <div className="CardLogin">
        <div>
          <Logo scale={1.7} />
        </div>

        <p className="SubtitleLogin">Aprende, juega y gana puntos</p>
        <h2 className="TitleLogin">Inicio Sesión</h2>

        <form className="FormLogin" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="FormGroupLogin">
            <label>Email</label>
            <div className="relative">
              <Mail className="InputIcon" />
              <input
                type="email"
                placeholder="tu@email.com"
                className="InputLogin"
              />
            </div>
          </div>

          {/* Contraseña */}
          <div className="FormGroupLogin">
            <label>Contraseña</label>
            <div className="relative">
              <Lock className="InputIcon" />
              <input
                type="password"
                placeholder="Tu contraseña"
                className="InputLogin"
              />
            </div>
          </div>

          {/* Link */}
          <div>
            <Link to="/forgot-password" className="ForgotLink">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          {/* Botón */}
          <button type="submit" className="BtnLogin">
            Iniciar Sesión
          </button>
        </form>

        {/* Registro */}
        <p className="RegisterText">
          ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
