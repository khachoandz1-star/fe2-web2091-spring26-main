import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const login = () => {
    setUser({
      name: "hoanmeo88",
      avatar: "https://i.pravatar.cc/100",
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <button onClick={login}>Login</button>
      <br />
      <button onClick={logout}>Logout</button>
      <br />
      <button onClick={toggleTheme}>Theme</button>
    </div>
  );
}