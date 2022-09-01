/*
  Warnings:

  - You are about to drop the column `barber_id` on the `availables` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `availables_barber_id_fkey` ON `availables`;

-- AlterTable
ALTER TABLE `appointments` MODIFY `hora` TIME NOT NULL;

-- AlterTable
ALTER TABLE `availables` DROP COLUMN `barber_id`,
    MODIFY `hora` TIME NOT NULL;
