import "../globals.css";

import { Metadata } from "next";

import Sidebar from "../components/common/Sidebar";
import Navigation from "../components/common/Navigation";

export const metadata: Metadata = {
    title: "Dashboard | seqxio",
    description: "Powering Smarter, Cleaner Cities",
    openGraph: {
        title: "Dashboard | seqxio",
        description: "Powering Smarter, Cleaner Cities",
        images: "/dashboard-meta-img",
    },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body
        >
        <div className="w-full h-screen p-4 flex gap-5">
            <Sidebar/>
            <div className="w-full space-y-4 flex-1 lg:ps-70">
                <Navigation/>
                {children}
            </div>
        </div>
        </body>
        </html>
    );
}
