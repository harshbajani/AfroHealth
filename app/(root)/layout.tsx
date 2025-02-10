"use client";
import dynamic from "next/dynamic";
import { ParallaxProvider } from "react-scroll-parallax";

// Dynamically import the smooth scroll hook with no SSR
const SmoothScrollProvider = dynamic(
  () =>
    import("@/components/SmoothScrollProvider").then(
      (mod) => mod.SmoothScrollProvider
    ),
  { ssr: false }
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        <ParallaxProvider>
          <SmoothScrollProvider>
            <div className="smooth-scroll-container">
              <main>{children}</main>
            </div>
          </SmoothScrollProvider>
        </ParallaxProvider>
      </body>
    </html>
  );
};

export default Layout;
