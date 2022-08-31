/*
  Warnings:

  - You are about to alter the column `stars` on the `barbers` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.
  - You are about to alter the column `price` on the `servives` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `barbers` MODIFY `stars` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `servives` MODIFY `price` DECIMAL(65, 30) NOT NULL;
