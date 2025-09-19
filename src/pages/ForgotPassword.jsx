import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

function ForgotPassword() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Encabezado */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Recuperar contraseña</h1>
        <p className="text-gray-500">Ingresa tu email para recibir un enlace</p>
      </div>

      {/* Card */}
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <form className="space-y-4">
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
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Enviar enlace
          </button>
        </form>

        {/* Volver a login */}
        <p className="text-center text-sm text-gray-600 mt-6">
          ¿Recordaste tu contraseña?{" "}
          <Link to="/" className="text-pink-600 font-medium hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
