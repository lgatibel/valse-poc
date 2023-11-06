import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const users = []
    users.push(await prisma.user.upsert({
        where: {id: 1},
        update: {},
        create: {
            id: 1,
            name: "Jean-michel",
            age: 27,
            match_percentage: 92,
            distance: "5km",
            description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duis portitor tincidun nullable"
        }
    }))

    users.push(await prisma.user.upsert({
        where: { id: 2 },
        update: {},
        create: {
            id: 2,
            name: "jean-michel",
            age: 22,
            match_percentage: 85,
            distance: "10km",
            description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duis portitor tincidun nullable"
        }
    }))

    users.push(await prisma.user.upsert({
        where: { id: 3 },
        update: {},
        create: {
            id: 3,
            name: "jean-michel",
            match_percentage: 78,
            age: 35,
            distance: "1km",
            description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duis portitor tincidun nullable"
        }
    }))

    console.log({ ...users })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })