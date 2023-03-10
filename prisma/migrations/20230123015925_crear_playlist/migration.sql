-- CreateTable
CREATE TABLE "playlists" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "authorID" INTEGER NOT NULL,
    CONSTRAINT "playlists_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PlaylistSongs" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PlaylistSongs_A_fkey" FOREIGN KEY ("A") REFERENCES "playlists" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PlaylistSongs_B_fkey" FOREIGN KEY ("B") REFERENCES "songs" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_PlaylistSongs_AB_unique" ON "_PlaylistSongs"("A", "B");

-- CreateIndex
CREATE INDEX "_PlaylistSongs_B_index" ON "_PlaylistSongs"("B");
