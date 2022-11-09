import { TRPCError } from "@trpc/server"
import { z } from "zod"
import { publicProcedure, router } from "../trpc"

export const appRouter = router({
  people: publicProcedure.query(async ({ ctx }) => {
    const people = await ctx.prisma.person.findMany({
      orderBy: { index: "asc" },
    })

    return people
  }),
  vote: publicProcedure
    .input(
      z.object({ id: z.string(), category: z.enum(["positive", "negative"]) })
    )
    .mutation(async ({ input, ctx }) => {
      const person = await ctx.prisma.person.findFirst({
        where: { id: input.id },
      })

      if (!person) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Person not found",
        })
      }

      await ctx.prisma.person.update({
        where: { id: input.id },
        data: {
          positiveVotes:
            person.positiveVotes + (input.category === "positive" ? 1 : 0),
          negativeVotes:
            person.negativeVotes + (input.category === "negative" ? 1 : 0),
        },
      })

      return true
    }),
})

export type AppRouter = typeof appRouter
