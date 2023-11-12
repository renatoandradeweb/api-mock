# Use a imagem Node.js como base
FROM node:latest as builder

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY ["package.json", "package-lock.json*", "./"]

# Instale as dependências do projeto
RUN npm install

# Copie todo o código fonte para o diretório de trabalho
COPY . .

RUN npm run build

# Expor a porta em que a aplicação Angular será executada (ajuste conforme necessário)
EXPOSE 4200

# Comando para iniciar a aplicação Angular
CMD ["npm", "start"]

