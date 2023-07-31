# TACT: Travel Accommodations and Coordination Technology

This project is created for Hack the Ranch May 2023 

Updated July 2023

## Team Members

- Michael Borland
- Dayan Sauerbronn
- Roman Morawski
- Brett Mather

## Problem Statement

Build an automated tool that calculates PACAF O&M dollars per head count for the exercise. 

### Tool should include

- Summary Report
- Visual Component (Chart)
- Implement other features deemed useful

## Objectives

- Reduce time needed to manually calculate manpower costs to support PACAF Exercises
- Provide, with higher accuracy, dollar amounts for PACAF planning teams
- Consolidate data available for reporting analytics, including manpower requirements, and potential areas for economy of scale

## How to use

- Create a .env file under the Server folder to include the secrets for the flight api calls
- Make sure the ports 8080, 3000, and 5432 are unassigned
- Run the following commands

```
docker-compose build
```

```
docker-compose up
```

- The client will be running on [localhost](http://localhost:3000 "Local port 3000")

## Using PM2 for Development

- Because this application is designed to run as a group of containers, development can be painful sometimes due to the nature of how docker images work. PM2 alleviates this by automating running both client and server locally while keeping the database in a container. 

- To start without changing any files, simply follow the "How to use" steps from above to start, then the following depending on if you are using Docker Desktop or just the Docker CLI

### If using Docker Desktop
- Navigate to the GUI and click the stop button for only the client and server container. 

### If using Docker CLI, run 
```
docker-compose up db
```

- Then open a new terminal window and run

```
docker stop tact-server-1
```

- If done properly run 
```
docker ps 
```
- There should only be the postgres container running.

- Make sure you are in the TACT directory then run 

```
npm install pm2 -g
```

- If you get permission errors, you may need to use sudo

- Finally run 

```
./start.sh
```
- Once the script is finished, there should be a process list in the terminal showing both tact-api and tact-client

>**Warning**
>If you have a db_data_volume folder in the top directory you may need to remove it if you run into issues with the database not seeding properly.
