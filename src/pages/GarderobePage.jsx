import ImageUploadSection from "../components/ImageUploadSection";
import CategoryOverviewSection from "../components/CategoryOverviewSection";

export default function GarderobePage({ categories, onSaveImages }) {
    return (
        <div>
            <ImageUploadSection onSaveImages={onSaveImages} />
            <CategoryOverviewSection categories={categories} />
        </div>
    );
}
