/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("aircraft").del();
  await knex("aircraft").insert([
    {
      aircraftName: "KC-135",
      aircraftCount: "1",
      personnelCount: "85",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "KC-135",
      aircraftCount: "2",
      personnelCount: "145",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "KC-135",
      aircraftCount: "3",
      personnelCount: "200",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "KC-135",
      aircraftCount: "4",
      personnelCount: "225",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "KC-135",
      aircraftCount: "5",
      personnelCount: "235",
    },
  ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "KC-135",
  //     aircraftCount: "6",
  //     personnelCount: "240",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "KC-135",
  //     aircraftCount: "7",
  //     personnelCount: "245",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "KC-135",
  //     aircraftCount: "8",
  //     personnelCount: "250",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "KC-135",
  //     aircraftCount: "9",
  //     personnelCount: "255",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "KC-135",
  //     aircraftCount: "10",
  //     personnelCount: "260",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "KC-135",
  //     aircraftCount: "11",
  //     personnelCount: "265",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "KC-135",
  //     aircraftCount: "12",
  //     personnelCount: "270",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "KC-135",
  //     aircraftCount: "13",
  //     personnelCount: "275",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "KC-135",
  //     aircraftCount: "14",
  //     personnelCount: "280",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "KC-135",
  //     aircraftCount: "15",
  //     personnelCount: "285",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "KC-135",
  //     aircraftCount: "16",
  //     personnelCount: "290",
  //   },
  // ]);
  await knex("aircraft").insert([
    {
      aircraftName: "F-22",
      aircraftCount: "2",
      personnelCount: "50",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "F-22",
      aircraftCount: "4",
      personnelCount: "75",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "F-22",
      aircraftCount: "6",
      personnelCount: "90",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "F-22",
      aircraftCount: "8",
      personnelCount: "100",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "F-22",
      aircraftCount: "10",
      personnelCount: "110",
    },
  ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "F-22",
  //     aircraftCount: "12",
  //     personnelCount: "120",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "F-22",
  //     aircraftCount: "14",
  //     personnelCount: "125",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "F-22",
  //     aircraftCount: "16",
  //     personnelCount: "125",
  //   },
  // ]);
  await knex("aircraft").insert([
    {
      aircraftName: "F-35",
      aircraftCount: "2",
      personnelCount: "50",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "F-35",
      aircraftCount: "4",
      personnelCount: "75",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "F-35",
      aircraftCount: "6",
      personnelCount: "90",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "F-35",
      aircraftCount: "8",
      personnelCount: "100",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "F-35",
      aircraftCount: "10",
      personnelCount: "110",
    },
  ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "F-35",
  //     aircraftCount: "12",
  //     personnelCount: "120",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "F-35",
  //     aircraftCount: "14",
  //     personnelCount: "125",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "F-35",
  //     aircraftCount: "16",
  //     personnelCount: "125",
  //   },
  // ]);
  await knex("aircraft").insert([
    {
      aircraftName: "A-10",
      aircraftCount: "2",
      personnelCount: "50",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "A-10",
      aircraftCount: "4",
      personnelCount: "75",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "A-10",
      aircraftCount: "6",
      personnelCount: "90",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "A-10",
      aircraftCount: "8",
      personnelCount: "100",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "A-10",
      aircraftCount: "10",
      personnelCount: "110",
    },
  ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "A-10",
  //     aircraftCount: "12",
  //     personnelCount: "120",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "A-10",
  //     aircraftCount: "14",
  //     personnelCount: "125",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "A-10",
  //     aircraftCount: "16",
  //     personnelCount: "125",
  //   },
  // ]);
  await knex("aircraft").insert([
    {
      aircraftName: "F-15C",
      aircraftCount: "2",
      personnelCount: "50",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "F-15C",
      aircraftCount: "4",
      personnelCount: "75",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "F-15C",
      aircraftCount: "6",
      personnelCount: "90",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "F-15C",
      aircraftCount: "8",
      personnelCount: "100",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "F-15C",
      aircraftCount: "10",
      personnelCount: "110",
    },
  ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "F-15C",
  //     aircraftCount: "12",
  //     personnelCount: "120",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "F-15C",
  //     aircraftCount: "14",
  //     personnelCount: "125",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "F-15C",
  //     aircraftCount: "16",
  //     personnelCount: "125",
  //   },
  // ]);
  await knex("aircraft").insert([
    {
      aircraftName: "C-130",
      aircraftCount: "1",
      personnelCount: "85",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "C-130",
      aircraftCount: "2",
      personnelCount: "145",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "C-130",
      aircraftCount: "3",
      personnelCount: "200",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "C-130",
      aircraftCount: "4",
      personnelCount: "225",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "C-130",
      aircraftCount: "5",
      personnelCount: "235",
    },
  ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-130",
  //     aircraftCount: "6",
  //     personnelCount: "240",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-130",
  //     aircraftCount: "7",
  //     personnelCount: "245",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-130",
  //     aircraftCount: "8",
  //     personnelCount: "250",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-130",
  //     aircraftCount: "9",
  //     personnelCount: "255",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-130",
  //     aircraftCount: "10",
  //     personnelCount: "260",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-130",
  //     aircraftCount: "11",
  //     personnelCount: "265",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-130",
  //     aircraftCount: "12",
  //     personnelCount: "270",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-130",
  //     aircraftCount: "13",
  //     personnelCount: "275",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-130",
  //     aircraftCount: "14",
  //     personnelCount: "280",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-130",
  //     aircraftCount: "15",
  //     personnelCount: "285",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-130",
  //     aircraftCount: "16",
  //     personnelCount: "290",
  //   },
  // ]);
  await knex("aircraft").insert([
    {
      aircraftName: "C-17",
      aircraftCount: "1",
      personnelCount: "85",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "C-17",
      aircraftCount: "2",
      personnelCount: "145",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "C-17",
      aircraftCount: "3",
      personnelCount: "200",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "C-17",
      aircraftCount: "4",
      personnelCount: "225",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "C-17",
      aircraftCount: "5",
      personnelCount: "235",
    },
  ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-17",
  //     aircraftCount: "6",
  //     personnelCount: "240",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-17",
  //     aircraftCount: "7",
  //     personnelCount: "245",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-17",
  //     aircraftCount: "8",
  //     personnelCount: "250",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-17",
  //     aircraftCount: "9",
  //     personnelCount: "255",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-17",
  //     aircraftCount: "10",
  //     personnelCount: "260",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-17",
  //     aircraftCount: "11",
  //     personnelCount: "265",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-17",
  //     aircraftCount: "12",
  //     personnelCount: "270",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-17",
  //     aircraftCount: "13",
  //     personnelCount: "275",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-17",
  //     aircraftCount: "14",
  //     personnelCount: "280",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-17",
  //     aircraftCount: "15",
  //     personnelCount: "285",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-17",
  //     aircraftCount: "16",
  //     personnelCount: "290",
  //   },
  // ]);
  await knex("aircraft").insert([
    {
      aircraftName: "C-5",
      aircraftCount: "1",
      personnelCount: "85",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "C-5",
      aircraftCount: "2",
      personnelCount: "145",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "C-5",
      aircraftCount: "3",
      personnelCount: "200",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "C-5",
      aircraftCount: "4",
      personnelCount: "225",
    },
  ]);
  await knex("aircraft").insert([
    {
      aircraftName: "C-5",
      aircraftCount: "5",
      personnelCount: "235",
    },
  ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-5",
  //     aircraftCount: "6",
  //     personnelCount: "240",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-5",
  //     aircraftCount: "7",
  //     personnelCount: "245",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-5",
  //     aircraftCount: "8",
  //     personnelCount: "250",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-5",
  //     aircraftCount: "9",
  //     personnelCount: "255",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-5",
  //     aircraftCount: "10",
  //     personnelCount: "260",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-5",
  //     aircraftCount: "11",
  //     personnelCount: "265",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-5",
  //     aircraftCount: "12",
  //     personnelCount: "270",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-5",
  //     aircraftCount: "13",
  //     personnelCount: "275",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-5",
  //     aircraftCount: "14",
  //     personnelCount: "280",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-5",
  //     aircraftCount: "15",
  //     personnelCount: "285",
  //   },
  // ]);
  // await knex("aircraft").insert([
  //   {
  //     aircraftName: "C-5",
  //     aircraftCount: "16",
  //     personnelCount: "290",
  //   },
  // ]);
}
