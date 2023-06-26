# Use a imagem base do Node
FROM node:20.2.0

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de configuração e dependências
COPY package.json .
COPY package-lock.json .

# Instale as dependências
RUN npm install

# Copie o código do aplicativo
COPY . .

# Defina o comando padrão para executar os testes
CMD ["npm", "run", "test"]