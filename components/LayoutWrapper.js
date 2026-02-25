'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from 'next/navigation';

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();
    const isSpecialPage = pathname.startsWith('/login') || pathname.startsWith('/admin');

    return (
        <>
            {!isSpecialPage && <Navbar />}
            {children}
            {!isSpecialPage && <Footer />}
        </>
    );
}
