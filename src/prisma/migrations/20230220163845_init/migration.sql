/*
  Warnings:

  - You are about to drop the `Requests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Requests" DROP CONSTRAINT "Requests_folder_id_fkey";

-- DropTable
DROP TABLE "Requests";

-- CreateTable
CREATE TABLE "Apirequests" (
    "id" SERIAL NOT NULL,
    "folder_id" INTEGER NOT NULL,
    "method" TEXT,
    "url" TEXT,
    "query_params" TEXT,
    "body" TEXT,
    "request" TEXT,
    "response" TEXT,

    CONSTRAINT "Apirequests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Apirequests" ADD CONSTRAINT "Apirequests_folder_id_fkey" FOREIGN KEY ("folder_id") REFERENCES "Folders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
