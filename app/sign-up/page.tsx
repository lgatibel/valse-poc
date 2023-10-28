import bgImage from "@/assets/backgrounds/signup.png"
import BackgoundImage from "@/components/BackgroundImage"
import HeroTitle from "@/components/HeroTitle"
import Navigation from "@/components/Navigation/Navigation"
import ActionButton from "@/components/Buttons/ActionButton"

export default function SignUp() {
  return (
    <>
      <BackgoundImage src={bgImage} />
      <div className="flex flex-col flex-grow w-full gap-24 pt-16 pb-8 px-8 sm:pb-4 sm:px-4">
        <Navigation />
        <div className="w-full">
          <HeroTitle align={'start'} title="Créer un compte" />
        </div>
        <div className="flex flex-col gap-6">
          <input type="text" className="placeholder:text-white bg-white/[.1] rounded-full px-4 py-2.5" placeholder="Prénom" />
          <input type="text" className="placeholder:text-white bg-white/[.1] rounded-full px-4 py-2.5" placeholder="Email" />
          <input type="date" className="placeholder:text-white bg-white/[.1] rounded-full px-4 py-2.5" placeholder="Date de naissance" />
          <input type="password" className="placeholder:text-white bg-white/[.1] rounded-full px-4 py-2.5" placeholder="Mot de passe" />
        </div>
        <div className="flex flex-col gap-24">
          <ActionButton>s'inscrire</ActionButton>
          <p className="text-center opacity-50">En cliquant sur le bouton s'inscrire, vous accepetez sans reserve les termes et conditions générales d'utilisation</p>
        </div>
      </div>
    </>
  )
}
