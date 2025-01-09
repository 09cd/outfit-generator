import "./ImageUploader.scss";

import { useState, useRef, forwardRef, useImperativeHandle } from "react";

const ImageUploader = forwardRef(({ onImageUpload, category }, ref) => {
    const [imagePreviews, setImagePreviews] = useState([]);
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
                    onImageUpload(category, data);
                }
            };
            reader.readAsDataURL(file);
        });
    }

    useImperativeHandle(ref, () => ({
        resetUploader: () => {
            setImagePreviews([]);
            if (fileInputRef.current) {
                fileInputRef.current.value = null;
            }
        },
    }));

    return (
        <div className="uploader">
            <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
            />
            {imagePreviews.length > 0 && (
                <div className="uploader__image-preview">
                    {imagePreviews.map((preview, index) => (
                        <img
                            key={index}
                            src={preview}
                            alt={`Preview ${index}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
});

export default ImageUploader;
