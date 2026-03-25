import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { BookOpenIcon, KeyIcon, PlusIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { DashboardHeader } from "../-components/header";

export const Route = createFileRoute("/dashboard/settings/api-keys")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-4">
      <DashboardHeader icon={KeyIcon} title={t`API Keys`} />

      <Separator />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ willChange: "transform, opacity" }}
        className="grid max-w-xl gap-6"
      >
        <div className="flex items-start gap-4 rounded-md border bg-popover p-6">
          <div className="rounded-md bg-primary/10 p-2.5">
            <BookOpenIcon className="text-primary" size={24} />
          </div>

          <div className="flex-1 space-y-2">
            <h3 className="font-semibold">
              <Trans>How do I use the API?</Trans>
            </h3>

            <p className="leading-relaxed text-muted-foreground">
              <Trans>
                Explore the API documentation to learn how to integrate ProTalent CV with your applications. Find
                detailed endpoints, request examples, and authentication methods.
              </Trans>
            </p>

          </div>
        </div>

        <Separator />

        <div className="relative">
          <div className="pointer-events-none select-none blur-[2px] opacity-50">
            <Button
              variant="outline"
              className="h-auto w-full py-3"
              disabled
            >
              <PlusIcon />
              <Trans>Create a new API key</Trans>
            </Button>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Coming Soon
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
