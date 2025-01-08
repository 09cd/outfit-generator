import { useState, useRef } from "react";

import ImageUploader from "./ImageUploader";

export default function ImageUploadSection({ onSaveImages }) {
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
        onSaveImages(pendingUploads);

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

            <button onClick={handleSaveImages}>Alle Bilder speichern</button>
        </div>
    );
}
