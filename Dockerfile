FROM cypress/included:12.8.1

WORKDIR /website_cypress

COPY . .

RUN npm install

CMD ["npm" , "run", "npx cypress run"]