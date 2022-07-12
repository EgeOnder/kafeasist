import { DataSource } from 'typeorm';
import { __db_user__, __db_pass__, __db_name__, __prod__ } from './constants';
import { join } from 'path';

export const orm = new DataSource({
	type: 'mssql',
	host: 'localhost',
	port: 1433,
	username: __db_user__,
	password: __db_pass__,
	database: __db_name__,
	synchronize: true,
	logging: false,
	entities: [join(__dirname, '/../entities/**/*{.ts,.js}')],
	options: { encrypt: false },
});
