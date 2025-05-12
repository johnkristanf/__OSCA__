/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `remarks` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "remarks_name_key" ON "remarks"("name");
