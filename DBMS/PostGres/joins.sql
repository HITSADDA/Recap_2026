SELECT orders.id AS orderId, product.id AS productId, title , userid, price FROM "orders" CROSS JOIN "product" ;
