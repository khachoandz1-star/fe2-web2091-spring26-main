import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import Lab1 from "./pages/lab1";
import Lab2 from "./pages/lab2";
import Lab3 from "./pages/lab3";
import StoryForm from "./pages/lab4";
import StoryList from "./pages/lab5";
import EditStory from "./pages/lab6";
import Login from "./pages/Login";
import Header from "./components/Header";
import Register from "./pages/Register";


function App() {
  return (
    <> <Header></Header>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="/register" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>
      
      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
      </div>

     
      <Routes>
      

      
      <Route path="/lab1" element={<Lab1/>}/>
      <Route path="/lab2" element={<Lab2/>}/>
      <Route path="/lab3" element={<Lab3/>}/>
      <Route path="/lab4" element={<StoryForm/>}/>
      <Route path="/lab5" element={<StoryList/>}/>
      <Route path="/edit/:id" element={<EditStory/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      
      
      </Routes>
     
     


      <Toaster />
    </>
  );
}

export default App;
