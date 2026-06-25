FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

FROM base AS development
COPY package.json ./
RUN pnpm install
COPY . .
EXPOSE 5173
CMD ["pnpm", "dev"]
