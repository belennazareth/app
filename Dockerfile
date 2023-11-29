FROM node:20.10.0
COPY app.js app.js
COPY views views
COPY package.json package.json
RUN npm install
CMD ["npm", "run", "start"]