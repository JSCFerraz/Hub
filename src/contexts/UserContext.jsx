import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../components/services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingUserdash, setLoadingUserdash] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@Kenziehub:token");
    async function loadUser() {
      if (!token) {
        setLoadingUserdash(false);
        return;
      } else {
        try {
          setLoadingUserdash(true);
          const { data } = await api.get("/profile", {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          navigate("/userdash");
        } catch (error) {
          localStorage.remove("@Kenziehub:token");
          localStorage.remove("@Kenziehub:userid");
          navigate("/");
          console.error(error);
        } finally {
          setLoadingUserdash(false);
        }
      }
    }

    loadUser();
  }, []);

  const signInUser = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", formData);
      toast.success("Usuário logado com sucesso");
      const { token, user: userResponse } = response.data;
      window.localStorage.clear();
      window.localStorage.setItem("@Kenziehub:token", token);
      window.localStorage.setItem("@Kenziehub:userid", userResponse.id);
      setUser(userResponse);
      navigate("/userdash");
    } catch (error) {
      console.error(error);
      toast.error(`Ops! Algo deu errado: ${error.response.data.message}`);
    } finally {
      setLoading(false);
    }
  };

  async function registerUser(formData, reset) {
    try {
      const response = await api.post("/users", formData);
      response.statusText === "Created" &&
        toast.success("Conta criada com sucesso");
      navigate("/");
      setLoading(false);
      reset();
    } catch (error) {
      console.error(error);
      toast.error(`Ops! Algo deu errado: ${error.response.data.message}`);
    } finally {
      setLoading(false);
      reset();
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signInUser,
        loading,
        setLoading,
        loadingUserdash,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
