/*
  Warnings:

  - Made the column `barber_id` on table `availables` required. This step will fail if there are existing NULL values in that column.
  - Made the column `barber_id` on table `photos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `barber_id` on table `servives` required. This step will fail if there are existing NULL values in that column.
  - Made the column `appointment_id` on table `servives` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `availables` DROP FOREIGN KEY `availables_barber_id_fkey`;

-- DropForeignKey
ALTER TABLE `photos` DROP FOREIGN KEY `photos_barber_id_fkey`;

-- DropForeignKey
ALTER TABLE `servives` DROP FOREIGN KEY `servives_appointment_id_fkey`;

-- DropForeignKey
ALTER TABLE `servives` DROP FOREIGN KEY `servives_barber_id_fkey`;

-- AlterTable
ALTER TABLE `availables` MODIFY `barber_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `photos` MODIFY `barber_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `servives` MODIFY `barber_id` VARCHAR(191) NOT NULL,
    MODIFY `appointment_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `availables` ADD CONSTRAINT `availables_barber_id_fkey` FOREIGN KEY (`barber_id`) REFERENCES `barbers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `photos` ADD CONSTRAINT `photos_barber_id_fkey` FOREIGN KEY (`barber_id`) REFERENCES `barbers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `servives` ADD CONSTRAINT `servives_barber_id_fkey` FOREIGN KEY (`barber_id`) REFERENCES `barbers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `servives` ADD CONSTRAINT `servives_appointment_id_fkey` FOREIGN KEY (`appointment_id`) REFERENCES `appointments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
