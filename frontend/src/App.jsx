import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import Dashboard from "./pages/Dashboard";

import HomeNote  from "./pages/Notes/HomeNote";
import CreateNotes  from "./pages/Notes/CreateNotes";
import ShowNotes  from "./pages/Notes/ShowNotes";
import EditNotes  from "./pages/Notes/EditNotes";
import DeleteNotes  from "./pages/Notes/DeleteNotes";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notes" element={<HomeNote />} />
          <Route path="/notes/create" element={<CreateNotes />} />
          <Route path="/notes/show/:id" element={<ShowNotes />} />
          <Route path="/notes/edit/:id" element={<EditNotes />} />
          <Route path="/notes/delete/:id" element={<DeleteNotes />} />

        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
