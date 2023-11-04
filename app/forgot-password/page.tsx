import ActionButton from "@/components/Buttons/ActionButton"
import BackgoundImage from "@/components/BackgroundImage"
import HeroTitle from "@/components/HeroTitle"
import bgImage from "@/assets/backgrounds/forgot-password.png"
import Navigation from "@/components/Navigation/Navigation"

export default function ForgotPassword() {
  return (
    <>
      <BackgoundImage src={bgImage} />
      <Navigation action="close" />
      <div className="flex flex-col flex-grow  p-8 sm:p-4 gap-16">
        <div className="flex flex-col gap-8 pt-16">
          <HeroTitle title="Mot de passe oublié ?" />
          <p>Saisis ton adresse e-mail. Tu recevras un lien pour créer un nouveau mot de passe.</p>
        </div>
        <div className="flex flex-col gap-6">
          <input className="placeholder:text-white bg-white/[.1] rounded-full px-4 py-2.5" placeholder="Ton email" />
          <ActionButton>Envoyer</ActionButton>
        </div>
      </div>
    </>
  )
}
