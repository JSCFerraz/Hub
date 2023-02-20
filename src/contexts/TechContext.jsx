import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../components/services/api";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [technology, setTechnology] = useState([]);
  const [actionOverTech, setActionOverTech] = useState("");
  const [techLoading, setTechLoading] = useState(false);
  const [deleteTechLoading, setDeleteTechLoading] = useState(false);
  const { setUser } = useContext(UserContext);

  const reloadUser = async () => {
    const token = localStorage.getItem("@Kenziehub:token");

    try {
      const { data } = await api.get("/profile", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setUser(data);
    } catch (error) {
      console.error(error);
      toast.error(`Ops! Algo deu errado: falha na comunicação`);
    }
  };

  const addTechnology = async (formData) => {
    try {
      setTechLoading(true);
      const token = localStorage.getItem("@Kenziehub:token");
      await api.post("/users/techs", formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia cadastrada com sucesso");
      setActionOverTech("");
      await reloadUser();
    } catch (error) {
      console.error(error);
      toast.error(`Ops! Algo deu errado: ${error.response.data.message}`);
    } finally {
      setTechLoading(false);
    }
  };

  const updateTechnology = async (data, techId) => {
    try {
      setTechLoading(true);
      const token = localStorage.getItem("@Kenziehub:token");
      await api.put(`/users/techs/${techId}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia atualizada com sucesso");
      setActionOverTech("");
      await reloadUser();
    } catch (error) {
      console.error(error);
      toast.error(`Ops! Algo deu errado: ${error.response.data.message}`);
    } finally {
      setTechLoading(false);
    }
  };

  const removeTechnology = async (techId) => {
    try {
      setDeleteTechLoading(true);
      const token = localStorage.getItem("@Kenziehub:token");
      await api.delete(`/users/techs/${techId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia excluida com sucesso");
      setActionOverTech("");
      await reloadUser();
    } catch (error) {
      console.error(error);
      toast.error(`Ops! Algo deu errado: ${error.response.data.message}`);
    } finally {
      setDeleteTechLoading(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        technology,
        setTechnology,
        addTechnology,
        updateTechnology,
        removeTechnology,
        actionOverTech,
        setActionOverTech,
        techLoading,
        deleteTechLoading,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
