PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_sets` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`block_id` integer NOT NULL,
	`reps` integer NOT NULL,
	`weight` real NOT NULL,
	FOREIGN KEY (`block_id`) REFERENCES `blocks`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_sets`("id", "block_id", "reps", "weight") SELECT "id", "block_id", "reps", "weight" FROM `sets`;--> statement-breakpoint
DROP TABLE `sets`;--> statement-breakpoint
ALTER TABLE `__new_sets` RENAME TO `sets`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_blocks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`movement` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_blocks`("id", "movement") SELECT "id", "movement" FROM `blocks`;--> statement-breakpoint
DROP TABLE `blocks`;--> statement-breakpoint
ALTER TABLE `__new_blocks` RENAME TO `blocks`;