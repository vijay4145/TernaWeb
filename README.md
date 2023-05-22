
![Logo](https://firebasestorage.googleapis.com/v0/b/roommates-955ee.appspot.com/o/Your%20paragraph%20text%20(2).png?alt=media&token=0f5de39b-8b57-4f40-a2f4-1022c4214520) 
# Terna Web

TernaWeb reduces the tedious work of promoting events that are outside of college but are of very much importance like intercollege coding competition.Lists all the committees of our college. It also helps student to exchange the experiments and assignments.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file\
FRONTEND env Variables:\
`REACT_APP_BACKEND_URL`                      //e.g: REACT_APP_BACKEND_URL=http://localhost:8000 \
`REACT_APP_API_KEY`                          // firebase api key\
`REACT_APP_APPID`                            // generated from firebase\
`REACT_APP_MEASUREMENT`                      // generated from firebase\
`REACT_APP_MESSAGING_SENDER_ID`              // generated from firebase \

SERVER env variables:\
`PORT`                                       // PORT=8000\
`ALLOW_ACCESS_TO_URL`                        // ALLOW_ACCESS_TO_URL=http://localhost:3000 \
`API_PDF_API_KEY`\
`PRIVATE_KEY`                                // firebase api key for node js\
`CLIENT_EMAIL`                               // from node js firebase \
`CLIENT_ID`                                  // from node js firebase\
`CLIENT_CERT`                                // from node js firebase\


## Tech Stack

**Client:** React, Redux Toolkit, TailwindCSS, Firebase

**Server:** Node, Express, Mongodb, 



## Run Locally

Clone the project

```bash
  git clone https://github.com/vijay4145/TernaWeb
```

Go to the project directory

```bash
  cd TernaWeb
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
same process for frontend remember to add evnironment variable
