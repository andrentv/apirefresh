-- DropForeignKey
ALTER TABLE `photos` DROP FOREIGN KEY `photos_barber_id_fkey`;

-- DropForeignKey
ALTER TABLE `servives` DROP FOREIGN KEY `servives_appointment_id_fkey`;

-- AlterTable
ALTER TABLE `photos` MODIFY `barber_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `servives` MODIFY `appointment_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `photos` ADD CONSTRAINT `photos_barber_id_fkey` FOREIGN KEY (`barber_id`) REFERENCES `barbers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `servives` ADD CONSTRAINT `servives_appointment_id_fkey` FOREIGN KEY (`appointment_id`) REFERENCES `appointments`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
