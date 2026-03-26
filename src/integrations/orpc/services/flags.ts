import { env } from "@/utils/env";

export type FeatureFlags = {
  disableSignups: boolean;
  disableEmailAuth: boolean;
};

export type PlanConfig = {
  freeResumeLimit: number;
  freeSharingDays: number;
  enablePaidPlan: boolean;
  upgradeUrl: string | null;
  termsUrl: string | null;
  privacyUrl: string | null;
  demoVideoUrl: string | null;
};

export const flagsService = {
  getFlags: (): FeatureFlags => ({
    disableSignups: env.FLAG_DISABLE_SIGNUPS,
    disableEmailAuth: env.FLAG_DISABLE_EMAIL_AUTH,
  }),

  getPlanConfig: (): PlanConfig => ({
    freeResumeLimit: env.FREE_RESUME_LIMIT,
    freeSharingDays: env.FREE_SHARING_DAYS,
    enablePaidPlan: env.FLAG_ENABLE_PAID_PLAN,
    upgradeUrl: env.UPGRADE_URL ?? null,
    termsUrl: env.TERMS_URL ?? null,
    privacyUrl: env.PRIVACY_URL ?? null,
    demoVideoUrl: env.DEMO_VIDEO_URL ?? null,
  }),
};
