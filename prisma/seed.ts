import { prisma } from "../src/server/db"
import { createId } from '@paralleldrive/cuid2'

async function main() {
  let id = "cl9ebqhxk00003b600tymydho"
  await prisma.example.upsert({
    where: {
      id,
    },
    create: {
      id,
    },
    update: {},
  })

  // User, Account, Session, and Prompt tables
  for (let i = 1; i <= 3; i++) {

    const userId = createId()
    const accountId = createId()
    const sessionId = createId()
    const verificationTokenId = createId()

    // User
    await prisma.user.upsert({
      where: {
        id: userId,
      },
      create: {
        id: userId,
        name: `User ${i}`,
        email: `user${i}-${createId()}@example.com`,
        image: `https://example.com/user${i}.jpg`,
      },
      update: {},
    })

    // Account
    await prisma.account.upsert({
      where: {
        id: accountId,
      },
      create: {
        id: accountId,
        userId,
        type: `Type ${i}`,
        provider: `Provider ${i} unique ${createId()}`,
        providerAccountId: `ProviderAccountId${i} unique ${createId()}`,
      },
      update: {},
    })

    // Session
    await prisma.session.upsert({
      where: {
        id: sessionId,
      },
      create: {
        id: sessionId,
        sessionToken: `sessionToken${i} unique ${createId()}`,
        userId,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week
      },
      update: {},
    })

    // Prompt
    for (let j = 1; j <= 23; j++) {
      const promptId = createId()
      await prisma.prompt.upsert({
        where: {
          id: promptId,
        },
        create: {
          id: promptId,
          prompt: `User ${i} Sample prompt ${j}`,
          userId,
        },
        update: {},
      })
    }

    // VerificationToken
    // await prisma.verificationToken.upsert({
    //   where: {
    //     identifier: `Identifier${i}`,
    //   },
    //   create: {
    //     identifier: `Identifier${i}`,
    //     token: `Token${i} unique ${createId()}`,
    //     expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
    //   },
    //   update: {
    //     expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
    //   },
    // })

  } // for

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })



