import HeroTitle from "@/app/components/HeroTitle";
import Navigation from "@/app/components/Navigation/Navigation";
import PhotoGallery from "@/app/components/PhotosGallery";

export default function Photos() {
    return (
        <div className="flex flex-col bg-primary py-12 gap-12 h-12/12">
            <Navigation />
            <div className="flex flex-col gap-4">
                <HeroTitle title="Mes photos"/>
                <p>Des photos uniques, car ce sont les tiennes :)</p>
            </div>
            <PhotoGallery />
        </div>
    )
}
