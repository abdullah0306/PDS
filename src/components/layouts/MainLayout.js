'use client';
import TopHeader from "../common/TopHeader.jsx";
import Navigation from "../common/Navigation.jsx";
import Footer from "../common/Footer.jsx";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function MainLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Make it accessible globally
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <TopHeader />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
