
import HeroTitle from "@/components/HeroTitle"
import BackgoundImage from "@/components/BackgroundImage"
import bgImage from "@/assets/landing-bg.png"
import LinkButton from "@/components/Buttons/LinkButton"
import MobileContainer from "@/components/MobileContainer"


export default function Login() {
  return (
    <MobileContainer>
      <BackgoundImage src={bgImage} />
      <div className="flex flex-col flex-grow gap-24">
        <div className="flex flex-col flex-grow gap-6 items-center justify-end">
          <HeroTitle title="La musique au coeur de tes rencontres" />
          <p className="text-center">Découvre une nouvelle façon de faire des rencontre à travers la musique avec Valse.</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <LinkButton to="/login/email">Connexion</LinkButton>
            <LinkButton to="/sign-up">Inscription</LinkButton>
          </div>
          <div className="flex flex-col gap-2">
            <p className="sm:text-sm text-center opacity-60">Ou connecte toi avec</p>
            <LinkButton to="#">F</LinkButton>
          </div>
        </div>
      </div>
    </MobileContainer>
  )
}
