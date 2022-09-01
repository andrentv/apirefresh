-- DropForeignKey
ALTER TABLE `availables` DROP FOREIGN KEY `availables_barber_id_fkey`;

-- AlterTable
ALTER TABLE `appointments` MODIFY `hora` TIME NOT NULL;

-- AlterTable
ALTER TABLE `availables` MODIFY `hora` TIME NOT NULL;

-- CreateTable
CREATE TABLE `_AvailableToBarber` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AvailableToBarber_AB_unique`(`A`, `B`),
    INDEX `_AvailableToBarber_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_AvailableToBarber` ADD CONSTRAINT `_AvailableToBarber_A_fkey` FOREIGN KEY (`A`) REFERENCES `availables`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AvailableToBarber` ADD CONSTRAINT `_AvailableToBarber_B_fkey` FOREIGN KEY (`B`) REFERENCES `barbers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
