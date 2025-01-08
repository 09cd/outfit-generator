import { useState, useRef } from "react";

export default function ImageUploader({ onImageUpload, category }) {
    const [imagePreview, setImagePreview] = useState(null);
    const [imageData, setImageData] = useState(null);
    const fileInputRef = useRef(null);

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
                setImageData(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    function handleSaveImage() {
        if (imageData) {
            onImageUpload(category, imageData);
            setImagePreview(null);
            setImageData(null);
            fileInputRef.current.value = null;
        } else {
            alert("Kein Bild ausgewählt!");
        }
    }

    return (
        <div className="uploader">
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
            />
            {imagePreview && (
                <img
                    src={imagePreview}
                    alt="Image Preview"
                    style={{ width: "150px", marginTop: "10px" }}
                    className="uploader__image-preview"
                />
            )}
            <button onClick={handleSaveImage}>Bild speichern</button>
        </div>
    );
}
