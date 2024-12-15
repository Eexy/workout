import {int, numeric, sqliteTable, text, real, foreignKey} from "drizzle-orm/sqlite-core";
import {relations} from "drizzle-orm";

export const movements = sqliteTable("movements", {
    id: int("id").primaryKey({autoIncrement: true}),
    name: text("name").notNull()
})

export const movementsRelations = relations(movements, ({many}) => ({
    blocks: many(blocks)
}))

export const blocks = sqliteTable("blocks", {
    id: int("id").primaryKey({autoIncrement: true}),
    movement: text("movement").notNull()})

export const blocksRelations = relations(blocks, ({many, one}) => ({
    sets: many(sets),
}))

export const sets = sqliteTable("sets", {
    id: int("id").primaryKey({autoIncrement: true}),
    blockId: int("block_id").notNull(),
    reps: int("reps").notNull(),
    weight: real("weight").notNull(),

}, (table) => {
    return {
        blockReference: foreignKey({
            columns: [table.blockId],
            foreignColumns: [blocks.id]
        }).onDelete("cascade").onUpdate("cascade")
    }
})

export const setsRelations = relations(sets, ({one}) => ({
    block: one(blocks, {
        fields: [sets.blockId],
        references: [blocks.id]
    })
}))
