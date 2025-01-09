import { useState } from "react";

import "./GarderobePage.scss";

import ImageUploadSection from "../components/ImageUploadSection";
import CategoryOverviewSection from "../components/CategoryOverviewSection";

export default function GarderobePage({
    categories,
    onSaveImages,
    handleDeleteImage,
}) {
    const [deleteMode, setDeleteMode] = useState(false);

    const toggleDeleteMode = () => {
        setDeleteMode((prevMode) => !prevMode);
    };

    return (
        <div>
            <ImageUploadSection onSaveImages={onSaveImages} />
            <button
                className="enter-delete-mode-btn"
                onClick={toggleDeleteMode}
            >
                {deleteMode ? "exit delete mode" : "- delete mode"}
            </button>
            <CategoryOverviewSection
                categories={categories}
                onDeleteImage={handleDeleteImage}
                deleteMode={deleteMode}
            />
        </div>
    );
}
