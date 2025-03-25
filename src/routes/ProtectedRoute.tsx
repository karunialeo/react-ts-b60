import Layout from "@/layouts/Layout";
import { useUserStore } from "@/stores/auth";
import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouteLayout() {
  const { user } = useUserStore();

  useEffect(() => {
    console.log(user);
  }, []);

  if (user.username) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default ProtectedRouteLayout;
