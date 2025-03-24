-- database: c:\Workspace\JavaScript2\keikowebsite\server\db\artworks1.db

CREATE TABLE artworks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title  TEXT NOT NULL,
    slug TEXT,
    size TEXT,
    year INT,
    material TEXT,
    price DECIMAL(10,2) DEFAULT NULL,
    description TEXT NOT NULL,
    category  TEXT,
    image  TEXT,
    image2  TEXT,
    availability BOOLEAN DEFAULT TRUE,
    for_sale BOOLEAN DEFAULT FALSE, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO artworks (title, slug, size, year, material, price, description, category, image, image2, availability, for_sale)
VALUES
('Star Tree', 'star-tree', '15x21cm', 2024, 'Watercolor on Paper', 850, 'A beautiful starry tree painting.', 'Watercolor', '/img/startree.jpg', 'https://placehold.co/400x580', TRUE, TRUE),
('Fox Man', 'fox-man', '15x21cm', 2024, 'Watercolor on Paper', 850, 'Hello dear fox man.', 'Watercolor', '/img/foxman.jpg', 'https://placehold.co/400x580', TRUE, TRUE),
('Snow Drops', 'snow-drops', '30x42cm', 2024, 'Watercolor on Paper', 1200, 'Spring is around the corner.', 'Watercolor', '/img/snowdrops.jpg', 'https://placehold.co/400x580', TRUE, TRUE),
('Star Boy', 'star-boy', '15x21cm', 2024, 'Watercolor on Paper', 850, 'A Boy with gold star.', 'Watercolor', '/img/starboy.jpg', 'https://placehold.co/400x580', TRUE, TRUE),
('Baby Rabbits', 'baby-rabbits', '15x21cm', 2024, 'Watercolor on Paper', 850, 'A beautiful starry tree painting.', 'Watercolor', '/img/babyrabbits.jpg', 'https://placehold.co/400x580', TRUE, TRUE),

('Uncle Bedger', 'uncle-bedger', '15x21cm', 2023, 'Watercolor on Paper', 850, 'Uncle Badger and the Lamp.  One cold winter night.', 'Watercolor', '/img/uncleB.jpg', 'https://placehold.co/400x580', TRUE, TRUE),

('Snow Child -Yukinko- Before the Storm', 'snow-child-yukinko-before-storm', '15x21cm', 2023, 'Watercolor on Paper', 850, '-YUKINKO series- It is a traditional Japanese winter coat (MINO) made of straw. A long time ago, people in northern Japan used it to protect themselves from heavy snow and cold. Although we no longer see this scenery in our daily life, the good old days of Japan remain.', 'Watercolor', '/img/snowchild.jpg', 'https://placehold.co/400x580', TRUE, TRUE),

('Snow Child -Yukinko- Three Youkinko', 'snow-child-yukinko-three', '15x21cm', 2023, 'Watercolor on Paper', 850, '-YUKINKO series- It is a traditional Japanese winter coat (MINO) made of straw. A long time ago, people in northern Japan used it to protect themselves from heavy snow and cold. Although we no longer see this scenery in our daily life, the good old days of Japan remain.', 'Watercolor', '/img/snowchild1.jpg', 'https://placehold.co/400x580', TRUE, TRUE),

('Snow Child -Yukinko-', 'snow-child-yukinko', '15x21cm', 2023, 'Watercolor on Paper', 850, '-YUKINKO series- It is a traditional Japanese winter coat (MINO) made of straw. A long time ago, people in northern Japan used it to protect themselves from heavy snow and cold. Although we no longer see this scenery in our daily life, the good old days of Japan remain.', 'Watercolor', '/img/snowchild2.jpg', 'https://placehold.co/400x580', TRUE, TRUE),

('Star Boy -Gold-', 'star-boy-gold', '30x42cm', 2024, 'Watercolor on Paper', 1200, 'I woke up the middle of the night. I saw a star boy  out side of  the window. ', 'Watercolor', '/img/starboygold.jpg', 'https://placehold.co/400x580', TRUE, TRUE),

('Moon Rabbit', 'moon-rabbit', '30x42cm', 2024, 'Watercolor on Paper', 1200, 'I am always by your side. ', 'Watercolor', '/img/moon.jpg', 'https://placehold.co/400x580', TRUE, TRUE),

('Wolf girl', 'wolf-girl', '30x42cm', 2021, 'Acrylic on Canvas', 3800, 'A girl with a wolf.', 'Canvas', '/img/wolfgirl.jpg', 'https://placehold.co/400x580', TRUE, TRUE),

('Mori Mori', 'mori-mori', '20x30cm', 2021, 'Clay', 1800, '-Mori Mori Series-', 'Sculpture', '/img/morimori3.jpg', 'https://placehold.co/400x580', TRUE, TRUE);