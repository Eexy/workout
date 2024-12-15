import {int, numeric, sqliteTable, text, real, foreignKey} from "drizzle-orm/sqlite-core";
import {relations} from "drizzle-orm";

export const movements = sqliteTable("movements", {
    id: int().primaryKey({autoIncrement: true}),
    name: text().notNull()
})

export const movementsRelations = relations(movements, ({many}) => ({
    blocks: many(blocks)
}))

export const blocks = sqliteTable("blocks", {
    id: int().primaryKey({autoIncrement: true}),
    movementId: int().notNull()
}, (table) => {
    return {
        movementReference: foreignKey({
            columns: [table.movementId],
            foreignColumns: [movements.id]
        }).onUpdate("cascade").onDelete("cascade")
    }
})

export const blocksRelations = relations(blocks, ({many, one}) => ({
    sets: many(sets),
    movement: one(movements, {
        fields: [blocks.movementId],
        references: [movements.id]
    })
}))

export const sets = sqliteTable("sets", {
    id: int().primaryKey({autoIncrement: true}),
    blockId: int().notNull(),
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
