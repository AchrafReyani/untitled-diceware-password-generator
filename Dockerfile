# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app
COPY . .

# Install deps and build
RUN npm install --frozen-lockfile
RUN npm run build

# Stage 2: Run
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only necessary output
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
