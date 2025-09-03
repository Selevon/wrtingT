import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import WritingPractice from "@/pages/WritingPractice";
import LiteraryResources from "@/pages/LiteraryResources";
import MyWorks from "@/pages/MyWorks";
import WorkDetail from "@/pages/WorkDetail";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<WritingPractice />} />
        <Route path="/resources" element={<LiteraryResources />} />
        <Route path="/my-works" element={<MyWorks />} />
        <Route path="/works/:id" element={<WorkDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
       </Routes>
    </AuthContext.Provider>
  );
}
