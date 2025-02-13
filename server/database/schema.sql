CREATE TABLE item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type ENUM("Anime", "Webtoon") NOT NULL,
    title VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    image VARCHAR(255) NOT NULL,
    release_year YEAR NOT NULL,
    author VARCHAR(255) NOT NULL,
    rating INT NOT NULL
);



CREATE TABLE comment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT NOT NULL,
    user VARCHAR(255) NOT NULL,
    comment TEXT NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(item_id) REFERENCES item(id) ON DELETE CASCADE
);

INSERT INTO Item (type, title, synopsis, image, release_year, author, rating) VALUES
( "Anime", "One Piece", "Monkey D. Luffy, un jeune pirate rêvant de devenir le Roi des Pirates en trouvant le légendaire trésor, le One Piece. Avec son équipage, il explore un monde vaste rempli d’îles mystérieuses, d’ennemis redoutables et d’alliés inoubliables. Mélange parfait d’action, d’humour et d’émotion, cette épopée pirate captive par son univers riche et ses personnages marquants.", "onepiece.jpg", 1999, "Eiichiro Oda",10),
( "Anime", "Attack on Titan", "Dans un monde ravagé par des créatures géantes appelées Titans, l'humanité lutte pour sa survie derrière d'immenses murailles. Eren Jäger, témoin d’une tragédie, jure d'exterminer ces monstres et découvre des secrets qui bouleverseront son destin et celui du monde entier. Un récit intense mêlant action, drame et mystère.", "aot.jpg", 2013, "Hajime Isayama",9),
( "Anime", "Jujutsu Kaisen", "Yuji Itadori, un lycéen ordinaire, voit sa vie basculer lorsqu'il avale un doigt maudit appartenant à Sukuna, un puissant démon. Intégré à une école d’exorcisme, il doit affronter des fléaux terrifiants tout en luttant contre la présence maléfique en lui. Un shonen explosif alliant combats nerveux et humour percutant.", "jujutsu.jpg", 2020, "Gege Akutami",9),

( "Webtoon", "Solo Leveling", "Dans un monde où des portails libèrent des monstres, les chasseurs protègent l'humanité. Sung Jin-Woo, le plus faible d’entre eux, obtient un mystérieux pouvoir lui permettant d’évoluer sans limites. Désormais, il grimpe les échelons pour devenir le plus puissant et percer les secrets des donjons.", "sololeveling.jpg", 2018, "Chugong",9),
( "Webtoon", "Tower of God", "Bam, un jeune garçon ayant vécu seul dans l’obscurité, entre dans la mystérieuse Tour de Dieu pour retrouver son amie Rachel. Chaque étage est rempli d’épreuves impitoyables, de dangers et de trahisons. En gravissant la tour, il découvre des vérités qui changeront son destin. Un récit captivant mêlant aventure et complots.", "towerofgod.jpg", 2010, "SIU",8),
( "Webtoon", "The Beginning After The End", "Dans un monde où la magie et la noblesse règnent, Arthur Leywin, ancien roi dans une autre vie, renaît avec une seconde chance. Doué d’une puissance hors norme, il tente de protéger ceux qu’il aime tout en perçant les mystères de son nouveau monde. Un mélange parfait de fantasy, action et réincarnation.", "tba.jpg", 2018, "TurtleMe",9);
