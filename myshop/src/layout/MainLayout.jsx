import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../styles/mainlayout.css";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout-container">
      {/* Header siempre arriba */}
      <header className="p-3 bg-light border-bottom sticky-top z-3">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </header>

      {/* Contenedor con sidebar y contenido */}
      <div className="layout-body">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
