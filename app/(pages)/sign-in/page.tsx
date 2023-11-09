
import HeroTitle from "@/components/HeroTitle"
import BackgoundImage from "@/components/BackgroundImage"
import bgImage from "@/assets/backgrounds/landing.png"
import Button from "@/app/components/Buttons/Button"
import { SignInButton, SignUpButton, currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"


export default async function  Login() {
  const user = await currentUser();

  if (user) {
    redirect("/")
  }

  return (
    <>
      <BackgoundImage src={bgImage} />
      <div className="flex flex-col flex-grow gap-24 p-8 pb-0">
        <div className="flex flex-col flex-grow gap-6 items-center justify-end">
          <HeroTitle title="La musique au coeur de tes rencontres" />
          <p className="text-center">Découvre une nouvelle façon de faire des rencontre à travers la musique avec Valse.</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <SignInButton mode="modal">
              <Button label="Connexion"/>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button label="Inscription"/>
            </SignUpButton>
          </div>
        </div>
      </div>
    </>
  )
}
