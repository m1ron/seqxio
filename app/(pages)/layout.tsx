import "../globals.css";

import { Metadata } from "next";

import Sidebar from "../components/layout/Sidebar";
import Navigation from "../components/layout/Navigation";

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
        <div className="w-full min-h-screen p-4 xl:py-3 flex gap-5">

            <div className="w-full flex flex-col gap-4 flex-1">
                <Navigation/>

                <article className="w-full bg-light-grey p-4 md:p-6 flex flex-col flex-1 rounded-3xl">
                    <div className="w-full flex-1">
                        {children}
                    </div>
                </article>
            </div>
        </div>
        </body>
        </html>
    );
}
