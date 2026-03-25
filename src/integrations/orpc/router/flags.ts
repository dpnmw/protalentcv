import z from "zod";

import { publicProcedure } from "../context";
import { type FeatureFlags, type PlanConfig, flagsService } from "../services/flags";

export const flagsRouter = {
  get: publicProcedure
    .route({
      method: "GET",
      path: "/flags",
      tags: ["Feature Flags"],
      operationId: "getFeatureFlags",
      summary: "Get feature flags",
      description:
        "Returns the current feature flags for this ProTalent CV instance. Feature flags control instance-wide settings such as whether new user signups or email-based authentication are disabled. No authentication required.",
      successDescription: "The current feature flags for this instance.",
    })
    .output(
      z.object({
        disableSignups: z.boolean().describe("Whether new user signups are disabled on this instance."),
        disableEmailAuth: z.boolean().describe("Whether email-based authentication is disabled on this instance."),
      }),
    )
    .handler((): FeatureFlags => flagsService.getFlags()),

  getConfig: publicProcedure
    .route({
      method: "GET",
      path: "/config",
      tags: ["Feature Flags"],
      operationId: "getPlanConfig",
      summary: "Get plan configuration",
      description:
        "Returns the plan limits configured for this ProTalent CV instance, such as the maximum number of resumes for free accounts and how many days a shared link remains active. No authentication required.",
      successDescription: "The current plan configuration.",
    })
    .output(
      z.object({
        freeResumeLimit: z.number().describe("Maximum number of resumes allowed for free accounts."),
        freeSharingDays: z.number().describe("Number of days a shared resume link remains active for free accounts."),
        enablePaidPlan: z.boolean().describe("Whether the paid plan is available on this instance."),
        upgradeUrl: z.string().nullable().describe("URL to the upgrade page, or null if not configured."),
        termsUrl: z.string().nullable().describe("URL to the Terms of Service page, or null if not configured."),
        privacyUrl: z.string().nullable().describe("URL to the Privacy Policy page, or null if not configured."),
      }),
    )
    .handler((): PlanConfig => flagsService.getPlanConfig()),
};
