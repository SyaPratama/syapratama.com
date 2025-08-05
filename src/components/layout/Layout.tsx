import { PropsWithChildren } from "react";
import Sidebar from "./partials/Sidebar";

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <main id="root" className="relative z-50">
        <Sidebar/>
        {children}
      </main>
    </>
  );
}

export default Layout;
