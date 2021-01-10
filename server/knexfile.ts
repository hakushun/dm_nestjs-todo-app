const config = {
	client: 'postgres',
	connection: {
		host: 'localhost',
		port: 5432,
		database: 'todoapp',
		user: 'postgres',
		password: 'postgres',
	},
	migrations: {
		directory: __dirname + '/db/migrations',
	},
	seeds: {
		directory: __dirname + '/db/seeds',
	},
};

export default config;
