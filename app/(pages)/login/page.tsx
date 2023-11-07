
import HeroTitle from "@/components/HeroTitle"
import BackgoundImage from "@/components/BackgroundImage"
import bgImage from "@/assets/backgrounds/login.png"
import ActionButton from "@/components/Buttons/ActionButton"
import Link from "next/link"
import Navigation from "@/app/components/Navigation/Navigation"


export default function LoginEmail() {
  return (
    <>
      <BackgoundImage src={bgImage} />
      <Navigation />
      <div className="w-full flex flex-col flex-grow justify-between gap-16 px-8">
        <div className="flex flex-col gap-4 pt-24">
          <HeroTitle title="Re !" align="start" />
          <p>Bon retour parmi nous !</p>
        </div>
        <div className="flex flex-col gap-6">
          <input type="text" className="placeholder:text-white bg-white/[.1] rounded-full px-4 py-2.5" placeholder="Email" />
          <input type="password" className="placeholder:text-white bg-white/[.1] rounded-full px-4 py-2.5" placeholder="Mot de passe" />
          <ActionButton>connexion</ActionButton>
        </div>
        <div className="flex flex-col gap-6">
         
          <Link href="/forgot-password" className="text-center cursor-pointer">Mot de passe oublié ?</Link>
        </div>
      </div>
    </>
  )
}
