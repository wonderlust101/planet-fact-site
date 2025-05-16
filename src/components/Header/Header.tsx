import DesktopNavigation from "@/components/Header/DesktopNavigation";
import MobileNavigation from "@/components/Header/MobileNavigation";
import planetData from "@/data/data.json";
import "./Header.scss";

export default function Header() {
    return (
        <header className="header">
            <p className="header__logo">The Planets</p>

            <MobileNavigation navLink={planetData}/>
            <DesktopNavigation navLink={planetData}/>
        </header>
    );
}