import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest} from "../api/autenticancion";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debería estar dentro de AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [usuario, setUser] = useState(null);
  const [plan, setPlan] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  // limpia errores despues de 5 segundos
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const signup = async (usuario) => {
    try {
    
      const res = await registerRequest(usuario);
      console.log(res)
      if (res.status === 200) {
        setUser(res.data);
        setPlan(res.data.plan);
        setIsAuthenticated(true);
      }
    } catch (error) {
      //console.log(error.response.data);
      setErrors(error.response.data.message);
    }
  };

  const signin = async (usuario) => {
    try {
      const res = await loginRequest(usuario);
      setUser(res.data);
      setPlan(res.data.plan);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      // setErrors(error.response.data.message);
    }
  };


  return (
    <AuthContext.Provider
      value={{
        usuario,
        plan,
        signup,
        signin,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
