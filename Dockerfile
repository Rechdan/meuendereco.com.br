FROM node:18.16.1-alpine3.18 as base

FROM base as build

WORKDIR /build

COPY . .

RUN yarn
RUN yarn build

FROM base as prod

WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000

COPY --from=build /build/.next/standalone ./
COPY --from=build /build/.next/static ./.next/static

EXPOSE 3000

CMD [ "node", "server.js" ]
