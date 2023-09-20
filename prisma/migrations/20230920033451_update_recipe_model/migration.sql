/*
  Warnings:

  - You are about to drop the column `estimatedTime` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `instructions` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Recipe` table. All the data in the column will be lost.
  - Added the required column `data` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Recipe` DROP COLUMN `estimatedTime`,
    DROP COLUMN `instructions`,
    DROP COLUMN `name`,
    ADD COLUMN `cusine` VARCHAR(191) NULL,
    ADD COLUMN `data` TEXT NOT NULL;
