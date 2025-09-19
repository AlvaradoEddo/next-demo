// sentry.client.config.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://5da1f86d4ce2f13c434996161cd48e28@o4510041671335936.ingest.us.sentry.io/4510041672318976", // tu DSN público
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.feedbackIntegration(),
    Sentry.replayIntegration(), // opcional, graba sesiones
  ],
  tracesSampleRate: 1.0, // Ajusta el porcentaje de requests con performance
  replaysSessionSampleRate: 0.1, // 10% de sesiones grabadas
  replaysOnErrorSampleRate: 1.0, // 100% si hay error
});
