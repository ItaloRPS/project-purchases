FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install
#COPIA TUDO PARA O DIRETORIO /APP
COPY . .

RUN npm run build
#DELETA AS DEPENDENCIAS DE DEV
RUN npm prune --production

#execução fase 2
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
#DELETA AS DEPENDENCIAS DE DEV
RUN npm install --only=production

EXPOSE 3030

RUN npm start