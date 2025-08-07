import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "../styles/mainlayout.css";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);

  // Detecta resize para abrir/cerrar según tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="layout-container d-flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div
        className={`main-content flex-grow-1 p-4 ${
          sidebarOpen ? "content-expanded" : "content-collapsed"
        }`}
      >
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
