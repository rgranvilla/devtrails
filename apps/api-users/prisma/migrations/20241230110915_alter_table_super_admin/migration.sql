/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `super_admins` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "super_admins" DROP CONSTRAINT "super_admins_user_id_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "super_admins_user_id_key" ON "super_admins"("user_id");

-- CreateIndex
CREATE INDEX "super_admins_user_id_idx" ON "super_admins"("user_id");

-- AddForeignKey
ALTER TABLE "super_admins" ADD CONSTRAINT "super_admins_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
