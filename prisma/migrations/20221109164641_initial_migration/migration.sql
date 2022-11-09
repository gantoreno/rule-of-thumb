-- CreateEnum
CREATE TYPE "Category" AS ENUM ('ENTERTAINMENT', 'BUSINESS', 'POLITICS', 'ENVIRONMENT');

-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "picture" TEXT NOT NULL,
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "positiveVotes" INTEGER NOT NULL DEFAULT 0,
    "negativeVotes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);
