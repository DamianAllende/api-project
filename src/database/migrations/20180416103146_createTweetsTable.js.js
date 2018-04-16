
exports.up = function(knex, Promise) {
  // crear tabla 
  return knex
  	.schema
  	.createTable('tweets', function(t) {
  		t.increments(); // 
  		t.string('description');
  		t.timestamp('createAt')
  	     .notNullable()
  	     .defaultTo(knex.fn.now());
  		t.integer('likes');
  		t.integer('retweets');
  	});
};

exports.down = function(knex, Promise) {
  // eliminar tabla
  return knex
  	.schema
  	.dropTableIfExists('tweets');
};
