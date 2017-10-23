
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {name: 'Clear Voice', description: 'tech', suite: 123},
        {name: 'Coplex', description: 'dev shop', suite: 564},
        {name: 'Amazon', description: 'tech', suite: 987}
      ]);
    });
};
