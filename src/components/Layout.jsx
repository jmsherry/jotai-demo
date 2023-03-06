import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Container from "@mui/material/Container";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}

export default Layout;
