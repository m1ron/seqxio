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
        <body>
        <div className="w-full h-screen p-4 xl:py-3 flex gap-5">

            <Sidebar/>

            <div className="w-full flex flex-col gap-4 flex-1 lg:ps-70">
                <Navigation/>

                <article className="w-full bg-light-grey p-4 md:p-6 rounded-2xl">
                    <div className="h-[calc(100vh-202px)] overflow-auto scrollbar-hide">
                        {children}
                    </div>
                </article>
            </div>
        </div>
        </body>
        </html>
    );
}
