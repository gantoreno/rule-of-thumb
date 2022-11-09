/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Person` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Person" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "index" SERIAL NOT NULL,
ADD COLUMN     "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
