
CREATE DATABASE "e-comm"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_India.1252'
    LC_CTYPE = 'English_India.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


CREATE TABLE "users"(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	name VARCHAR(60),
	email VARCHAR(60) UNIQUE NOT NULL,

	createdAt DATE DEFAULT CURRENT_DATE,
	updatedAt DATE DEFAULT CURRENT_DATE
);

CREATE TABLE "seller"(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	name VARCHAR(60),	
	email VARCHAR(60),

	createdAt DATE DEFAULT CURRENT_DATE,
	updatedAt Date DEFAULT CURRENT_DATE
);

CREATE TABLE "product"(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	title VARCHAR(200) NOT NULL,
	price FLOAT NOT NULL,

	sellerId UUID REFERENCES seller(id),

	createdAt DATE DEFAULT CURRENT_DATE,
	updatedAt DATE DEFAULT CURRENT_DATE
);

CREATE TABLE "cart"(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	userId UUID REFERENCES users(id),
	productId UUID REFERENCES product(id),
	quantity INT DEFAULT 1,

	createdAt DATE DEFAULT CURRENT_DATE,
	updatedAt DATE DEFAULT CURRENT_DATE
);

CREATE TABLE "orders"(
	id UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
	userId UUID REFERENCES users(id),
	productId UUID REFERENCES product(id),
	quantity INT,

	createdAt DATE DEFAULT CURRENT_DATE,
	updatedAt DATE DEFAULT CURRENT_DATE
);