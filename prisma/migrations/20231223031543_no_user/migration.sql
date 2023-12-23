/*
  Warnings:

  - You are about to drop the `ActivatToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ActivatToken` DROP FOREIGN KEY `ActivatToken_userId_fkey`;

-- DropTable
DROP TABLE `ActivatToken`;

-- DropTable
DROP TABLE `User`;
