import { pgTable, varchar, integer, serial } from  "drizzle-orm/pg-core"
import { drizzle } from "drizzle-orm/vercel-postgres"
import { sql } from "@vercel/postgres";



export const cartTable = pgTable("cart", {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", {
        length: 255
    }).notNull(),
    product_id: varchar("product_id", {
        length:255
    }).notNull(),
    product_name: varchar("product_name", {
        length:255
    }).notNull(),
    quantity: integer("quantity"),
    price: integer("price"),
});

export const db = drizzle(sql);
