import { useState } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import SelectedBeast from "./Components/SelectedBeast/SelectedBeast";

function App() {
    const [showModal, setShowModal] = useState(false);
    const [modalImg, setBeastModal] = useState({});

    function handleModal(beast) {
        setShowModal(!showModal);
        setBeastModal(beast);
    }

    return (
        <div className="App">
            <Header />
            <Main handleModal={handleModal} />
            {showModal && <SelectedBeast modalImg={modalImg} handleModal={handleModal} />}
            <Footer />
        </div>
    );
}

export default App;
