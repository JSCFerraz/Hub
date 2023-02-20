import Global from "./styles/global";
import { RoutesMain as Routes } from "./routes";
import { ToastContainer } from "react-toastify";
// import { useState } from "react";
import { UserProvider } from "./contexts/UserContext";

function App() {
  // const [user, setUser] = useState(null);

  return (
    <>
      <Global />
      {/* <Routes user={user} setUser={setUser} /> */}
      <UserProvider>
        <Routes />
      </UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
