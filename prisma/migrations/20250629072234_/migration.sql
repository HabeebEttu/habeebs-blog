/*
  Warnings:

  - You are about to drop the `_posttags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_posttags` DROP FOREIGN KEY `_PostTags_A_fkey`;

-- DropForeignKey
ALTER TABLE `_posttags` DROP FOREIGN KEY `_PostTags_B_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_postId_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_categoryId_fkey`;

-- DropTable
DROP TABLE `_posttags`;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `comment`;

-- DropTable
DROP TABLE `post`;

-- DropTable
DROP TABLE `tag`;
