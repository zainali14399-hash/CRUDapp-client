import axios from "axios";

const API = axios.create({
    // baseURL: "http://localhost:8000/api/user",
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

class UserAPIs {
    registerUser(data) {
        return API.post("/register", data)
    }

    getAllUsers() {
        return API.get("/users");
    }
}

export default new UserAPIs();