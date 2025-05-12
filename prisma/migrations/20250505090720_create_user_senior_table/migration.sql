-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "senior" (
    "id" SERIAL NOT NULL,
    "lastname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "middlename" TEXT,
    "email" TEXT,
    "barangay" TEXT NOT NULL,
    "purok" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "age" TEXT NOT NULL,
    "contact_no" TEXT NOT NULL,
    "remarks_id" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "senior_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registration_document" (
    "id" SERIAL NOT NULL,
    "tag" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "seniors_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "registration_document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "remarks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "remarks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "session_sessionToken_key" ON "session"("sessionToken");

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "senior" ADD CONSTRAINT "senior_remarks_id_fkey" FOREIGN KEY ("remarks_id") REFERENCES "remarks"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registration_document" ADD CONSTRAINT "registration_document_seniors_id_fkey" FOREIGN KEY ("seniors_id") REFERENCES "senior"("id") ON DELETE CASCADE ON UPDATE CASCADE;
