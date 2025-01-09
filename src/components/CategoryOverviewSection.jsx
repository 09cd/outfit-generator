import CategoryOverview from "./CategoryOverview.jsx";

export default function CategoryOverviewSection({
    categories,
    onDeleteImage,
    deleteMode,
}) {
    return (
        <div>
            <CategoryOverview
                category={categories.tops}
                description="tops"
                onDeleteImage={onDeleteImage}
                deleteMode={deleteMode}
            />
            <CategoryOverview
                category={categories.bottoms}
                description="bottoms"
                onDeleteImage={onDeleteImage}
                deleteMode={deleteMode}
            />
            <CategoryOverview
                category={categories.shoes}
                description="shoes"
                onDeleteImage={onDeleteImage}
                deleteMode={deleteMode}
            />
        </div>
    );
}
