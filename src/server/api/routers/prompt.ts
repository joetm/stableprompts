import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc"


export const promptRouter = createTRPCRouter({

  getAll: publicProcedure
          .input(z.object({ userId: z.string() }))
          .query(async ({ input, ctx }) => {
              const prompts = await ctx.prisma.prompt.findMany(
                { where: { userId: input.userId } }
              )
              return prompts
          }),

  getOne: publicProcedure
          .input(z.object({ id: z.string() }))
          .query(async ({ input, ctx }) => {
              const prompt = await ctx.prisma.prompt.findUnique(
                { where: { id: input.id } }
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
                where: { id: input.id },
                data: { text: input.text }
              })
              return prompt
          }),
  
  delete: protectedProcedure
          .input(z.object({ id: z.string() }))
          .query(async ({ input, ctx }) => {
              const prompt = await ctx.prisma.prompt.delete({
                where: { id: input.id } 
              })
              return prompt
          }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!"
  }),

})
