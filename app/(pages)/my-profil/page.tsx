import HeroTitle from "@/app/components/HeroTitle";
import Icon from "@/app/components/Icon";
import Navigation from "@/app/components/Navigation/Navigation";
import Link from "next/link";

export default function MyProfil() {
  return (
    <div className="flex flex-col w-full bg-primary py-16 gap-12">
      <Navigation />
      <div className="flex flex-col gap-12 px-8">
        <HeroTitle align="start" title="Mon profil"/>
        <div className="flex flex-col items-center gap-6">
          <div className="rounded-full w-64 h-64 bg-gray-600"></div>
          <Link href="/my-profil/photos" className="text-red-400">
            Modifier mes photos
          </Link>
        </div>
        <div className="flex justify-between">Ma bio musicale <Icon icon="FiChevronRight"/></div>
        <div className="flex justify-between">Ma description</div>
        <div className="flex justify-between">J'écoute ma musique sur <Icon icon="FiChevronRight" /></div>
      </div>
    </div>
  )
}
