import Header from "@/components/Header/Header";
import PlanetInfo from "@/components/PlanetInfo";
import planetData from "@/data/data.json";
import type { Planet } from "@/types/planet";
import { useParams } from "react-router-dom";
import "./Planet.scss";


export default function Planet() {
    const {planet} = useParams<string>();

    const planetInfo: Planet|undefined = planetData.find(
        item => item.planet.toLowerCase() === planet
    );

    if (!planetInfo) {
        return null;
    }

    return (
        <div className="app-layout">
            <Header/>

            <main className="app-layout__content grid-bleed">
                <PlanetInfo planet={planetInfo} />
            </main>
        </div>
    );
}