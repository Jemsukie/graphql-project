-- CreateTable
CREATE TABLE "CityInfos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "population" INTEGER NOT NULL,
    "remarks" TEXT NOT NULL
);