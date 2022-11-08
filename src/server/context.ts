import * as trpc from "@trpc/server"

import { prisma } from "./prisma"

export async function createContext() {
  return {
    prisma,
  }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
