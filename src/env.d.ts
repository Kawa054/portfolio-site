/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type RuntimeEnv = {
  ANALYTICS_SALT?: string
  PUBLIC_SITE_URL?: string
  PUBLIC_SUPABASE_URL?: string
  PUBLIC_SUPABASE_ANON_KEY?: string
  SUPABASE_SERVICE_ROLE_KEY?: string
  ADMIN_EMAILS?: string
  PUBLIC_ANALYTICS_ENABLED?: string
}

declare namespace App {
  interface Locals {
    runtime?: {
      env: RuntimeEnv
    }
  }
}
