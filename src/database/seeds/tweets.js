const data = [{
	description: 'My first tweets',
	likes: 20,
	retweets: 36
}, {
	description: 'Second tweets',
	likes: 20000,
	retweets: 35000
}]


exports.seed = function(knex, Promise){
	return knex('tweets')
		.del()
		.then(function() {
			return knex('tweets')
			.insert(data)
		});
}