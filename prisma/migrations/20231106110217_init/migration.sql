-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "distance" TEXT NOT NULL,
    "match_percentage" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
