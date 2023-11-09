import bgImage from "@/assets/backgrounds/signup.png"
import BackgoundImage from "@/components/BackgroundImage"
import HeroTitle from "@/components/HeroTitle"
import Navigation from "@/components/Navigation/Navigation"
import FormButton from "@/app/components/Buttons/FormButton"
import { z } from "zod"
import Input from "@/app/components/Inputs/Input"

const userSchema = z.object({
  emailAddress: z.string(),
  first_name: z.string(),
  password: z.string(),
  birthday: z.string()
})

export default function SignUp() {
  const pendingVerification = false;

  const handleSignUp = () => {
    console.log("not implemented")
  }


  const hanldeVerify = () => {
    console.log("not implemented")
  }


  const setForm = (e: any) => {
    console.log("not implemented")
  }
  return (
    <>
      <BackgoundImage src={bgImage} />
      <Navigation />
      <div className="pt-24 h-full">
        {!pendingVerification ?
          (<form action={handleSignUp} className="flex flex-col h-full justify-between w-full p-8 pb-0">
            <div className="w-full">
              <HeroTitle align={'start'} title="Créer un compte" />
            </div>
            <div className="flex flex-col gap-6">
              <Input onChange={(e) => setForm(e)} name="first_name" placeholder="Prénom" />
              <Input onChange={(e) => setForm(e)} name="emailAddress" placeholder="Email" />
              <Input onChange={(e) => setForm(e)} type="date" name="birthday" placeholder="Date de naissance" />
              <Input onChange={(e) => setForm(e)} type="password" name="password" placeholder="Mot de passe" />
            </div>
            <div className="flex flex-col gap-8">
              <FormButton label="s'inscrire" />
              <p className="text-center opacity-50">En cliquant sur le bouton s'inscrire, vous accepetez sans reserve les termes et conditions générales d'utilisation</p>
            </div>
          </form>) :
          (
            <form action={hanldeVerify} className="flex flex-col gap-24 pt-24 p-16">
              <div className="w-full">
                <HeroTitle align="center" title="Entrer le code de verification" />
              </div>
              <div className="w-full flex flex-col gap-8">
                <Input
                  onChange={(e) => setForm(e)}
                  name="code"
                  placeholder="Code..."
                />
                <FormButton label="Verify Email" />
              </div>
            </form>
          )
        }
      </div>
    </>
  )
}
