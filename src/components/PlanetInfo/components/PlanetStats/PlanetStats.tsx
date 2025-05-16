import type { Planet } from "@/types/planet";
import './PlanetStats.scss'

type PlanetStatsProps = {
    planet: Planet,
}

type StatKey = "rotation_time"|"revolution_time"|"radius_km"|"average_temperature";

const stats: {title: string; key: StatKey}[] = [
    {title: "Rotation Time", key: "rotation_time"},
    {title: "Revolution Time", key: "revolution_time"},
    {title: "Radius", key: "radius_km"},
    {title: "Average Temp.", key: "average_temperature"}
];

export default function PlanetStats({planet}: PlanetStatsProps) {
    return (
        <div className="planet-stats">
            {stats.map(({title, key}) => (
                <section key={key} className="planet-stats__stat">
                    <h3 className="heading-xs">{title}</h3>
                    <p className="heading-md">{planet?.[key]}</p>
                </section>
            ))}
        </div>
    );
}