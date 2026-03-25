import { t } from "@lingui/core/macro";
import { PlusIcon } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { useDialogStore } from "@/dialogs/store";
import { authClient } from "@/integrations/auth/client";
import { orpc } from "@/integrations/orpc/client";

import { BaseCard } from "./base-card";

export function CreateResumeCard() {
  const { openDialog } = useDialogStore();
  const { data: session } = authClient.useSession();
  const { data: resumes } = useQuery(orpc.resume.list.queryOptions({ input: { tags: [], sort: "lastUpdatedAt" } }));
  const { data: planConfig } = useQuery(orpc.flags.getConfig.queryOptions());

  const plan = (session?.user as { plan?: string } | undefined)?.plan ?? "free";
  const limit = plan === "paid" ? Infinity : (planConfig?.freeResumeLimit ?? 3);

  const handleClick = () => {
    if ((resumes?.length ?? 0) >= limit) {
      toast.error(t`You've reached the maximum of ${limit} resumes for your account. Please delete a resume to create a new one.`);
      return;
    }
    openDialog("resume.create", undefined);
  };

  return (
    <BaseCard
      title={t`Create a new resume`}
      description={t`Start building your resume from scratch`}
      onClick={handleClick}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <PlusIcon weight="thin" className="size-12" />
      </div>
    </BaseCard>
  );
}
