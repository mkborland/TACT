# TACT: Travel Accommodations and Coordination Technology

This project is created for Hack the Ranch May 2023

Updated July 2023

## Team Members

- Michael Borland
- Dayan Sauerbronn
- Roman Morawski
- Brett Mather
- Jason Flowers
- Nikki Ghadimi
- Rex Ayers
- Hannah Chapman

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
- Make sure the ports 8080, 8180, 3000, and 5432 are unassigned
- Run the following commands

```
docker-compose build
```

```
docker-compose up
```

- The client will be running on [localhost](http://localhost:3000 'Local port 3000')

## Using PM2 for Development

- Because this application is designed to run as a group of containers, development can be painful sometimes due to the nature of how docker images work. PM2 alleviates this by automating running both client and server locally while keeping the database in a container.

- To start without changing any files, simply follow the "How to use" steps from above to start, then the following depending on if you are using Docker Desktop or just the Docker CLI

### If using Docker Desktop

- Navigate to the GUI and click the stop button for only the client and server container.

### ONLY if using Docker CLI, run

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

### Next,

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

> **Warning**
> If you have a db_data_volume folder in the top directory you may need to remove it if you run into issues with the database not seeding properly, or other server issues.

## Keycloak Local Config

Keycloak is included as a Docker container, but the container does not save your user data so it needs to be recreated each time the container spins-up.  Until we find a way around it, it's recommended to spin-up a local version of the Keycloak container and leave it running instead of using "docker-compose up".  Here is the local command to keep this container running to avoid recreating users all the time (replace the X's with your home directory):

docker run --name mykeycloak -p 8180:8180 \
        -e KEYCLOAK_ADMIN=kcadmin -e KEYCLOAK_ADMIN_PASSWORD=kcpasswd \
        -e KEYCLOAK_IMPORT=/opt/keycloak/data/import/ \
        -v "/XXXXX/XXXXX/XXXXX/TACT/Client/keycloak-export":/opt/keycloak/data/import \
        quay.io/keycloak/keycloak:latest \
        start-dev --http-port=8180 --import-realm

### Keycloak User Account Creation

So as long as you run the Keycloak container locally and keep it running, you won't lose your users.  It's recommended to create a COCOM Planner user and at least one Wing Planner account.

- Open the Keycloak Admin page (localhost:8180/admin) and login using the credentials from your Docker Run cmd.
- Select the "TACT" realm in the dropdown (upper-left of the screen).
- Click the "Users" menu option on the left.
- Click "Add user", then enter a username and email, select "Email verified", then click "Join Groups" so your user can become a COCOM or Wing Planner; then click "Create".
- Click the "Credentials" tab, then "Set password".  Set the password, and slide "Temporary" to be False, then click "Save".