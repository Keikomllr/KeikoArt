CREATE TABLE artworks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title  TEXT NOT NULL,
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

INSERT INTO artworks (title, size, year, material, price, description, category, image, image2, availability, for_sale)
VALUES
('Star Tree', '15x21cm', 2024, 'Watercolor on Paper', 850, 'A beautiful starry tree painting.', 'Watercolor', '/img/startree.jpg', 'https://placehold.co/400x580', TRUE, TRUE),
('Fox Man', '15x21cm', 2024, 'Watercolor on Paper', 850, 'A beautiful starry tree painting.', 'Watercolor', '/img/foxman.jpg', 'https://placehold.co/400x580', TRUE, TRUE),
('Snow Drops', '30x42cm', 2024, 'Watercolor on Paper', 1200, 'A beautiful starry tree painting.', 'Watercolor', '/img/snowdrops.jpg', 'https://placehold.co/400x580', TRUE, TRUE),
('Star Boy', '15x21cm', 2024, 'Watercolor on Paper', 850, 'A beautiful starry tree painting.', 'Watercolor', '/img/starboy.jpg', 'https://placehold.co/400x580', TRUE, TRUE),
('Baby Rabbits', '15x21cm', 2024, 'Watercolor on Paper', 850, 'A beautiful starry tree painting.', 'Watercolor', '/img/babyrabbits.jpg', 'https://placehold.co/400x580', TRUE, TRUE);

