
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        {company_id: 1, first_name: 'Jeff', last_name: 'McGrane', email: 'jm@test.com', position: 'vp'},
       {company_id: 3, first_name: 'Brian', last_name: 'McGrane', email: 'bm@test.com', position: 'dev'},
       {company_id: 2, first_name: 'Missy', last_name: 'Guzman', email: 'mg@test.com', position: 'hr'}
      ]);
    });
};
