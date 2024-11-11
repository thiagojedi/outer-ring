// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $api_mastodon_v1_accounts_verify_credentials from "./routes/api/(mastodon)/v1/accounts/verify_credentials.ts";
import * as $api_mastodon_v1_apps from "./routes/api/(mastodon)/v1/apps.ts";
import * as $api_mastodon_v1_instance from "./routes/api/(mastodon)/v1/instance.ts";
import * as $api_joke from "./routes/api/joke.ts";
import * as $auth_params_ from "./routes/auth/[...params].ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $oauth_authorize from "./routes/oauth/authorize.tsx";
import * as $oauth_token from "./routes/oauth/token.ts";
import * as $Counter from "./islands/Counter.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.ts": $_middleware,
    "./routes/api/(mastodon)/v1/accounts/verify_credentials.ts":
      $api_mastodon_v1_accounts_verify_credentials,
    "./routes/api/(mastodon)/v1/apps.ts": $api_mastodon_v1_apps,
    "./routes/api/(mastodon)/v1/instance.ts": $api_mastodon_v1_instance,
    "./routes/api/joke.ts": $api_joke,
    "./routes/auth/[...params].ts": $auth_params_,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/oauth/authorize.tsx": $oauth_authorize,
    "./routes/oauth/token.ts": $oauth_token,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
