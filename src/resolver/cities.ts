import { PrismaClient } from '@prisma/client'
const db = new PrismaClient();

/**
 * 
 *          [Cities Table]
 * 
 */
export const cities = async(_parent, _args, _context, _info) => {
    const cities =  await db.cities.findMany();
    const cityInfo =  await db.cityInfos.findMany();

    return cities.map((city, index) => {
      return {
        ...city, 
        location: {
          latitude: city.latitude,
          longitude: city.longitude
        },
        info: cityInfo[index]
      }
    });
}

export const city = async(_parent, args, _context, _info) => {
  const { rank } = args;

  const cityInfo = await db.cityInfos.findUnique({
    where:{
      id: rank
    }
  });

  const city = await db.cities.findUnique({
    where: { rank },
  });

  return {
    ...city,
    location: {
      latitude: city?.latitude,
      longitude: city?.longitude
    },
    info: cityInfo
  }
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