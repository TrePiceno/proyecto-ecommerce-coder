"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";
import Image from "next/image";

const Contacto = () => {

  const { registerUser, googleLogIn } = useContext(AuthContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    let isValid = true;
    let newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "El correo es obligatorio.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "El formato del correo no es válido.";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "La contraseña es obligatoria.";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Formulario enviado con:", { email, password });
      alert("Registro exitoso!");
      setEmail("");
      setPassword("");
      setErrors({ email: "", password: "" });
      const values = {
        email: e.target.email.value,
        password: e.target.password.value
      }
      registerUser(values);
      router.push('/');
    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Registro de Usuario
        </h2>

        <form onSubmit={submitForm} className="space-y-4">
          {/* Campo de correo */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Correo electrónico</label>
            <input
              type="email"
              id="email" 
              name="email"
              className={`w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 outline-none`}
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Campo de contraseña */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Contraseña</label>
            <input
              type="password"
              id="password" 
              name="password"
              className={`w-full px-4 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-400 outline-none`}
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Botón de registro */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition-all font-semibold"
          >
            Registrarse
          </button>
        </form>

        <div className="flex flex-col justify-center items-center gap-4 p-2 rounded-md mt-4">
          <h3>Iniciar sesión con:</h3>
          <button
            onClick={googleLogIn}
            aria-label="Ingresar con Google"
            className="group"
          >
            <Image
              src="/images/imgoogle.png"
              alt="Google"
              width={50}
              height={50}
              className="object-contain transition-transform duration-300 group-hover:scale-125 group-hover:brightness-110"
            />
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default Contacto;

