import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./RandomOutfit.scss";

export default function RandomOutfit({ categories }) {
    const [randomOutfit, setRandomOutfit] = useState({
        top: null,
        bottom: null,
        shoe: null,
    });

    const isWardrobeEmpty =
        categories.tops.length === 0 &&
        categories.bottoms.length === 0 &&
        categories.shoes.length === 0;

    const navigate = useNavigate();

    const generateRandomOutfit = () => {
        const getRandomItem = (array) => {
            if (array.length === 0) return null;
            return array[Math.floor(Math.random() * array.length)];
        };

        setRandomOutfit({
            top: getRandomItem(categories.tops),
            bottom: getRandomItem(categories.bottoms),
            shoe: getRandomItem(categories.shoes),
        });
    };

    return (
        <>
            {isWardrobeEmpty ? (
                <div className="generation-section-message">
                    add some clothes <br />
                    first{" "}
                    <span onClick={() => navigate("/garderobe")}>(here)</span>
                </div>
            ) : (
                <div className="generation-section">
                    <div className="generation-results">
                        <div className="result-wrapper">
                            {randomOutfit.top ? (
                                <img
                                    src={randomOutfit.top}
                                    alt="Random Top"
                                    className="generation-results__image"
                                />
                            ) : (
                                <div className="generation-results__placeholder"></div>
                            )}
                            <div>(top)</div>
                        </div>

                        <div className="result-wrapper">
                            {randomOutfit.bottom ? (
                                <img
                                    src={randomOutfit.bottom}
                                    alt="Random Bottom"
                                    className="generation-results__image"
                                />
                            ) : (
                                <div className="generation-results__placeholder"></div>
                            )}
                            <div>(bottom)</div>
                        </div>
                        <div className="result-wrapper">
                            {randomOutfit.shoe ? (
                                <img
                                    src={randomOutfit.shoe}
                                    alt="Random Shoe"
                                    className="generation-results__image"
                                />
                            ) : (
                                <div className="generation-results__placeholder"></div>
                            )}
                            <div>(shoes)</div>
                        </div>
                    </div>
                    <button onClick={generateRandomOutfit}>
                        ( Generate Random Outfit )
                    </button>
                </div>
            )}
        </>
    );
}
