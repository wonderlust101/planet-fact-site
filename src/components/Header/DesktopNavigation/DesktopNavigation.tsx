import type { Planet } from "@/types/planet";
import { Link } from "react-router-dom";
import "./DesktopNavigation.scss";

type DesktopNavigationProps = {
    navLink: Planet[];
}

export default function DesktopNavigation({navLink}: DesktopNavigationProps) {
    return (
        <nav className="desktop-navigation">
            <ul className="desktop-navigation__nav-links">
                {navLink.map((planet) => (
                    <li key={planet.planet}>
                        <Link className="desktop-navigation__link" to={`/${planet.planet.toLowerCase()}`}>
                            {planet.planet}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}