import { useState, useRef } from "react";

import ImageUploader from "./ImageUploader";
import "./ImageUploadSection.scss";

export default function ImageUploadSection({ onSaveImages }) {
    const [isAddingNew, setIsAddingNew] = useState(false);

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

    const handleAddNew = () => {
        setIsAddingNew(true);
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

        setIsAddingNew(false);
    };

    return (
        <div className="upload-section-wrapper">
            {isAddingNew ? (
                <div className="upload-section">
                    <div className="upload-section__categories">
                        <div className="image-upload">
                            <h2>(tops)</h2>
                            <ImageUploader
                                category="tops"
                                onImageUpload={(category, images) =>
                                    handleImageUpload(category, images)
                                }
                                ref={uploaderRefs.tops}
                            />
                        </div>

                        <div className="image-upload">
                            <h2>(bottoms)</h2>
                            <ImageUploader
                                category="bottoms"
                                onImageUpload={(category, images) =>
                                    handleImageUpload(category, images)
                                }
                                ref={uploaderRefs.bottoms}
                            />
                        </div>

                        <div className="image-upload">
                            <h2>(shoes)</h2>
                            <ImageUploader
                                category="shoes"
                                onImageUpload={(category, images) =>
                                    handleImageUpload(category, images)
                                }
                                ref={uploaderRefs.shoes}
                            />
                        </div>
                    </div>

                    <button onClick={handleSaveImages}>Save</button>
                </div>
            ) : (
                <button className="add-new" onClick={handleAddNew}>
                    + add new
                </button>
            )}
        </div>
    );
}
