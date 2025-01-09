import "./CategoryOverview.scss";

export default function CategoryOverview({ category, description }) {
    return (
        <div className="garderobe-section">
            <h3>(all {description})</h3>
            <div className="images">
                {category.length > 0 ? (
                    category.map((image, index) => (
                        <img key={index} src={image} alt={`Top ${index}`} />
                    ))
                ) : (
                    <p>No {description} uploaded</p>
                )}
            </div>
        </div>
    );
}
