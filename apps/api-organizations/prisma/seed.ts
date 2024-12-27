import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

export const prisma = new PrismaClient()

async function seed() {
  await prisma.organization.deleteMany()
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

  const user = await prisma.user.create({
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

  const anotherUser = await prisma.user.create({
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

  const anotherUser2 = await prisma.user.create({
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

  await prisma.organization.create({
    data: {
      name: 'Acme Inc',
      domain: 'acme.com',
      slug: 'acme-inc',
      logoUrl: faker.image.avatarGitHub(),
      ownerId: user.id,
      members: {
        createMany: {
          data: [
            {
              userId: user.id,
              role: 'ADMIN',
            },
            {
              userId: anotherUser.id,
              role: 'MEMBER',
            },
            {
              userId: anotherUser2.id,
              role: 'MEMBER',
            },
          ],
        },
      },
    },
  })

  await prisma.organization.create({
    data: {
      name: 'Acme Br',
      domain: 'acme.com.br',
      slug: 'acme-br',
      logoUrl: faker.image.avatarGitHub(),
      ownerId: user.id,
      members: {
        createMany: {
          data: [
            {
              userId: user.id,
              role: 'MEMBER',
            },
            {
              userId: anotherUser.id,
              role: 'ADMIN',
            },
            {
              userId: anotherUser2.id,
              role: 'MEMBER',
            },
          ],
        },
      },
    },
  })

  await prisma.organization.create({
    data: {
      name: 'Acme Billing',
      domain: 'billing.acme.com',
      slug: 'acme-billing',
      logoUrl: faker.image.avatarGitHub(),
      ownerId: user.id,
      members: {
        createMany: {
          data: [
            {
              userId: user.id,
              role: 'BILLING',
            },
            {
              userId: anotherUser.id,
              role: 'ADMIN',
            },
            {
              userId: anotherUser2.id,
              role: 'MEMBER',
            },
          ],
        },
      },
    },
  })
}

seed().then(() => {
  console.log('Seeding complete')
  prisma.$disconnect()
})
