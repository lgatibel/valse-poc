import prisma from "@/lib/prisma"
import { z } from "zod"

const profilSchema = z.object({
    id: z.number(),
    photo: z.array(z.object({
        path: z.string()
    })).optional(),
    name: z.string(),
    age: z.number(),
    match_percentage: z.number(),
    distance: z.string(),
    description: z.string()
})

const profilsSchema = z.array(profilSchema)

export type Profil = z.infer<typeof profilSchema>

export type Profils = z.infer<typeof profilsSchema>



const getProfils = async (): Promise<Profils | null> => {
    const data = await prisma.user.findMany()

    console.log("USERS => ", data)

    try {
        const parsedData = profilsSchema.parse(data)
        return parsedData;
    }
    catch (e) {
        return null
    }
}



const getProfil = async (id: number): Promise<Profil | null> => {
    try {
        const data = await prisma.user.findFirst({ where: { id } })
   const parsedData = profilSchema.parse(data)
        return parsedData;
    }
    catch (e) {
        return null
    }
}

export { getProfil, getProfils };