import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets-zod";
import { z } from "zod";

export const env = createEnv({
  extends: [vercel()],
  shared: {
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
  },
  server: {
    DATABASE_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_AUTH_PROXY_URL: z.string().url(),
    NEXT_PUBLIC_SESSION_COOKIE_PREFIX: z.string(),
  },
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_AUTH_PROXY_URL: process.env.NEXT_PUBLIC_AUTH_PROXY_URL,
    NEXT_PUBLIC_SESSION_COOKIE_PREFIX:
      process.env.NEXT_PUBLIC_SESSION_COOKIE_PREFIX,
  },
  skipValidation:
    !!process.env.CI || process.env.npm_lifecycle_event === "lint",
});
