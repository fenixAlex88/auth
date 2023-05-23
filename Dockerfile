FROM node:18-alpine as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm i
COPY . /app
# запуск тестов
RUN CI=true npm run test
# запуск линтов
RUN npm run lint
# сборка проекта
RUN npm run build
FROM nginx:1.24.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]