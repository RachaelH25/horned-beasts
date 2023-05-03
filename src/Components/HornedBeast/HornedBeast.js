import { useState } from "react";
import "./HornedBeast.css";

export default function HornedBeast({ title, imgURL, description }) {
    const [votes, setVotes] = useState(0);
    function handleIncClick() {
        setVotes(votes + 1);
    }
    function handleDecClick() {
        setVotes(votes - 1);
        if (votes === 0) {
            setVotes(0);
        } else {
            setVotes(votes - 1);
        }
    }

    return (
        <div className="beast-item">
            <h2>{title}</h2>
            <img className="beast-img" src={imgURL} alt={description} />
            <p>{description}</p>
            <p>
                <span onClick={handleIncClick}>+💚</span>
                {votes}
                <span onClick={handleDecClick}>🖤-</span>
            </p>
        </div>
    );
}

// function HornedBeast(props) {
//     return (
//         <>
//             <h2>{props.title}</h2>
//             <img className="beast-img" src={props.imgURL} alt={props.title} />
//             <p>{props.description}</p>
//         </>
//     );
// }
