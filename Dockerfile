# Stage 1: Build the application
FROM node:18-alpine as build

WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install yarn
RUN apk add --no-cache yarn

# Install dependencies
RUN yarn install

# Copy the rest of your application code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Serve the app using nginx
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port nginx is running on
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]