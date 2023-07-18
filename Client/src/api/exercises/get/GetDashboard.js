import baseApiUrl from "../../TactApiConfig.js";
import { ExerciseObjectFormat } from "./GetExercises.js";

const GetDashboard = async (token = "") => {
  // DeltaFox: un-comment and modify this when ready to bring in dynamic data.
  // const endPoint = "/get_all_exercises";
  // const response = await fetch(`${baseApiUrl}${endPoint}`, {
  //   method: "GET",
  //   headers: {
  //     "Content-type": "application/json",
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  // if (!response.ok) {
  //   console.log("error");
  // } else {
  //   const result = await response.json();
  //   return result.map((exercise) =>
  //     ExerciseObjectFormat(...Object.values(exercise))
  //   );
  // }

  // DeltaFox: This is our temporary static data 'til ready to bring in dynamic data.
  const dashboardStaticData = [
    {
      exercise_name: 'Night Court',
      owner: 'may need to add Owner column to Exercises tbl?',
      cost_sum: 14000000,
      status: 'Draft',
    },
    {
      exercise_name: 'Summer Court',
      owner: 'may need to add Owner column to Exercises tbl?',
      cost_sum: 10000000,
      status: 'Draft',
    },
    {
      exercise_name: 'Spring Court',
      owner: 'may need to add Owner column to Exercises tbl?',
      cost_sum: 2000000,
      status: 'Draft',
    },
    {
      exercise_name: 'Winter Court',
      owner: 'may need to add Owner column to Exercises tbl?',
      cost_sum: 3000000,
      status: 'Complete',
    },
    {
      exercise_name: 'Day Court',
      owner: 'may need to add Owner column to Exercises tbl?',
      cost_sum: 4000000,
      status: 'Complete',
    },
  ];

  return dashboardStaticData;
  // return dashboardStaticData.map((exercise) =>
  //   ExerciseObjectFormat(...Object.values(exercise))
  // );
};

export default GetDashboard;
