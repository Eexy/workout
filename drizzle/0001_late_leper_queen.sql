CREATE TABLE `blocks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`movementId` integer NOT NULL,
	FOREIGN KEY (`movementId`) REFERENCES `movements`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `sets` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`blockId` integer NOT NULL,
	`reps` integer NOT NULL,
	`weight` real NOT NULL,
	FOREIGN KEY (`blockId`) REFERENCES `blocks`(`id`) ON UPDATE cascade ON DELETE cascade
);
