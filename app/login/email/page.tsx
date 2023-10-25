
import HeroTitle from "@/components/HeroTitle"
import BackgoundImage from "@/components/BackgroundImage"
import bgImage from "@/assets/login-bg.png"
import ActionButton from "@/components/Buttons/ActionButton"
import Link from "next/link"
import Navigation from "@/app/components/Navigation/Navigation"


export default function LoginEmail() {
  return (
    <>
     <BackgoundImage src={bgImage}/>
      <div className="w-full flex flex-col flex-grow justify-around gap-16 pb-8 px-8 sm:pb-4 sm:px-4">
        <Navigation />
        <div className="flex flex-col gap-8">
          <HeroTitle title="Re !" align="start"/>
          <p>Bon retour parmi nous !</p>
        </div>
        <div className="flex flex-col gap-6">
          <input type="text" className="placeholder:text-white bg-white/[.1] rounded-full px-4 py-2.5" placeholder="Email" />
          <input type="password" className="placeholder:text-white bg-white/[.1] rounded-full px-4 py-2.5" placeholder="Mot de passe" />
          <ActionButton>connexion</ActionButton>
        </div>
        <Link href="/forgot-password" className="text-center cursor-pointer">Mot de passe oublié ?</Link>
      </div>
    </>
  )
}
