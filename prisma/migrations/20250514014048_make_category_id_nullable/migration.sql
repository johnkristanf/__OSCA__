-- DropForeignKey
ALTER TABLE "applications" DROP CONSTRAINT "applications_category_id_fkey";

-- AlterTable
ALTER TABLE "applications" ALTER COLUMN "category_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "senior_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
