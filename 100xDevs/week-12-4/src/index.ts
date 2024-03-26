import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
})

// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users2 (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }

// createUsersTable();

//prevents sql injection
// async function insertUsersTable(username:string,password:string,email:string){
//     await client.connect();

//     const result = await client.query(`
//     INSERT INTO users(username,email,password)
    
//     VALUES($1,$2,$3);
//     `,[username,email,password]);
//     console.log(result );
// }
// insertUsersTable(
//     "username_here_only10134",
//     "password_here_only",
//     "email_here_onliii@gamil.com"

// );

