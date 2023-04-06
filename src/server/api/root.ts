import { createTRPCRouter } from "~/server/api/trpc"
import { exampleRouter } from "~/server/api/routers/example"
import { promptRouter } from "~/server/api/routers/prompt"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  prompt: promptRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
