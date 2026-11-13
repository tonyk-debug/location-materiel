FROM node:22-alpine

WORKDIR /app

# Installe les dépendances d'abord (mis en cache tant que package.json ne change pas)
COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
