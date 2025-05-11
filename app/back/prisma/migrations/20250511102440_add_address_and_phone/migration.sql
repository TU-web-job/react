/*
  Warnings:

  - You are about to drop the `Login` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Login` DROP FOREIGN KEY `Login_login_id_fkey`;

-- AlterTable
ALTER TABLE `Users` ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone_number` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Login`;
