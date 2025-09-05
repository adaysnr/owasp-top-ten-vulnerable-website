"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAuthRoute = ["/login", "/register"].includes(pathname);

  return (
    <>
      {!isAuthRoute && (
        <header className="mb-12 mx-28 mt-10">
          <Header />
        </header>
      )}
      <main
        className={
          isAuthRoute
            ? "min-h-screen flex items-center justify-center"
            : "mx-28 mt-10"
        }
      >
        {children}
      </main>
      {!isAuthRoute && (
        <footer className="mt-30 w-full">
          <Footer />
        </footer>
      )}
    </>
  );
}
