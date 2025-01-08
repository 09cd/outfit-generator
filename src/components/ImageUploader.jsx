import "./ImageUploader.scss";

import { useState, useRef } from "react";

export default function ImageUploader({ onImageUpload, category }) {
    const [imagePreviews, setImagePreviews] = useState([]);
    const [imageData, setImageData] = useState([]);
    const fileInputRef = useRef(null);

    function handleImageChange(event) {
        const files = event.target.files;
        const previews = [];
        const data = [];

        Array.from(files).forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                previews.push(reader.result);
                data.push(reader.result);

                if (previews.length === files.length) {
                    setImagePreviews((prev) => [...prev, ...previews]);
                    setImageData((prev) => [...prev, ...data]);
                }
            };
            reader.readAsDataURL(file);
        });
    }

    function handleSaveImage() {
        if (imageData.length > 0) {
            onImageUpload(category, imageData);
            setImagePreviews([]);
            setImageData([]);
            fileInputRef.current.value = null;
        } else {
            alert("Kein Bild ausgewählt......");
        }
    }

    return (
        <div className="uploader">
            <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
            />
            <div>
                {imagePreviews &&
                    imagePreviews.map((preview, index) => (
                        <img
                            key={index}
                            src={preview}
                            alt={`Preview ${index}`}
                            className="uploader__image-preview"
                        />
                    ))}
            </div>
            <button onClick={handleSaveImage}>Bilder speichern</button>
        </div>
    );
}
