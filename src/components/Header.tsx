import { useAuthStore } from "../stores/useAuthStore";

export default function Header() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div
      style={{
        padding: "10px",
        borderBottom: "1px solid gray",
        display: "flex",
        justifyContent: "space-between", // 👈 đẩy 2 bên
        alignItems: "center",
      }}
    >
      {user ? (
        <>
          {/* 👇 bên trái */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src={`https://i.pravatar.cc/40?u=${user.email}`} // 👈 random theo email
              width="40"
              style={{ borderRadius: "50%" }}
            />
            <span>{user.name || user.email}</span>
          </div>

          {/* 👇 bên phải */}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Chưa đăng nhập</span>
      )}
    </div>
  );
}