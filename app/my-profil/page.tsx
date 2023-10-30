import Navigation from "@/app/components/Navigation/Navigation";
import Link from "next/link";

export default function MyProfil() {
  return (
    <div className="flex flex-col bg-primary">
      <Navigation />
      <div className="flex flex-col gap-16">
        <h1>Mon profil</h1>
        <div className="flex flex-col">
          <div className="rounded-full w-64 h-64"></div>
          <Link href="/my-profil/photos" className="text-red-400">
            Modifier mes photos
          </Link>
        </div>
        <div>Ma bio musicale</div>
        <div>Ma description</div>
        <div>J'écoute ma musique sur </div>
      </div>
    </div>
  )
}
