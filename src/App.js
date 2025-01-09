import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ImageUploadSection from "./components/ImageUploadSection";
import NavigationBar from "./components/NavigationBar";
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
        <Router>
            <NavigationBar />
            <Routes>
                <Route
                    path="/garderobe"
                    element={
                        <CategoryOverviewSection categories={categories} />
                    }
                />
                <Route
                    path="/"
                    element={
                        <ImageUploadSection onSaveImages={handleSaveImages} />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
