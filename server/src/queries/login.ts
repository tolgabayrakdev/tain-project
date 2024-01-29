const loginQuery = `SELECT * FROM users WHERE email = $1 and password = $2`;
const registerQuery = `INSERT INTO users(username ,email, password, created_at, updated_at) 
VALUES ($1, $2, $3)`;
const findByUsernameQuery = `SELECT * FROM users WHERE username = $1`;
const findByEmailQuery = `SELECT * FROM users WHERE username = $1`;

export { loginQuery, registerQuery, findByEmailQuery, findByUsernameQuery };
