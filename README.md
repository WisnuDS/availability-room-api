# Search Available Room
## Pre Installation
- You must have mysql installed on your device
- You must have sequelize-cle installed on your device
## How to Clone?
- clone this repo on your directory using ```git clone https://github.com/WisnuDS/availability-room-api.git```
- open directory using ```cd availability-room```
- install all dependency ```npm install```
- create database on mysql 
- create .env file, you can copy from .env.example ```cp .env.example .env```
- change username, password, host, and database name based on your local environment on .env file and config/config.js 
- migrate database using ```sequelize db:migrate```
- seed all seeder using ```sequelize db:seed:all```
- to run use command ```npm run dev```

## Deployed App
if you to0 lazy to clone this repo, you can test endpoint on [http://34.126.102.120](http://34.126.102.120). Postman collection on folder collection, you can import to your local postman. Don't forget to setup BASE_URL
