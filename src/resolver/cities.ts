import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

export const cities = (_parent, _args, _context, _info) => {
    return db.cities.findMany()
}

export const createCity = (_parent, args, _context, _info) => {
  const { city, state, growth_from_2000_to_2013, latitude, longitude } = args;

  return db.cities.create({
    data: {
      city,
      state,
      growth_from_2000_to_2013,
      latitude,
      longitude
    },
  })
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