import React from "react";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

interface AppLayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: AppLayoutProps) {
  return (
    <div className="flex w-screen bg-gray-800">
      {/* sidebar kiri */}
      <LeftBar />

      {/* komponen utama */}
      <section className="flex-1">{children}</section>

      {/* sidebar kanan */}
      <RightBar />
    </div>
  );
}

export default Layout;
