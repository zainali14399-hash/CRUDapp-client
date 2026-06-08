import UserForm from "../components/UserForm";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";


const AppRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/add-user" element={<UserForm /> } />
        </Routes>
  )
}

export default AppRoutes