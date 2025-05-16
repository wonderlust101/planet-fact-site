import ChevronIcon from "@/assets/images/icon-chevron.svg?react";
import HamburgerIcon from "@/assets/images/icon-hamburger.svg?react";
import type { Planet } from "@/types/planet";
import "./MobileNavigation.scss";
import { type CSSProperties, useState } from "react";
import { Link } from "react-router-dom";

type MobileNavigationProps = {
    navLink: Planet[];
}

export default function MobileNavigation({navLink}: MobileNavigationProps) {
    const [openNav, setOpenNav] = useState(false);

    return (
        <nav className="mobile-navigation">
            <button
                style={{opacity: openNav ? "0.25" : "1"}}
                className="mobile-navigation__hamburger"
                onClick={() => setOpenNav(!openNav)}
            >
                <HamburgerIcon/>
            </button>

            <ul style={{display: openNav ? "grid" : "none"}} className="mobile-navigation__nav-links">
                {navLink.map((planet) => (
                    <li key={planet.planet} className="mobile-navigation__nav-item">
                        <Link
                            to={`/${planet.planet.toLowerCase()}`}
                            onClick={() => setOpenNav(false)}
                            className="mobile-navigation__link-container"
                        >
                            <div className="mobile-navigation__link" style={{"--accent-color": planet.color} as CSSProperties}>
                                {planet.planet}
                            </div>
                            <ChevronIcon/>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}