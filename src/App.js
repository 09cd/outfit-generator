import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import GarderobePage from "./pages/GarderobePage";

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

    const handleDeleteImage = (category, index) => {
        setCategories((prevCategories) => ({
            ...prevCategories,
            [category]: prevCategories[category].filter((_, i) => i !== index),
        }));
    };

    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route
                    path="/garderobe"
                    element={
                        <GarderobePage
                            categories={categories}
                            onSaveImages={handleSaveImages}
                            handleDeleteImage={handleDeleteImage}
                        />
                    }
                />
                <Route
                    path="/"
                    element={<HomePage categories={categories} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
