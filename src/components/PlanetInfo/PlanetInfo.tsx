import PlanetDetails from "@/components/PlanetInfo/components/PlanetDetails";
import PlanetImage from "@/components/PlanetInfo/components/PlanetImage";
import PlanetMenu from "@/components/PlanetInfo/components/PlanetMenu";
import PlanetStats from "@/components/PlanetInfo/components/PlanetStats";
import type { Planet } from "@/types/planet";
import { useState } from "react";
import "./PlanetInfo.scss";

type PlanetInfoProps = {
    planet: Planet;
}

export default function PlanetInfo({planet}: PlanetInfoProps) {
    const [imageState, setImageState] = useState<string>("");

    const handleImageState = (state: string) => {
        setImageState(state);
    };

    return (
        <>
            <PlanetMenu.Mobile>
                <PlanetMenu
                    onImageState={handleImageState}
                    menuItems={["Overview", "Structure", "Surface"]}
                    activeColor={planet.color}
                />
            </PlanetMenu.Mobile>

            <section className="planet-info__content">
                <PlanetImage planet={planet.planet} imageState={imageState}/>

                <PlanetDetails planet={planet}/>

                <PlanetMenu.Desktop>
                    <PlanetMenu
                        onImageState={handleImageState}
                        menuItems={["Overview", "Internal Structure", "Surface Geology"]}
                        activeColor={planet.color}
                    />
                </PlanetMenu.Desktop>
            </section>

            <PlanetStats planet={planet}/>
        </>
    );
}