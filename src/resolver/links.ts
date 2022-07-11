import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

export const feeds = (_parent, _args, _context, _info) => {
    return db.link.findMany()
}

export const hello = (_parent, _args, _context, _info) => {
    return 'Hello World!'
}

export const postLink = (_parent, args, _context, _info) => {
    const { url, description } = args;

    return db.link.create({
      data: {
        url,
        description
      },
    })
}