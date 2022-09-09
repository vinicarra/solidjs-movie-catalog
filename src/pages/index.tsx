import { Navbar } from "@components/Navbar";
import { Outlet } from "@solidjs/router";
import { Component } from "solid-js";

export const RouteOutletWrapper: Component = () => {
  return (
    <main class="relative h-full max-w-full">
      <Navbar />
      <Outlet />
    </main>
  );
};
