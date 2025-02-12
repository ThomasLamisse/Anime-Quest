-- Table Animes
CREATE TABLE Animes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    image VARCHAR(255),
    annee_sortie YEAR,
    genre VARCHAR(100),
    auteur VARCHAR(100)
);

-- Table Webtoons
CREATE TABLE Webtoons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    image VARCHAR(255),
    annee_sortie YEAR,
    genre VARCHAR(100),
    auteur VARCHAR(100)
);

-- Table Commentaires (pour les animes et webtoons)
CREATE TABLE Commentaires (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pseudo VARCHAR(50) NOT NULL, 
    commentaire TEXT NOT NULL,
    date_post TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    anime_id INT NULL,
    webtoon_id INT NULL,
    FOREIGN KEY (anime_id) REFERENCES Animes(id) ON DELETE CASCADE,
    FOREIGN KEY (webtoon_id) REFERENCES Webtoons(id) ON DELETE CASCADE
);