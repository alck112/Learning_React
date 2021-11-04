import * as Sentry from "@sentry/react";
import {Integrations} from "@sentry/tracing";

function init() {
    Sentry.init({
        dsn: "https://0063c235f06d4e60b8ddf88d02506303@o1058933.ingest.sentry.io/6046953",
        integrations: [new Integrations.BrowserTracing()],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
}

function log(error) {
    Sentry.captureException(error);
}

export default {init, log};