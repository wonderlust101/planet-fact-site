import './PlanetImage.scss'

type PlanetImageProps = {
    planet: string;
    imageState: string;
}

export default function PlanetImage({planet, imageState}: PlanetImageProps) {
    return (
        <div className="planet-image">
            <img
                className={`planet-image--${planet.toLowerCase()}`}
                src={`./images/planet-${planet.toLowerCase()}${imageState === "internal" ? '-internal' : ''}.svg`}
                alt=""
            />
            {imageState === "geology" && (
                <img
                    className={`planet-image__geology-image`}
                    src={`./images/geology-${planet.toLowerCase()}.png`}
                    alt=""
                />
            )}
        </div>
    );
}