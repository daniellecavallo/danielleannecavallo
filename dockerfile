FROM node:18.13.0

WORKDIR /app

COPY package.json ./

COPY tailwind.config.ts ./

COPY tsconfig.json ./

COPY typography.ts ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD npm start