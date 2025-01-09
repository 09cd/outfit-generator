import ImageUploadSection from "./ImageUploadSection";
import RandomOutfit from "./RandomOutfit";

export default function HomePage({ categories, onSaveImages }) {
    return (
        <>
            <ImageUploadSection onSaveImages={onSaveImages} />
            <RandomOutfit categories={categories} />
        </>
    );
}
