import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc"


export const promptRouter = createTRPCRouter({

  infinitePrompts: publicProcedure
          .input(z.object({
            limit: z.number().min(1).max(100).nullish(),
            cursor: z.number().nullish(), // <-- "cursor" needs to exist, but can be any type
          }))
          .query(async ({ input, ctx }) => {
            const limit = input.limit ?? 10
            const { cursor } = input
            const items = await ctx.prisma.prompt.findMany({
              take: limit + 1, // get an extra item at the end which we'll use as next cursor
              where: { userId: input!.userId },
              cursor: cursor ? { myCursor: cursor } : undefined,
              orderBy: { createdAt: 'asc' },
            })
            let nextCursor: typeof cursor | undefined = undefined
            if (items.length > limit) {
              const nextItem = items.pop()
              nextCursor = nextItem!.myCursor
            }
            return {
              items,
              nextCursor,
            }
          }),

  getAll: publicProcedure
          .input(z.object({ userId: z.string() }))
          .query(async ({ input, ctx }) => {
              const prompts = await ctx.prisma.prompt.findMany({
                where: { userId: input!.userId },
                orderBy: { createdAt: 'desc' },
              })
              return prompts
          }),

  getOne: publicProcedure
          .input(z.object({ id: z.string() }))
          .query(async ({ input, ctx }) => {
              const prompt = await ctx.prisma.prompt.findUnique(
                { where: { id: input!.id } }
              )
              return prompt
          }),

  create: protectedProcedure
          .input(z.object({ text: z.string() }))
          .query(async ({ input, ctx }) => {
              const prompt = await ctx.prisma.prompt.create({
                data: { text: input.text }
              })
              return prompt
          }),

  update: protectedProcedure
          .input(z.object({ id: z.string(), text: z.string() }))
          .query(async ({ input, ctx }) => {
              const prompt = await ctx.prisma.prompt.update({
                where: { id: input!.id },
                data: { text: input.text }
              })
              return prompt
          }),
  
  delete: protectedProcedure
          .input(z.object({ id: z.string() }))
          .query(async ({ input, ctx }) => {
              const prompt = await ctx.prisma.prompt.delete({
                where: { id: input!.id } 
              })
              return prompt
          }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!"
  }),

})
