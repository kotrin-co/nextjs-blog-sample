import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "9fntoheq8m",
  apiKey: process.env.API_KEY,
});
