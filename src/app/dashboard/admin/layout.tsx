"use client"


import Sidebar from "@/app/dashboard/components/Sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="dashboard" >
            <nav className="">
                <Sidebar />
            </nav>
            <div className="dashboard-content ">
                {children}
            </div>
        </section>
    )
}