/*
  Warnings:

  - A unique constraint covering the columns `[barber_id]` on the table `appointments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[barber_id]` on the table `photos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[barber_id]` on the table `testimonials` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `photos` DROP FOREIGN KEY `photos_barber_id_fkey`;

-- DropForeignKey
ALTER TABLE `servives` DROP FOREIGN KEY `servives_appointment_id_fkey`;

-- DropForeignKey
ALTER TABLE `servives` DROP FOREIGN KEY `servives_barber_id_fkey`;

-- AlterTable
ALTER TABLE `photos` MODIFY `barber_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `servives` MODIFY `barber_id` VARCHAR(191) NULL,
    MODIFY `appointment_id` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `appointments_barber_id_key` ON `appointments`(`barber_id`);

-- CreateIndex
CREATE UNIQUE INDEX `photos_barber_id_key` ON `photos`(`barber_id`);

-- CreateIndex
CREATE UNIQUE INDEX `testimonials_barber_id_key` ON `testimonials`(`barber_id`);

-- AddForeignKey
ALTER TABLE `photos` ADD CONSTRAINT `photos_barber_id_fkey` FOREIGN KEY (`barber_id`) REFERENCES `barbers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `servives` ADD CONSTRAINT `servives_barber_id_fkey` FOREIGN KEY (`barber_id`) REFERENCES `barbers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `servives` ADD CONSTRAINT `servives_appointment_id_fkey` FOREIGN KEY (`appointment_id`) REFERENCES `appointments`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
