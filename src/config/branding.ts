const appName = "ProTalent CV";
const authorName = "DPN Media Works";
const authorUrl = "https://dpnmw.com";
const authorEmail = "hello@dpnmw.com";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAppUrl = (): string => (globalThis as any).process?.env?.APP_URL ?? "http://localhost";

export const branding = {
  appName,
  tagline: "Create Your Professional CV & Resume For Free",
  description:
    "ProTalent CV is a free CV and resume builder by DPN Media Works. Build, customize, and share polished resumes in minutes.",
  get appUrl() {
    return getAppUrl();
  },
  author: {
    name: authorName,
    url: authorUrl,
    email: authorEmail,
  },
  get email() {
    const appUrl = getAppUrl();
    return {
      from: `${appName} <noreply@${new URL(appUrl).hostname}>`,
      fallbackFrom: `${appName} <noreply@localhost>`,
    };
  },
  twoFactorIssuer: appName,
  pwa: {
    name: appName,
    shortName: appName,
    description: `A free CV and resume builder by ${authorName}.`,
    themeColor: "#0F2240",
    backgroundColor: "#0F2240",
  },
  mcp: {
    name: "cvpro",
    title: appName,
    description: `${appName} is a free CV and resume builder. Use this MCP server to interact with your resume using an LLM of your choice.`,
  },
};
