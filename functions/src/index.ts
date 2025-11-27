import * as functions from "firebase-functions";
import { default as next } from "next";

const isDev = process.env.NODE_ENV !== "production";
const app = next({
  dev: isDev,
  conf: {
    // quan trọng để load Next config ở gốc
    distDir: ".next"
  }
});

const handle = app.getRequestHandler();

export const nextjsFunc = functions.https.onRequest(async (req, res) => {
  await app.prepare();
  return handle(req, res);
});
