import {int, sqliteTable, text} from "drizzle-orm/sqlite-core";

export const movements = sqliteTable("movements", {
    id: int().primaryKey({autoIncrement: true}),
    name: text().notNull()
})