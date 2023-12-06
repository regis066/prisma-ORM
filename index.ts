import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){

    // PRISMA QUERIES

    // CREATE USER
    // const user = await prisma.user.create({
    //     data:{
    //         name : "Mugisha Regis",
    //         email : "mugisharegis72@gmail.com"

    //     }
    // })

    // GET USERS
    // const users = await prisma.user.findMany();
    // console.log(users);
    
    // CREATE an aticle and associate it with the user
    const article = await prisma.article.create({
        data: {
            title: "Outsiders",
            body: "Most rated novel in the world",
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })

    console.log(article);
    
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