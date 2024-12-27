/*
  Warnings:

  - You are about to drop the column `role` on the `memberships` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "memberships" DROP COLUMN "role";

-- DropEnum
DROP TYPE "Role";
