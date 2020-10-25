FROM node:12
RUN npm i -g gatsby-cli
RUN mkdir /code
WORKDIR /code
COPY . /code/
RUN rm -rf node_modules
RUN npm i
EXPOSE 8001
