import "./CategoryOverview.scss";

export default function CategoryOverview({
    category,
    description,
    onDeleteImage,
    deleteMode,
}) {
    const handleDeleteImage = (index) => {
        if (deleteMode) {
            onDeleteImage(description, index);
        }
    };

    return (
        <div className="wardrobe-section">
            <h3>(all {description})</h3>
            <div className="images">
                {category.length > 0 ? (
                    category.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${description} ${index}`}
                            onClick={() => handleDeleteImage(index)}
                        />
                    ))
                ) : (
                    <p>no {description} uploaded</p>
                )}
            </div>
        </div>
    );
}
