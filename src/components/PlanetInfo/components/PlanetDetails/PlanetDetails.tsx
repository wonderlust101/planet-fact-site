import type { Planet } from "@/types/planet";
import SourceIcon from "@/assets/images/icon-source.svg?react";
import './PlanetDetails.scss'

type PlanetDetailsProps = {
    planet: Planet;
}

export default function PlanetDetails({planet}: PlanetDetailsProps) {
    return (
        <div className="planet-details">
            <div className="planet-details__main-content">
                <h1 className="heading-lg">
                    {planet.planet}
                </h1>

                <p className="text-md">
                    {planet.description}
                </p>
            </div>

            <p className="planet-details__wikipedia-link">
                Source :
                <a className="hyperlink" href={planet.source}>Wikipedia</a>
                <SourceIcon/>
            </p>
        </div>
    );
}