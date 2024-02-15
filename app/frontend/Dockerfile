###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:20-alpine As development

WORKDIR /usr/src/app

RUN mkdir node_modules && chown -R node:node node_modules

COPY --chown=node:node package.json ./

RUN yarn install

COPY --chown=node:node . .

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:20-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node package.json ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN yarn build

ENV NODE_ENV production

RUN yarn install --frozen-lockfile --production=true && yarn cache clean

USER node

###################
# PRODUCTION
###################

FROM node:20-alpine As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/package.json ./package.json
COPY --chown=node:node --from=build /usr/src/app/vite.config.ts ./

CMD [ "yarn", "preview" ]