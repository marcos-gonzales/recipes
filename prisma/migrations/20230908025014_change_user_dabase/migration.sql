/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `password`,
    ADD COLUMN `image` VARCHAR(255) NULL,
    MODIFY `name` VARCHAR(191) NULL;
