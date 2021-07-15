FROM node:14.15.4

WORKDIR /codecamp__freeboard/

COPY ./package.json / codecamp__freeboard/
COPY ./package-lock.json / codecamp__freeboard/
COPY ./yarn.lock / codecamp__freeboard/
RUN yarn install

COPY . /codecamp__freeboard/
RUN yarn build

CMD ["yarn", "dev"]