import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

export const prisma = new PrismaClient()

async function seed() {
  await prisma.user.deleteMany()

  const superAdminPassword = await hash('123123', 1)

  await prisma.user.create({
    data: {
      username: 'admin',
      firstName: 'Super',
      lastName: 'Admin',
      email: 'rgranvilla@gmail.com',
      avatarUrl: 'https://github.com/devtrailsbr.png',
      password: superAdminPassword,
      isSuperAdmin: true,
    },
  })

  const password = await hash('123456', 1)

  await prisma.user.create({
    data: {
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@acme.com',
      avatarUrl: 'https://github.com/rgranvilla.png',
      password,
    },
  })

  const nameUser1 = faker.person.fullName()

  await prisma.user.create({
    data: {
      username:
        nameUser1.toLowerCase().split(' ')[0] +
        nameUser1.toLowerCase().split(' ')[1],
      firstName: nameUser1.split(' ')[0],
      lastName: nameUser1.split(' ')[1],
      email: `${nameUser1.toLowerCase().split('')[0]}@acme.com`,
      avatarUrl: faker.image.avatarGitHub(),
      password,
    },
  })

  const nameUser2 = faker.person.fullName()

  await prisma.user.create({
    data: {
      username:
        nameUser2.toLowerCase().split(' ')[0] +
        nameUser2.toLowerCase().split(' ')[1],
      firstName: nameUser2.split(' ')[0],
      lastName: nameUser2.split(' ')[1],
      email: `${nameUser2.toLowerCase().split('')[0]}@acme.com`,
      avatarUrl: faker.image.avatarGitHub(),
      password,
    },
  })
}

seed().then(() => {
  console.log('Seeding complete')
  prisma.$disconnect()
})
