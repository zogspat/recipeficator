From node
RUN mkdir -p /home/node/app/node_modules 
WORKDIR /home/node/app
COPY package*.json ./
COPY index.js ./
RUN npm install
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
CMD /wait && node index.js
