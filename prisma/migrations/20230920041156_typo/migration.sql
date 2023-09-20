/*
  Warnings:

  - You are about to drop the column `cusine` on the `Recipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Recipe` DROP COLUMN `cusine`,
    ADD COLUMN `cuisine` VARCHAR(191) NULL;
