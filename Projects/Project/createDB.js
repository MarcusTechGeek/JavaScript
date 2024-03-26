const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const schemaFilePath = 'init.sql'; // Update with your schema file path
const schema = fs.readFileSync(schemaFilePath, 'utf8');

const dbFilePath = 'C:/Users/Master/OneDrive/Documents/Login_Page/users.db'; // Update with your desired database file path

const db = new sqlite3.Database(dbFilePath);

// Promisified version of db.exec
const execPromise = (db, sql) => {
    return new Promise((resolve, reject) => {
        db.exec(sql, function(err) {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

async function createDatabase() {
    try {
        await execPromise(db, schema);
        console.log('Database schema created successfully.');
    } catch (error) {
        console.error('Error executing schema:', error.message);
        // Handle error gracefully, maybe rollback or take corrective actions.
        // For now, we just exit.
        process.exit(1);
    } finally {
        db.close((err) => {
            if (err) {
                console.error('Error closing database connection:', err.message);
            } else {
                console.log('Database connection closed.');
            }
        });
    }
}

createDatabase();
