/*
  Warnings:

  - You are about to drop the column `hightlight` on the `projects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "hightlight",
ADD COLUMN     "highlight" BOOLEAN NOT NULL DEFAULT false;
