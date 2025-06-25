/*
  Warnings:

  - The primary key for the `comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `parentId` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `comment` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `comment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `postId` on the `comment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `topicId` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `post` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the `topic` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authorId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_parentId_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_postId_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_userId_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_topicId_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_userId_fkey`;

-- DropIndex
DROP INDEX `Comment_parentId_fkey` ON `comment`;

-- DropIndex
DROP INDEX `Comment_postId_fkey` ON `comment`;

-- DropIndex
DROP INDEX `Comment_userId_fkey` ON `comment`;

-- DropIndex
DROP INDEX `Post_topicId_fkey` ON `post`;

-- DropIndex
DROP INDEX `Post_userId_fkey` ON `post`;

-- AlterTable
ALTER TABLE `comment` DROP PRIMARY KEY,
    DROP COLUMN `parentId`,
    DROP COLUMN `updatedAt`,
    DROP COLUMN `userId`,
    ADD COLUMN `authorId` VARCHAR(191) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `postId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `post` DROP PRIMARY KEY,
    DROP COLUMN `topicId`,
    DROP COLUMN `userId`,
    ADD COLUMN `authorId` VARCHAR(191) NOT NULL,
    ADD COLUMN `categoryId` INTEGER NOT NULL,
    ADD COLUMN `published` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `slug` VARCHAR(191) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `topic`;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Category_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Tag_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PostTags` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PostTags_AB_unique`(`A`, `B`),
    INDEX `_PostTags_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Post_slug_key` ON `Post`(`slug`);

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PostTags` ADD CONSTRAINT `_PostTags_A_fkey` FOREIGN KEY (`A`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PostTags` ADD CONSTRAINT `_PostTags_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
