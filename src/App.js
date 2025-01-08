import { useState } from "react";

import ImageUploadSection from "./components/ImageUploadSection";
import Header from "./components/NavigationBar";
import CategoryOverviewSection from "./components/CategoryOverviewSection";

function App() {
    const [categories, setCategories] = useState({
        tops: [],
        bottoms: [],
        shoes: [],
    });

    const handleSaveImages = (pendingUploads) => {
        setCategories((prevCategories) => ({
            tops: [...prevCategories.tops, ...pendingUploads.tops],
            bottoms: [...prevCategories.bottoms, ...pendingUploads.bottoms],
            shoes: [...prevCategories.shoes, ...pendingUploads.shoes],
        }));
    };

    return (
        <>
            <Header />

            <ImageUploadSection onSaveImages={handleSaveImages} />

            {/* <CategoryOverview category={categories.tops} description="tops" />
            <CategoryOverview
                category={categories.bottoms}
                description="bottoms"
            />
            <CategoryOverview category={categories.shoes} description="shoes" /> */}

            <CategoryOverviewSection categories={categories} />
        </>
    );
}

export default App;
