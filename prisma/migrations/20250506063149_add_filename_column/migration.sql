/*
  Warnings:

  - Added the required column `file_name` to the `registration_document` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "registration_document" ADD COLUMN     "file_name" TEXT NOT NULL;
