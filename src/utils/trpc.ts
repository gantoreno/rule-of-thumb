import { createTRPCNext } from "@trpc/next"

import type { AppRouter } from "../server/routers/_app"

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      url: "/api/trpc",
    }
  },
})
