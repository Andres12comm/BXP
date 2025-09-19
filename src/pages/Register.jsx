import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
        {/* Logo */}
        <h1 className="text-4xl font-extrabold text-center mb-2">
          <span style={{ color: "#e8e62b" }}>B</span>
          <span style={{ color: "#2be83d" }}>X</span>
          <span style={{ color: "#e82b71" }}>P</span>
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Crea tu cuenta y empieza a jugar
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Registro
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Nombres */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre(s)
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tus nombres"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Apellidos */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Apellido(s)
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tus apellidos"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Crea una contraseña"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-[#e82b71] text-white py-2 rounded-lg hover:bg-pink-700 transition font-medium"
          >
            Registrarse
          </button>
        </form>

        {/* Volver */}
        <p className="text-center text-sm text-gray-600 mt-6">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/" className="text-pink-600 font-medium hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
