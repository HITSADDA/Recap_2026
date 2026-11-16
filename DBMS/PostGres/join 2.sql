-- INNER JOIN
SELECT user_id, title, name
FROM orders
INNER JOIN users ON orders.user_id = users.id;


-- LEFT JOINS
SELECT user_id, name,
FROM orders
LEFT JOIN users ON orders.user_id = users.id;

-- RIGHT JOINS
SELECT user_id, title, name
FROM orders
RIGHT JOIN users ON orders.user_id = users.id;


-- JOINS
SELECT user_id, name, title
FROM orders
JOIN users ON orders.user_id = users.id;

