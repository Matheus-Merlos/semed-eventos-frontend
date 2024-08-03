FROM node:latest AS build

WORKDIR /svelte-app

COPY package*.json /svelte-app/

RUN npm install

COPY . /svelte-app/

RUN npm run build

FROM node:latest

WORKDIR /svelte-app

COPY --from=build /svelte-app/node_modules /svelte-app/node_modules
COPY --from=build /svelte-app /svelte-app

EXPOSE 9000

CMD ["npm", "run", "start"]