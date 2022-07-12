import { PrismaClient } from '@prisma/client'
const db = new PrismaClient();

/**
 * 
 *          [Cities Table]
 * 
 */
export const cities = (_parent, _args, _context, _info) => {
    return db.cities.findMany()
}

export const city = (_parent, args, _context, _info) => {
  const { rank } = args;

  return db.cities.findUnique({
    where: { rank },
  })
}

export const createCity = (_parent, args, _context, _info) => {
  const { input } = args;

  return db.cities.create({
    data: { ...input },
  })
}

export const updateCity = (_parent, args, _context, _info) => {
  const { rank, input } = args;

  return db.cities.update({
    data: { ...input },
    where: { rank }
  })
}

export const deleteCity = (_parent, args, _context, _info) => {
  const { rank } = args;

  return db.cities.delete({
    where: { rank }
  })
}
/**
 * 
 *          [Cities Table]
 * 
 */

/**
 * 
 *          [City Info Table]
 * 
 */

 export const cityInfos = (_parent, _args, _context, _info) => {
  return db.cityInfos.findMany()
}

export const createCityInfo = (_parent, args, _context, _info) => {
  const { population, remarks } = args;

  return db.cityInfos.create({
    data: {
      population,
      remarks
    },
  })
}

/**
 * 
 *          [City Info Table]
 * 
 */


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