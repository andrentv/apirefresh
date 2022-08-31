/*
  Warnings:

  - Made the column `barber_id` on table `photos` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `photos` DROP FOREIGN KEY `photos_barber_id_fkey`;

-- AlterTable
ALTER TABLE `photos` MODIFY `barber_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `photos` ADD CONSTRAINT `photos_barber_id_fkey` FOREIGN KEY (`barber_id`) REFERENCES `barbers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
