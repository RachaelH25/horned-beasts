import "./Main.css";
import HornedBeast from "../HornedBeast/HornedBeast";
// import data from "../../data.json";

export default function Main({ handleModal, beastData }) {
    const beast = beastData.map((item) => {
        return (
            <HornedBeast
                key={item._id}
                id={item.id}
                title={item.title}
                imgURL={item.image_url}
                description={item.description}
                handleModal={handleModal}
                horns={item.horns}
            />
        );
    });

    return (
        <div>
            <main>{beast}</main>
        </div>
    );
}
