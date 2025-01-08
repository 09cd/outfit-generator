import CategoryOverview from "./CategoryOverview.jsx";

export default function CategoryOverviewSection({ categories }) {
    return (
        <div>
            <CategoryOverview category={categories.tops} description="tops" />
            <CategoryOverview
                category={categories.bottoms}
                description="bottoms"
            />
            <CategoryOverview category={categories.shoes} description="shoes" />
        </div>
    );
}
