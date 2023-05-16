/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('aircraft-type').del()
  await knex('aircraft-type').insert([
    { aircraftName: 'KC-135' },
    { aircraftNumber: '1' },
    { personnelRequired: '85' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'KC-135' },
    { aircraftNumber: '2' },
    { personnelRequired: '145' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'KC-135' },
    { aircraftNumber: '3' },
    { personnelRequired: '200' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'KC-135' },
    { aircraftNumber: '4' },
    { personnelRequired: '225' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'KC-135' },
    { aircraftNumber: '5' },
    { personnelRequired: '235' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'KC-135' },
    { aircraftNumber: '6' },
    { personnelRequired: '240' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'KC-135' },
    { aircraftNumber: '7' },
    { personnelRequired: '245' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'KC-135' },
    { aircraftNumber: '8' },
    { personnelRequired: '250' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'KC-135' },
    { aircraftNumber: '9' },
    { personnelRequired: '255' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'KC-135' },
    { aircraftNumber: '10' },
    { personnelRequired: '260' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'KC-135' },
    { aircraftNumber: '11' },
    { personnelRequired: '265' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'KC-135' },
    { aircraftNumber: '12' },
    { personnelRequired: '270' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'KC-135' },
    { aircraftNumber: '13' },
    { personnelRequired: '275' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'KC-135' },
    { aircraftNumber: '14' },
    { personnelRequired: '280' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'KC-135' },
    { aircraftNumber: '15' },
    { personnelRequired: '285' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'KC-135' },
    { aircraftNumber: '16' },
    { personnelRequired: '290' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-22' },
    { aircraftNumber: '1' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-22' },
    { aircraftNumber: '2' },
    { personnelRequired: '50' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-22' },
    { aircraftNumber: '3' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-22' },
    { aircraftNumber: '4' },
    { personnelRequired: '75' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-22' },
    { aircraftNumber: '5' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-22' },
    { aircraftNumber: '6' },
    { personnelRequired: '90' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-22' },
    { aircraftNumber: '7' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-22' },
    { aircraftNumber: '8' },
    { personnelRequired: '100' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-22' },
    { aircraftNumber: '9' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-22' },
    { aircraftNumber: '10' },
    { personnelRequired: '110' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-22' },
    { aircraftNumber: '11' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-22' },
    { aircraftNumber: '12' },
    { personnelRequired: '120' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-22' },
    { aircraftNumber: '13' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-22' },
    { aircraftNumber: '14' },
    { personnelRequired: '125' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-22' },
    { aircraftNumber: '15' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-22' },
    { aircraftNumber: '16' },
    { personnelRequired: '125' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-35' },
    { aircraftNumber: '1' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-35' },
    { aircraftNumber: '2' },
    { personnelRequired: '50' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-35' },
    { aircraftNumber: '3' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-35' },
    { aircraftNumber: '4' },
    { personnelRequired: '75' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-35' },
    { aircraftNumber: '5' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-35' },
    { aircraftNumber: '6' },
    { personnelRequired: '90' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-35' },
    { aircraftNumber: '7' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-35' },
    { aircraftNumber: '8' },
    { personnelRequired: '100' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-35' },
    { aircraftNumber: '9' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-35' },
    { aircraftNumber: '10' },
    { personnelRequired: '110' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-35' },
    { aircraftNumber: '11' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-35' },
    { aircraftNumber: '12' },
    { personnelRequired: '120' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-35' },
    { aircraftNumber: '13' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-35' },
    { aircraftNumber: '14' },
    { personnelRequired: '125' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-35' },
    { aircraftNumber: '15' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-35' },
    { aircraftNumber: '16' },
    { personnelRequired: '125' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'A-10' },
    { aircraftNumber: '1' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'A-10' },
    { aircraftNumber: '2' },
    { personnelRequired: '50' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'A-10' },
    { aircraftNumber: '3' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'A-10' },
    { aircraftNumber: '4' },
    { personnelRequired: '75' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'A-10' },
    { aircraftNumber: '5' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'A-10' },
    { aircraftNumber: '6' },
    { personnelRequired: '90' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'A-10' },
    { aircraftNumber: '7' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'A-10' },
    { aircraftNumber: '8' },
    { personnelRequired: '100' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'A-10' },
    { aircraftNumber: '9' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'A-10' },
    { aircraftNumber: '10' },
    { personnelRequired: '110' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'A-10' },
    { aircraftNumber: '11' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'A-10' },
    { aircraftNumber: '12' },
    { personnelRequired: '120' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'A-10' },
    { aircraftNumber: '13' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'A-10' },
    { aircraftNumber: '14' },
    { personnelRequired: '125' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'A-10' },
    { aircraftNumber: '15' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'A-10' },
    { aircraftNumber: '16' },
    { personnelRequired: '125' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-15C' },
    { aircraftNumber: '1' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-15C' },
    { aircraftNumber: '2' },
    { personnelRequired: '50' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-15C' },
    { aircraftNumber: '3' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-15C' },
    { aircraftNumber: '4' },
    { personnelRequired: '75' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-15C' },
    { aircraftNumber: '5' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-15C' },
    { aircraftNumber: '6' },
    { personnelRequired: '90' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-15C' },
    { aircraftNumber: '7' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-15C' },
    { aircraftNumber: '8' },
    { personnelRequired: '100' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-15C' },
    { aircraftNumber: '9' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-15C' },
    { aircraftNumber: '10' },
    { personnelRequired: '110' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-15C' },
    { aircraftNumber: '11' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-15C' },
    { aircraftNumber: '12' },
    { personnelRequired: '120' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-15C' },
    { aircraftNumber: '13' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-15C' },
    { aircraftNumber: '14' },
    { personnelRequired: '125' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-15C' },
    { aircraftNumber: '15' },
    { personnelRequired: 'null' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'F-15C' },
    { aircraftNumber: '16' },
    { personnelRequired: '125' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-130' },
    { aircraftNumber: '1' },
    { personnelRequired: '85' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-130' },
    { aircraftNumber: '2' },
    { personnelRequired: '145' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-130' },
    { aircraftNumber: '3' },
    { personnelRequired: '200' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-130' },
    { aircraftNumber: '4' },
    { personnelRequired: '225' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-130' },
    { aircraftNumber: '5' },
    { personnelRequired: '235' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-130' },
    { aircraftNumber: '6' },
    { personnelRequired: '240' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-130' },
    { aircraftNumber: '7' },
    { personnelRequired: '245' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-130' },
    { aircraftNumber: '8' },
    { personnelRequired: '250' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-130' },
    { aircraftNumber: '9' },
    { personnelRequired: '255' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-130' },
    { aircraftNumber: '10' },
    { personnelRequired: '260' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-130' },
    { aircraftNumber: '11' },
    { personnelRequired: '265' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-130' },
    { aircraftNumber: '12' },
    { personnelRequired: '270' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-130' },
    { aircraftNumber: '13' },
    { personnelRequired: '275' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-130' },
    { aircraftNumber: '14' },
    { personnelRequired: '280' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-130' },
    { aircraftNumber: '15' },
    { personnelRequired: '285' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-130' },
    { aircraftNumber: '16' },
    { personnelRequired: '290' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-17' },
    { aircraftNumber: '1' },
    { personnelRequired: '85' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-17' },
    { aircraftNumber: '2' },
    { personnelRequired: '145' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-17' },
    { aircraftNumber: '3' },
    { personnelRequired: '200' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-17' },
    { aircraftNumber: '4' },
    { personnelRequired: '225' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-17' },
    { aircraftNumber: '5' },
    { personnelRequired: '235' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-17' },
    { aircraftNumber: '6' },
    { personnelRequired: '240' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-17' },
    { aircraftNumber: '7' },
    { personnelRequired: '245' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-17' },
    { aircraftNumber: '8' },
    { personnelRequired: '250' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-17' },
    { aircraftNumber: '9' },
    { personnelRequired: '255' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-17' },
    { aircraftNumber: '10' },
    { personnelRequired: '260' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-17' },
    { aircraftNumber: '11' },
    { personnelRequired: '265' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-17' },
    { aircraftNumber: '12' },
    { personnelRequired: '270' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-17' },
    { aircraftNumber: '13' },
    { personnelRequired: '275' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-17' },
    { aircraftNumber: '14' },
    { personnelRequired: '280' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-17' },
    { aircraftNumber: '15' },
    { personnelRequired: '285' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-17' },
    { aircraftNumber: '16' },
    { personnelRequired: '290' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-5' },
    { aircraftNumber: '1' },
    { personnelRequired: '85' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-5' },
    { aircraftNumber: '2' },
    { personnelRequired: '145' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-5' },
    { aircraftNumber: '3' },
    { personnelRequired: '200' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-5' },
    { aircraftNumber: '4' },
    { personnelRequired: '225' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-5' },
    { aircraftNumber: '5' },
    { personnelRequired: '235' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-5' },
    { aircraftNumber: '6' },
    { personnelRequired: '240' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-5' },
    { aircraftNumber: '7' },
    { personnelRequired: '245' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-5' },
    { aircraftNumber: '8' },
    { personnelRequired: '250' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-5' },
    { aircraftNumber: '9' },
    { personnelRequired: '255' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-5' },
    { aircraftNumber: '10' },
    { personnelRequired: '260' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-5' },
    { aircraftNumber: '11' },
    { personnelRequired: '265' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-5' },
    { aircraftNumber: '12' },
    { personnelRequired: '270' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-5' },
    { aircraftNumber: '13' },
    { personnelRequired: '275' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-5' },
    { aircraftNumber: '14' },
    { personnelRequired: '280' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-5' },
    { aircraftNumber: '15' },
    { personnelRequired: '285' }
  ]);
  await knex('aircraft-type').insert([
    { aircraftName: 'C-5' },
    { aircraftNumber: '16' },
    { personnelRequired: '290' }
  ]);
};
