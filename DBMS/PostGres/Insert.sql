INSERT INTO "users"(name, email)
	VALUES('Vishal Singh', 'vsgamer9595@gmail.com'),
		    ('Youvraj Singh', 'vsgamer9596@gmail.com'),
			('Abhi Singh', 'vsgamer9597@gmail.com');

SELECT id, name FROM "users";


INSERT INTO "seller"(name, email)
	VALUES('Amezon', 'amezon@aws.com'),
			('Flipkart', 'flipkart@fkt.com');

SELECT id, name FROM "seller";

INSERT INTO "product"(title, price, sellerId)
	VALUES ('Product One', 120, 'eeb79955-7a3d-4232-ab79-5c32c4602e8b'),
			('Product Two', 160, 'eeb79955-7a3d-4232-ab79-5c32c4602e8b'),
			('Product Three', 90, 'eeb79955-7a3d-4232-ab79-5c32c4602e8b');

INSERT INTO "product"(title, price, sellerId)
	VALUES ('Product Four', 20, '75099583-a1d9-46a9-85a6-0f3b07a6324a'),
			('Product Five', 1060, '75099583-a1d9-46a9-85a6-0f3b07a6324a'),
			('Product Six', 990, '75099583-a1d9-46a9-85a6-0f3b07a6324a');

SELECT id, title, price FROM "product";

INSERT INTO "cart" (userId, productId, quantity)
	VALUES ('d529365e-31a8-4e39-9299-0ca0eccd6115', '6eae1f43-5b7c-4cc1-ab3b-cbe3adf3a340', 4),
			('3540a489-1058-406c-9523-ec7b0882032f', 'fa4e726a-cc49-49a5-9363-5ce27a90d414', 1),
			('3540a489-1058-406c-9523-ec7b0882032f', 'e9510230-6384-47a7-bf36-7b71a2de6a5a', 2);

INSERT INTO "orders" (userId, productId, quantity)
	VALUES ('d529365e-31a8-4e39-9299-0ca0eccd6115', '6eae1f43-5b7c-4cc1-ab3b-cbe3adf3a340', 4),
			('3540a489-1058-406c-9523-ec7b0882032f', 'fa4e726a-cc49-49a5-9363-5ce27a90d414', 1),
			('3540a489-1058-406c-9523-ec7b0882032f', 'e9510230-6384-47a7-bf36-7b71a2de6a5a', 2);

