import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";
import UserCard from "../components/UserCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f3f2f1] p-2">
      
      {/* Top Header (Teams style) */}
      <header className="w-full bg-white px-6 mb-5 py-3 flex justify-between items-center shadow-md">
        <h1 className="text-lg font-semibold">
          User Management System
        </h1>

        <Link
          to= "/add-user"
          className="bg-[#6264a7] hover:bg-[#5557a3] text-white px-4 py-2 rounded-md text-sm font-medium transition"
        >
          + Add User
        </Link>
      </header>

      <UserCard />
    </div>
  );
};

export default Home;