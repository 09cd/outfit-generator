import { useState } from "react";

import ImageUploader from "./components/ImageUploader";
import Header from "./components/NavigationBar";
import CategoryOverview from "./components/CategoryOverview";

function App() {
    const [categories, setCategories] = useState({
        tops: [],
        bottoms: [],
        shoes: [],
    });

    const handleImageUpload = (category, images) => {
        setCategories((prevCategories) => ({
            ...prevCategories,
            [category]: [...prevCategories[category], ...images],
        }));
    };

    return (
        <>
            <Header />
            <div>
                <h2>Tops</h2>
                <ImageUploader
                    category="tops"
                    onImageUpload={handleImageUpload}
                />

                <h2>Buttoms</h2>
                <ImageUploader
                    category="bottoms"
                    onImageUpload={handleImageUpload}
                />
                <h2>Shoes</h2>
                <ImageUploader
                    category="shoes"
                    onImageUpload={handleImageUpload}
                />
            </div>
            <CategoryOverview category={categories.tops} description="tops" />
            <CategoryOverview
                category={categories.bottoms}
                description="bottoms"
            />
            <CategoryOverview category={categories.shoes} description="shoes" />
        </>
    );
}

export default App;
