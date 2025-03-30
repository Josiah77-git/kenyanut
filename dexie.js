import Dexie from 'dexie';

// Create a new database instance
const db = new Dexie("Kenya Nut Company");

// Define tables and their indexes
db.version(1).stores({
    users: '++id, name, age', // '++id' means auto-incremented primary key
    posts: '++id, title, content, userId' 
});

// Open the database
db.open().catch(err => {
    console.error("Failed to open db: ", err);
});
