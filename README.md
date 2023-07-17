# TACT: Travel Accommodations and Coordination Technology

This project is created for Hack the Ranch 2023 

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

- Edit the .env file under the Server folder to include the secrets for the flight api calls
- Run the following commands
- Make sure the ports 8080, 3000, and 5432 are unassigned

```docker-compose build```

```docker-compose up```

- The client will be running on [localhost](localhost:3000 "Local port 3000")