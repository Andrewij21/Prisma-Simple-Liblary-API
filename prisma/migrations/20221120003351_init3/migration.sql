/*
  Warnings:

  - You are about to drop the column `class` on the `Student` table. All the data in the column will be lost.
  - You are about to alter the column `username` on the `Student` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - The `gender` column on the `Student` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `classroom` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'NONE');

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "class",
ADD COLUMN     "classroom" TEXT NOT NULL,
ALTER COLUMN "username" SET DATA TYPE VARCHAR(50),
DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'NONE';
