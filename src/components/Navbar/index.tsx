import styles from "./_navbar.module.scss";
import { Link } from "@solidjs/router";
import { Component, createSignal } from "solid-js";

export const Navbar: Component = () => {
  const [menuOpen, setMenuOpen] = createSignal(false);

  return (
    <>
      <nav class="sticky top-0 w-full h-14 bg-red-500 z-10">
        <button
          class="md:hidden h-full my-auto p-4"
          onClick={() => setMenuOpen(true)}
        >
          <i class="fa fa-bars"></i>
        </button>
        <ul class="hidden md:flex list-none w-full h-full gap-x-6 items-center px-6">
          <Link href={"/"}>
            <li class="flex items-center gap-x-2">
              <i class="fa fa-home"></i> Home
            </li>
          </Link>
          <Link href={"/"}>
            <li class="flex items-center gap-x-2">
              <i class="fa fa-search"></i> Search
            </li>
          </Link>
        </ul>
      </nav>
      <div
        class="md:hidden fixed inset-0 z-20 opacity-0"
        classList={{
          [styles.menuBackdrop]: true,
          hidden: !menuOpen(),
        }}
        onClick={() => setMenuOpen(false)}
      />
      <menu
        aria-expanded={menuOpen()}
        class="transition-[left] md:hidden fixed top-0 bottom-0 w-3/5 sm:w-1/2 bg-black z-30"
        classList={{ "left-0": menuOpen(), "-left-full": !menuOpen() }}
      >
        <ul class="list-none grid grid-flow-row gap-y-2 px-2 py-4">
          <li class="text-white">
            <button class="w-full px-4 py-2 bg-amber-500">Link 1</button>
          </li>
          <li class="text-white">
            <button class="w-full px-4 py-2 bg-amber-500">Link 1</button>
          </li>
        </ul>
      </menu>
    </>
  );
};
