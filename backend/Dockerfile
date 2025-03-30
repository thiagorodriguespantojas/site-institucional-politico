FROM node:18

WORKDIR /app

COPY package*.json ./

# Instalar as dependências diretamente no container
RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]
