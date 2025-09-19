import { Link } from "react-router-dom"; 
import { Mail, Lock } from "lucide-react";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        {/* Logo */}
        <h1 className="text-4xl font-extrabold text-center mb-2">
          <span style={{ color: "#2be83d" }}>B</span>
          <span style={{ color: "#e82b71" }}>X</span>
          <span style={{ color: "#e8e62b" }}>P</span>
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Aprende, juega y gana puntos
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Iniciar Sesión
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Ingresa tus credenciales para acceder a tu cuenta
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#e82b71] focus:outline-none"
              />
            </div>
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Tu contraseña"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#e82b71] focus:outline-none"
              />
            </div>
          </div>

          {/* Link */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-[#e82b71] hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-[#e82b71] text-white py-2 rounded-lg hover:bg-pink-700 transition font-medium"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Registro */}
        <p className="text-center text-sm text-gray-600 mt-6">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="text-[#e82b71] font-medium hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
