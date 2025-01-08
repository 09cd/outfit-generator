export default function CategoryOverview({ category, description }) {
    return (
        <div>
            <h3>All {description}:</h3>
            {category.length > 0 ? (
                category.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Top ${index}`}
                        style={{ width: "150px", margin: "10px" }}
                    />
                ))
            ) : (
                <p>No {description} uploaded</p>
            )}
        </div>
    );
}
