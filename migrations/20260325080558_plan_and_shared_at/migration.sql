ALTER TABLE "user" ADD COLUMN "plan" text NOT NULL DEFAULT 'free';--> statement-breakpoint
ALTER TABLE "resume" ADD COLUMN "shared_at" timestamp with time zone;
