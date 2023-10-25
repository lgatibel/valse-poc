import ActionButton from "@/components/Buttons/ActionButton"
import BackgoundImage from "@/components/BackgroundImage"
import HeroTitle from "@/components/HeroTitle"
import bgImage from "@/assets/forgot-password-bg.png"
import Navigation from "@/components/Navigation/Navigation"
import MobileContainer from "@/components/MobileContainer"

export default function ForgotPassword() {
  return (
    <MobileContainer>
      <BackgoundImage src={bgImage} />
      <Navigation/>

      <div className="flex flex-col flex-grow justify-center gap-16 pt-60">
        <div className="flex flex-col gap-8">
          <HeroTitle title="Mot de passe oublié ?" />
          <p>Saisis ton adresse e-mail. Tu recevras un lien pour créer un nouveau mot de passe.</p>
        </div>
        <div className="flex flex-col gap-6">
          <input className="placeholder:text-white bg-white/[.1] rounded-full px-4 py-2.5" placeholder="Ton email" />
          <ActionButton>Envoyer</ActionButton>
        </div>
      </div>
    </MobileContainer>
  )
}
