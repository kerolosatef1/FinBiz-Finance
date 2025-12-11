import { Outlet } from "react-router-dom";
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Layout() {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return <>
        <Navbar />
        <Outlet></Outlet>
        <Footer />
    </>
}
