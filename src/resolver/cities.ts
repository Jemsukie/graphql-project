import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

export const cities = (_parent, _args, _context, _info) => {
    return db.cities.findMany()
}

/*
export const postLink = (_parent, args, _context, _info) => {
    const { url, description } = args;

    return db.link.create({
      data: {
        url,
        description
      },
    })
}
*/