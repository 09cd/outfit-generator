import RandomOutfit from "../components/RandomOutfit";

import "./HomePage.scss";

export default function HomePage({ categories }) {
    return (
        <main className="home">
            <RandomOutfit categories={categories} />
        </main>
    );
}
