-- CreateTable
CREATE TABLE "songs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "album" TEXT,
    "year" INTEGER,
    "genre" TEXT,
    "duration" INTEGER,
    "public" BOOLEAN NOT NULL DEFAULT true
);
