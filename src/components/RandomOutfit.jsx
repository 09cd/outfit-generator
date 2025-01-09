import { useState } from "react";

export default function RandomOutfit({ categories }) {
    const [randomOutfit, setRandomOutfit] = useState({
        top: null,
        bottom: null,
        shoe: null,
    });

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
        <div>
            <h2>Random Outfit</h2>
            <button onClick={generateRandomOutfit}>
                Generate Random Outfit
            </button>
            <div>
                {randomOutfit.top && (
                    <img
                        src={randomOutfit.top}
                        alt="Random Top"
                        style={{ width: "150px", margin: "10px" }}
                    />
                )}
                {randomOutfit.bottom && (
                    <img
                        src={randomOutfit.bottom}
                        alt="Random Bottom"
                        style={{ width: "150px", margin: "10px" }}
                    />
                )}
                {randomOutfit.shoe && (
                    <img
                        src={randomOutfit.shoe}
                        alt="Random Shoe"
                        style={{ width: "150px", margin: "10px" }}
                    />
                )}
            </div>
        </div>
    );
}
