import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import "./Login.css";
import Logo from "../components/Logo";


function Login() {
  return (
      <div className="login-box">
        <div><Logo scale={1.7}/></div>
        <p className="subtitle">Aprende, juega y gana puntos</p>

        <h2 className="title">Inicio Sesión</h2>

        <form className="login-form">
          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <div className="input-container">
              <Mail className="input-icon" />
              <input type="email" placeholder="tu@email.com" />
            </div>
          </div>

          {/* Contraseña */}
          <div className="form-group">
            <label>Contraseña</label>
            <div className="input-container">
              <Lock className="input-icon" />
              <input type="password" placeholder="Tu contraseña" />
            </div>
          </div>

          {/* Link */}
          <div className="forgot">
            <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
          </div>

          {/* Botón */}
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>

        {/* Registro */}
        <p className="register">
          ¿No tienes una cuenta?{" "}
          <Link to="/register">Regístrate aquí</Link>
        </p>
      </div>
  );
}

export default Login;
