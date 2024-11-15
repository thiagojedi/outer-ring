import { FreshContext } from "fresh";

import { AuthorizationServer } from "@jmondi/oauth2-server";
import {
  requestFromVanilla,
  responseToVanilla,
} from "@jmondi/oauth2-server/vanilla";

import * as clientRepository from "./repositories/clients.ts";
import * as tokenRepository from "./repositories/tokens.ts";
import * as scopeRepository from "./repositories/scopes.ts";
import * as userRepository from "./repositories/users.ts";
import * as authCodeRepository from "./repositories/authCodes.ts";

const oauthServer = new AuthorizationServer(
  clientRepository,
  tokenRepository,
  scopeRepository,
  "very-secret-key",
  {
    requiresPKCE: false,
  },
);
oauthServer.enableGrantType({
  grant: "authorization_code",
  userRepository,
  authCodeRepository,
});

const getOAuthServer = <
  T extends { session: { auth: boolean; userId: number } },
>() => {
  return {
    token: async (ctx: FreshContext<T>) => {
      try {
        const req_1 = await requestFromVanilla(ctx.req);
        const oauthResponse = await oauthServer.respondToAccessTokenRequest(
          req_1,
        );
        return responseToVanilla(oauthResponse);
      } catch (e) {
        return Response.json(e, { status: 400 });
      }
    },

    authorize: async (ctx: FreshContext<T>) => {
      const authRequest = await oauthServer.validateAuthorizationRequest(
        await requestFromVanilla(ctx.req),
      );

      if (!ctx.state.session.auth) {
        return Response.redirect(
          `/login?${new URLSearchParams({ redirect: ctx.url.toString() })}`,
        );
      }

      authRequest.user = { id: ctx.state.session.userId! };
      authRequest.isAuthorizationApproved = true;

      const oauthResponse = await oauthServer.completeAuthorizationRequest(
        authRequest,
      );

      return responseToVanilla(oauthResponse);
    },
  };
};

export const authServer = getOAuthServer();
