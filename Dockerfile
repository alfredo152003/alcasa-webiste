FROM node:lts-alpine

# Add Git
RUN apk add --no-cache git

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4321

CMD ["npm", "run", "dev"]