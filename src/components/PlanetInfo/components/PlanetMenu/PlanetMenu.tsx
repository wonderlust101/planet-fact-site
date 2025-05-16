import "./PlanetMenu.scss";
import { type CSSProperties, useState } from "react";
import type { ReactElement } from "react";

type PlanetMenuProps = {
    onImageState: (state: string) => void;
    menuItems: string[];
    activeColor: string;
};

const imageStates: string[] = ["overview", "internal", "geology"];

export default function PlanetMenu({ onImageState, menuItems, activeColor }: PlanetMenuProps) {
    const [activeState, setActiveState] = useState("overview");

    const handleClick = (state: string) => {
        setActiveState(state);
        onImageState(state);
    };

    return (
        <>
            {imageStates.map((state, index) => (
                <div className='planet-menu__button-container' key={index}>
                    <button
                        className={`planet-menu__button ${activeState === state ? "planet-menu__button--active" : ""}`}
                        style={activeState === state ? { "--active-color": activeColor } as CSSProperties : {}}
                        data-index={`0${index + 1}`}
                        onClick={() => handleClick(state)}
                    >
                        {menuItems[index]}
                    </button>
                </div>
            ))}
        </>
    );
}

PlanetMenu.Mobile = function PlanetMenuMobile({ children }: { children: ReactElement }) {
    return <div className="planet-menu--mobile">{children}</div>;
};

PlanetMenu.Desktop = function PlanetMenuDesktop({ children }: { children: ReactElement }) {
    return <div className="planet-menu--desktop">{children}</div>;
};