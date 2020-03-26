
exports.up = function(knex) {//cria tabelas
  return knex.shema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf',2).notNullable();
  });
};

exports.down = function(knex) {//deleta tabelas
    knex.shema.dropTable('ongs');
  
};
