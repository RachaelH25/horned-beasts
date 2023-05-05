import "../Header/Header.css";

export default function Header({ handleFilter }) {
    return (
        <div className="header">
            <h1>Horned Beasts</h1>
            <form>
                <span className="header-span">Filter by number of horns: </span>
                <select id="hornFilter" placeholder="Number of Horns" onChange={handleFilter}>
                    <option value="">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="100">100</option>
                </select>
            </form>
        </div>
    );
}
