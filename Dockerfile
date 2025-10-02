# syntax=docker/dockerfile:1.6

# --- Base image versions
ARG NODE_VERSION=20.12-alpine

# --- Builder stage: fetch deps, install offline and build Next.js with standalone output
FROM node:${NODE_VERSION} AS builder
RUN apk add --no-cache libc6-compat && corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
# Pre-fetch dependencies to PNPM virtual store for caching
RUN pnpm fetch
# Copy source after fetch to leverage layer cache
COPY . .
# Install from lockfile using the fetched store, then build
RUN pnpm install --frozen-lockfile --offline --prefer-offline \
 && pnpm build

# --- Runner stage: minimal runtime image
FROM node:${NODE_VERSION} AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copy necessary build artifacts for standalone runtime
# .next/standalone contains server.js and minimal node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Optionally copy next.config.js/ts if used at runtime (not required typically)
# COPY --from=builder /app/next.config.ts ./

USER nextjs
EXPOSE 3000

# Start the server (Next standalone exposes server.js at project root)
CMD ["node", "server.js"]
