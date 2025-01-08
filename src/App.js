import { useState, useRef } from "react";

import ImageUploader from "./components/ImageUploader";
import Header from "./components/NavigationBar";
import CategoryOverview from "./components/CategoryOverview";

function App() {
    const [categories, setCategories] = useState({
        tops: [],
        bottoms: [],
        shoes: [],
    });

    const [pendingUploads, setPendingUploads] = useState({
        tops: [],
        bottoms: [],
        shoes: [],
    });

    const uploaderRefs = {
        tops: useRef(null),
        bottoms: useRef(null),
        shoes: useRef(null),
    };

    const handleImageUpload = (category, images) => {
        setPendingUploads((prevUploads) => ({
            ...prevUploads,
            [category]: [...prevUploads[category], ...images],
        }));
    };

    const handleSaveImages = () => {
        setCategories((prevCategories) => ({
            tops: [...prevCategories.tops, ...pendingUploads.tops],
            bottoms: [...prevCategories.bottoms, ...pendingUploads.bottoms],
            shoes: [...prevCategories.shoes, ...pendingUploads.shoes],
        }));

        setPendingUploads({
            tops: [],
            bottoms: [],
            shoes: [],
        });

        Object.values(uploaderRefs).forEach((ref) =>
            ref.current?.resetUploader()
        );
    };

    return (
        <>
            <Header />
            <div>
                <h2>Tops</h2>
                <ImageUploader
                    category="tops"
                    onImageUpload={(category, images) =>
                        handleImageUpload(category, images)
                    }
                    ref={uploaderRefs.tops}
                />

                <h2>Bottoms</h2>
                <ImageUploader
                    category="bottoms"
                    onImageUpload={(category, images) =>
                        handleImageUpload(category, images)
                    }
                    ref={uploaderRefs.bottoms}
                />

                <h2>Shoes</h2>
                <ImageUploader
                    category="shoes"
                    onImageUpload={(category, images) =>
                        handleImageUpload(category, images)
                    }
                    ref={uploaderRefs.shoes}
                />
            </div>

            <button onClick={handleSaveImages}>Alle Bilder speichern</button>

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
