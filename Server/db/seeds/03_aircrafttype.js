/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("aircrafttype").del();
  await knex("aircrafttype").insert([
    {
      aircraftName: "KC-135",
      aircraftNumber: "1",
      personnelReq: "85",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "KC-135",
      aircraftNumber: "2",
      personnelReq: "145",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "KC-135",
      aircraftNumber: "3",
      personnelReq: "200",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "KC-135",
      aircraftNumber: "4",
      personnelReq: "225",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "KC-135",
      aircraftNumber: "5",
      personnelReq: "235",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "KC-135",
      aircraftNumber: "6",
      personnelReq: "240",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "KC-135",
      aircraftNumber: "7",
      personnelReq: "245",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "KC-135",
      aircraftNumber: "8",
      personnelReq: "250",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "KC-135",
      aircraftNumber: "9",
      personnelReq: "255",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "KC-135",
      aircraftNumber: "10",
      personnelReq: "260",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "KC-135",
      aircraftNumber: "11",
      personnelReq: "265",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "KC-135",
      aircraftNumber: "12",
      personnelReq: "270",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "KC-135",
      aircraftNumber: "13",
      personnelReq: "275",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "KC-135",
      aircraftNumber: "14",
      personnelReq: "280",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "KC-135",
      aircraftNumber: "15",
      personnelReq: "285",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "KC-135",
      aircraftNumber: "16",
      personnelReq: "290",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-22",
      aircraftNumber: "2",
      personnelReq: "50",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-22",
      aircraftNumber: "4",
      personnelReq: "75",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-22",
      aircraftNumber: "6",
      personnelReq: "90",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-22",
      aircraftNumber: "8",
      personnelReq: "100",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-22",
      aircraftNumber: "10",
      personnelReq: "110",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-22",
      aircraftNumber: "12",
      personnelReq: "120",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-22",
      aircraftNumber: "14",
      personnelReq: "125",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-22",
      aircraftNumber: "16",
      personnelReq: "125",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-35",
      aircraftNumber: "2",
      personnelReq: "50",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-35",
      aircraftNumber: "4",
      personnelReq: "75",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-35",
      aircraftNumber: "6",
      personnelReq: "90",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-35",
      aircraftNumber: "8",
      personnelReq: "100",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-35",
      aircraftNumber: "10",
      personnelReq: "110",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-35",
      aircraftNumber: "12",
      personnelReq: "120",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-35",
      aircraftNumber: "14",
      personnelReq: "125",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-35",
      aircraftNumber: "16",
      personnelReq: "125",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "A-10",
      aircraftNumber: "2",
      personnelReq: "50",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "A-10",
      aircraftNumber: "4",
      personnelReq: "75",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "A-10",
      aircraftNumber: "6",
      personnelReq: "90",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "A-10",
      aircraftNumber: "8",
      personnelReq: "100",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "A-10",
      aircraftNumber: "10",
      personnelReq: "110",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "A-10",
      aircraftNumber: "12",
      personnelReq: "120",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "A-10",
      aircraftNumber: "14",
      personnelReq: "125",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "A-10",
      aircraftNumber: "16",
      personnelReq: "125",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-15C",
      aircraftNumber: "2",
      personnelReq: "50",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-15C",
      aircraftNumber: "4",
      personnelReq: "75",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-15C",
      aircraftNumber: "6",
      personnelReq: "90",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-15C",
      aircraftNumber: "8",
      personnelReq: "100",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-15C",
      aircraftNumber: "10",
      personnelReq: "110",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-15C",
      aircraftNumber: "12",
      personnelReq: "120",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-15C",
      aircraftNumber: "14",
      personnelReq: "125",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "F-15C",
      aircraftNumber: "16",
      personnelReq: "125",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-130",
      aircraftNumber: "1",
      personnelReq: "85",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-130",
      aircraftNumber: "2",
      personnelReq: "145",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-130",
      aircraftNumber: "3",
      personnelReq: "200",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-130",
      aircraftNumber: "4",
      personnelReq: "225",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-130",
      aircraftNumber: "5",
      personnelReq: "235",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-130",
      aircraftNumber: "6",
      personnelReq: "240",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-130",
      aircraftNumber: "7",
      personnelReq: "245",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-130",
      aircraftNumber: "8",
      personnelReq: "250",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-130",
      aircraftNumber: "9",
      personnelReq: "255",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-130",
      aircraftNumber: "10",
      personnelReq: "260",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-130",
      aircraftNumber: "11",
      personnelReq: "265",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-130",
      aircraftNumber: "12",
      personnelReq: "270",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-130",
      aircraftNumber: "13",
      personnelReq: "275",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-130",
      aircraftNumber: "14",
      personnelReq: "280",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-130",
      aircraftNumber: "15",
      personnelReq: "285",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-130",
      aircraftNumber: "16",
      personnelReq: "290",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-17",
      aircraftNumber: "1",
      personnelReq: "85",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-17",
      aircraftNumber: "2",
      personnelReq: "145",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-17",
      aircraftNumber: "3",
      personnelReq: "200",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-17",
      aircraftNumber: "4",
      personnelReq: "225",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-17",
      aircraftNumber: "5",
      personnelReq: "235",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-17",
      aircraftNumber: "6",
      personnelReq: "240",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-17",
      aircraftNumber: "7",
      personnelReq: "245",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-17",
      aircraftNumber: "8",
      personnelReq: "250",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-17",
      aircraftNumber: "9",
      personnelReq: "255",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-17",
      aircraftNumber: "10",
      personnelReq: "260",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-17",
      aircraftNumber: "11",
      personnelReq: "265",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-17",
      aircraftNumber: "12",
      personnelReq: "270",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-17",
      aircraftNumber: "13",
      personnelReq: "275",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-17",
      aircraftNumber: "14",
      personnelReq: "280",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-17",
      aircraftNumber: "15",
      personnelReq: "285",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-17",
      aircraftNumber: "16",
      personnelReq: "290",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-5",
      aircraftNumber: "1",
      personnelReq: "85",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-5",
      aircraftNumber: "2",
      personnelReq: "145",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-5",
      aircraftNumber: "3",
      personnelReq: "200",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-5",
      aircraftNumber: "4",
      personnelReq: "225",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-5",
      aircraftNumber: "5",
      personnelReq: "235",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-5",
      aircraftNumber: "6",
      personnelReq: "240",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-5",
      aircraftNumber: "7",
      personnelReq: "245",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-5",
      aircraftNumber: "8",
      personnelReq: "250",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-5",
      aircraftNumber: "9",
      personnelReq: "255",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-5",
      aircraftNumber: "10",
      personnelReq: "260",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-5",
      aircraftNumber: "11",
      personnelReq: "265",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-5",
      aircraftNumber: "12",
      personnelReq: "270",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-5",
      aircraftNumber: "13",
      personnelReq: "275",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-5",
      aircraftNumber: "14",
      personnelReq: "280",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-5",
      aircraftNumber: "15",
      personnelReq: "285",
    },
  ]);
  await knex("aircrafttype").insert([
    {
      aircraftName: "C-5",
      aircraftNumber: "16",
      personnelReq: "290",
    },
  ]);
}
