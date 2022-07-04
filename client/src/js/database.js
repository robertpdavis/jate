import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('Jate database already exists');
        return;
      }
      db.createObjectStore('jate');
      console.log('Jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);
  // Create a new transaction and open up the desired object store
  const store = jateDb.transaction('jate', 'readwrite').objectStore('jate');
  // Use the .put() method on the store and pass in the content.
  const result = await store.put(content, "content");
  // Get confirmation of the request.
  console.log('Data saved to the database', result);
};

export const getDb = async () => {
  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);
  // Create a new transaction and open up the desired object store
  const store = jateDb.transaction('jate', 'readonly').objectStore('jate');
  // Use the .get() method to get all data in the database.
  const result = await store.get("content");
  // Get confirmation of the request.
  console.log('Data retreived from the database', result);
  return result;
};

initdb();
