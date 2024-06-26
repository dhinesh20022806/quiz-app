export default [
    {
      id: 'q1',
      text: 'What does NoSQL stand for?',
      answers: [
        'Not Only SQL',
        'No Structured Query Language',
        'Non SQL',
        'Not SQL',
        'Non-relational SQL',
      ],
    },
    {
      id: 'q2',
      text: 'What type of database is MongoDB?',
      answers: [
        'Document-oriented database',
        'Relational database',
        'Graph database',
        'Key-value store',
        'Column-family store',
      ],
    },
    {
      id: 'q3',
      text: 'What is the primary language used to interact with MongoDB?',
      answers: [
        'JavaScript',
        'Python',
        'SQL',
        'Java',
        'Ruby',
      ],
    },
    {
      id: 'q4',
      text: 'What is the default port for MongoDB?',
      answers: [
        '27017',
        '27018',
        '28017',
        '28018',
        '25017',
      ],
    },
    {
      id: 'q5',
      text: 'In MongoDB, what is a document?',
      answers: [
        'A record in a collection, stored in BSON format',
        'A table',
        'A database',
        'A field',
        'A row',
      ],
    },
    {
      id: 'q6',
      text: 'What is a collection in MongoDB?',
      answers: [
        'A group of MongoDB documents',
        'A database',
        'A table',
        'A row',
        'A field',
      ],
    },
    {
      id: 'q7',
      text: 'Which data format is MongoDB built on?',
      answers: [
        'BSON',
        'JSON',
        'XML',
        'YAML',
        'CSV',
      ],
    },
    {
      id: 'q8',
      text: 'How do you create a database in MongoDB?',
      answers: [
        'use database_name',
        'CREATE DATABASE database_name',
        'new database database_name',
        'database.create database_name',
        'db.create database_name',
      ],
    },
    {
      id: 'q9',
      text: 'How do you show all databases in MongoDB?',
      answers: [
        'show dbs',
        'list databases',
        'show databases',
        'db.show()',
        'dbs.list()',
      ],
    },
    {
      id: 'q10',
      text: 'How do you insert a document into a collection in MongoDB?',
      answers: [
        'db.collection.insertOne(document)',
        'db.collection.add(document)',
        'db.collection.save(document)',
        'db.collection.put(document)',
        'db.collection.write(document)',
      ],
    },
    {
      id: 'q11',
      text: 'How do you find all documents in a collection?',
      answers: [
        'db.collection.find()',
        'db.collection.search()',
        'db.collection.get()',
        'db.collection.query()',
        'db.collection.retrieve()',
      ],
    },
    {
      id: 'q12',
      text: 'How do you update a document in MongoDB?',
      answers: [
        'db.collection.updateOne(filter, update)',
        'db.collection.modifyOne(filter, update)',
        'db.collection.changeOne(filter, update)',
        'db.collection.setOne(filter, update)',
        'db.collection.alterOne(filter, update)',
      ],
    },
    {
      id: 'q13',
      text: 'How do you delete a document from a collection in MongoDB?',
      answers: [
        'db.collection.deleteOne(filter)',
        'db.collection.removeOne(filter)',
        'db.collection.eraseOne(filter)',
        'db.collection.dropOne(filter)',
        'db.collection.delOne(filter)',
      ],
    },
    {
      id: 'q14',
      text: 'What is the equivalent of a table in MongoDB?',
      answers: [
        'Collection',
        'Document',
        'Row',
        'Database',
        'Field',
      ],
    },
    {
      id: 'q15',
      text: 'How do you drop a collection in MongoDB?',
      answers: [
        'db.collection.drop()',
        'db.collection.remove()',
        'db.collection.delete()',
        'db.collection.destroy()',
        'db.collection.erase()',
      ],
    },
    {
      id: 'q16',
      text: 'How do you drop a database in MongoDB?',
      answers: [
        'db.dropDatabase()',
        'db.deleteDatabase()',
        'db.removeDatabase()',
        'db.destroyDatabase()',
        'db.eraseDatabase()',
      ],
    },
    {
      id: 'q17',
      text: 'Which command provides information about the databases in MongoDB?',
      answers: [
        'db.stats()',
        'db.info()',
        'db.data()',
        'db.status()',
        'db.report()',
      ],
    },
    {
      id: 'q18',
      text: 'How do you find a specific document by its ID in MongoDB?',
      answers: [
        'db.collection.findOne({ _id: ObjectId("id") })',
        'db.collection.find({ _id: "id" })',
        'db.collection.search({ id: "id" })',
        'db.collection.get({ _id: "id" })',
        'db.collection.query({ id: "id" })',
      ],
    },
    {
      id: 'q19',
      text: 'How do you create an index in MongoDB?',
      answers: [
        'db.collection.createIndex({ field: 1 })',
        'db.collection.addIndex({ field: 1 })',
        'db.collection.newIndex({ field: 1 })',
        'db.collection.index({ field: 1 })',
        'db.collection.setIndex({ field: 1 })',
      ],
    },
    {
      id: 'q20',
      text: 'What is the purpose of indexing in MongoDB?',
      answers: [
        'To improve query performance',
        'To ensure data integrity',
        'To enforce constraints',
        'To define relationships',
        'To manage transactions',
      ],
    },
    {
      id: 'q21',
      text: 'What is the maximum size of a BSON document in MongoDB?',
      answers: [
        '16 MB',
        '32 MB',
        '64 MB',
        '128 MB',
        '256 MB',
      ],
    },
]