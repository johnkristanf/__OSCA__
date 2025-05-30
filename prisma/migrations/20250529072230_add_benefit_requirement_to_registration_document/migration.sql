/*
  Warnings:

  - You are about to drop the `benefit_requirements` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "benefit_requirements" DROP CONSTRAINT "benefit_requirements_benefit_id_fkey";

-- AlterTable
ALTER TABLE "registration_document" ADD COLUMN     "benefit_requirement_id" INTEGER;

-- DropTable
DROP TABLE "benefit_requirements";

-- CreateTable
CREATE TABLE "benefits_requirements" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "benefitsId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "benefits_requirements_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "registration_document" ADD CONSTRAINT "registration_document_benefit_requirement_id_fkey" FOREIGN KEY ("benefit_requirement_id") REFERENCES "benefits_requirements"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "benefits_requirements" ADD CONSTRAINT "benefits_requirements_benefitsId_fkey" FOREIGN KEY ("benefitsId") REFERENCES "benefits"("id") ON DELETE CASCADE ON UPDATE CASCADE;
