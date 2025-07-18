import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren){
    return (
        <>
        <main id="root" className="relative z-50">
            {children}
        </main>
        </>
    );
}

export default Layout;