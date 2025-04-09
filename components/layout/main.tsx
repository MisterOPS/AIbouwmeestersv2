"use client";

import { useContext, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeProvider } from "next-themes";
import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname } from "next/navigation";
import { SidebarProvider } from "../ui/sidebar";
import { CustomSidebarTrigger } from "../custom-sidebar-trigger";
import DownloadButton from "../download-button";

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export default function MainContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode={"wait"} initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.27, 0.94, 0.48, 1.0] }}
        >
          <FrozenRouter>
            <SidebarProvider>
              <DownloadButton />
              <CustomSidebarTrigger />
              <ThemeProvider attribute="class" disableTransitionOnChange>
                <div className="flex grow lg:p-4 lg:ps-0">
                  <div>
                    <Navigation />
                  </div>
                  <div className="grow">
                    <main className="bg-background lg:rounded-2xl border min-h-[90vh]">
                      <div className="container py-6 lg:py-16 mb-6 max-w-screen-md space-y-14 lg:space-y-20">
                        {children}
                      </div>
                    </main>
                    <Footer />
                  </div>
                </div>
              </ThemeProvider>
            </SidebarProvider>
          </FrozenRouter>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
