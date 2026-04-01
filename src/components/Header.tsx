import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <div style={{ padding: "10px", borderBottom: "1px solid gray" }}>
      {user ? (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <img src={user.avatar} width="40" />
          <span>{user.name}</span>
        </div>
      ) : (
        <span>Chưa đăng nhập</span>
      )}
    </div>
  );
}