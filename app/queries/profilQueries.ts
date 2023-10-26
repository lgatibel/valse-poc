import { z } from "zod"

const profilSchema = z.object({
    id: z.number(),
    photo: z.string(),
    name: z.string(),
    age: z.number(),
    match_percentage: z.number(),
    distance: z.string(),
    description: z.string()
})

const profilsSchema = z.array(profilSchema)

type Profil = z.infer<typeof profilSchema>

type Profils = z.infer<typeof profilsSchema>



const getProfils = async (): Promise<Profils | null> => {
    const data = await fetch("http://localhost:4000/profils")
        .then((res) => res.json())

    try {
        const parsedData = profilsSchema.parse(data)
        return parsedData;
    }
    catch (e) {
        return null
    }
}



const getProfil = async (id: number): Promise<Profil | null> => {
    const data = await fetch(`http://localhost:4000/profils/${id}`)
        .then((res) => res.json())

    try {
        const parsedData = profilSchema.parse(data)
        return parsedData;
    }
    catch (e) {
        return null
    }
}

export { getProfil, getProfils };