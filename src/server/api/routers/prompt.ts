import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc"


export const promptRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      }
    }),

  getAll: publicProcedure
          .input(z.object({ userId: z.string() }))
          .query(async ({ input, ctx }) => {
              const prompts = await ctx.prisma.prompt.findMany(
                { where: { userId: input.userId } }
              )
              return prompts
          }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!"
  }),
})
