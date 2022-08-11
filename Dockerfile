FROM node:14.15.4-alpine

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY . .

COPY --from=deps /app/node_modules /home/brendan/Desktop/MyPortfolio/portfolio/node_modules

# Install production dependencies.
# If you add a package-lock.json, speed your build by switching to 'npm ci'.
RUN npm ci --only=production

# Copy local code to the container image.
COPY --from=builder /app ./

EXPOSE 3000

RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "start" ]