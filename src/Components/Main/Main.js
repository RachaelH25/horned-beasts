import React from "react";
import "./Main.css";

import HornedBeast from "..Components/HornedBeast";
import { data } from "../../data";

export default function Main() {
    return (
        <main>
            <HornedBeast title={data[0].title} imgURL={data[0].imgURL} description={data[0].description} />
            <HornedBeast title={data[1].title} imgURL={data[1].imgURL} description={data[1].description} />
            <HornedBeast title={data[2].title} imgURL={data[2].imgURL} description={data[2].description} />
        </main>
    );
}
