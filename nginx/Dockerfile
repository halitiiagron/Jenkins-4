# Step 1: Build Angular
FROM node:20-alpine AS build

WORKDIR /app
COPY frontend/ .

RUN npm install
RUN npm run build

# Step 2: Serve with nginx
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html