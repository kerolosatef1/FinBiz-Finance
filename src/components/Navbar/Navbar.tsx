import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useTheme } from "../Themes/Themes";
import "./Navbar.scss";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const { t, i18n } = useTranslation();

    const toggleMenu = useCallback(() => setMenuOpen((s) => !s), []);
    const cycleTheme = useCallback(() => setTheme(theme === "light" ? "dark" : "light"), [theme, setTheme]);

    const handleLangChange = useCallback(() => {
        const newLang = i18n.language === "ar" ? "en" : "ar";
        i18n.changeLanguage(newLang);
        localStorage.setItem("language", newLang);
    }, [i18n]);

    // Persist Language
    useEffect(() => {
        const savedLang = localStorage.getItem("language");
        if (savedLang && savedLang !== i18n.language) {
            i18n.changeLanguage(savedLang);
        }
    }, [i18n]);


    useEffect(() => {
        const html = document.documentElement;
        html.dir = i18n.language === "ar" ? "rtl" : "ltr";
        html.lang = i18n.language;
    }, [i18n.language]);

    return (
        <nav className={`navbar ${theme}`}>
            <div className="navbar-container">
                <Link to="/" className="left">
                    <div className="logoWrapper">
                        <div className="logoContainer--small">
                            <Logo />
                        </div>
                    </div>
                    <span className="logoText">FinBiz</span>
                </Link>

                <ul className={`links ${menuOpen ? "open" : ""}`}>
                    <li><Link to="/product">{t("Product")}</Link></li>
                    <li><Link to="/pages">{t("Pages")}</Link></li>
                    <li><Link to="/integration">{t("Integration")}</Link></li>
                    <li><Link to="/blog">{t("Blog")}</Link></li>
                    <li><Link to="/pricing">{t("Pricing")}</Link></li>
                </ul>

                <div className="right">
                    <Link to="/get-start" className="getStart">
                        {t("Get Start")}
                    </Link>

                    <button onClick={handleLangChange} className="langBtn">
                        {i18n.language === "ar" ? "EN" : "AR"}
                    </button>

                    <button className="themeToggle" onClick={cycleTheme}>
                        {theme === "light" ? "🌞" : "🌙"}
                    </button>

                    <div className={`${menuOpen ? "active" : ""}`} onClick={toggleMenu}></div>
                </div>
            </div>
        </nav>
    );
}
