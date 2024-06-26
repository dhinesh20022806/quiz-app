export default [
    {
      id: 'q1',
      text: 'What does SQL stand for?',
      answers: [
        'Structured Query Language',
        'Standard Query Language',
        'Simple Query Language',
        'Secure Query Language',
        'System Query Language',
      ],
    },
    {
      id: 'q2',
      text: 'What is PostgreSQL?',
      answers: [
        'An open-source relational database management system',
        'A programming language',
        'A web server',
        'An operating system',
        'A database administration tool',
      ],
    },
    {
      id: 'q3',
      text: 'Which command is used to create a new database in PostgreSQL?',
      answers: [
        'CREATE DATABASE',
        'NEW DATABASE',
        'ADD DATABASE',
        'MAKE DATABASE',
        'INIT DATABASE',
      ],
    },
    {
      id: 'q4',
      text: 'How do you list all databases in PostgreSQL?',
      answers: [
        '\\l or \\list',
        'SHOW DATABASES',
        'DISPLAY DATABASES',
        'LIST ALL DATABASES',
        'DATABASE LIST',
      ],
    },
    {
      id: 'q5',
      text: 'Which command is used to delete a database in PostgreSQL?',
      answers: [
        'DROP DATABASE',
        'DELETE DATABASE',
        'REMOVE DATABASE',
        'ERASE DATABASE',
        'CLEAR DATABASE',
      ],
    },
    {
      id: 'q6',
      text: 'How do you connect to a database in PostgreSQL?',
      answers: [
        '\\c database_name or \\connect database_name',
        'CONNECT TO database_name',
        'USE database_name',
        'DATABASE database_name',
        'SELECT DATABASE database_name',
      ],
    },
    {
      id: 'q7',
      text: 'Which SQL statement is used to create a new table in PostgreSQL?',
      answers: [
        'CREATE TABLE',
        'NEW TABLE',
        'ADD TABLE',
        'MAKE TABLE',
        'INIT TABLE',
      ],
    },
    {
      id: 'q8',
      text: 'Which SQL statement is used to delete a table in PostgreSQL?',
      answers: [
        'DROP TABLE',
        'DELETE TABLE',
        'REMOVE TABLE',
        'ERASE TABLE',
        'CLEAR TABLE',
      ],
    },
    {
      id: 'q9',
      text: 'How do you add a column to an existing table in PostgreSQL?',
      answers: [
        'ALTER TABLE table_name ADD COLUMN column_name data_type',
        'ADD COLUMN column_name TO table_name',
        'INSERT COLUMN column_name INTO table_name',
        'NEW COLUMN column_name IN table_name',
        'ALTER table_name ADD column_name data_type',
      ],
    },
    {
      id: 'q10',
      text: 'How do you remove a column from an existing table in PostgreSQL?',
      answers: [
        'ALTER TABLE table_name DROP COLUMN column_name',
        'REMOVE COLUMN column_name FROM table_name',
        'DELETE COLUMN column_name FROM table_name',
        'ERASE COLUMN column_name FROM table_name',
        'CLEAR COLUMN column_name FROM table_name',
      ],
    },
    {
      id: 'q11',
      text: 'How do you change the data type of a column in PostgreSQL?',
      answers: [
        'ALTER TABLE table_name ALTER COLUMN column_name TYPE new_data_type',
        'MODIFY COLUMN column_name IN table_name SET TYPE new_data_type',
        'CHANGE COLUMN column_name IN table_name TO new_data_type',
        'UPDATE COLUMN column_name IN table_name TO new_data_type',
        'ALTER table_name MODIFY COLUMN column_name new_data_type',
      ],
    },
    {
      id: 'q12',
      text: 'How do you rename a table in PostgreSQL?',
      answers: [
        'ALTER TABLE table_name RENAME TO new_table_name',
        'RENAME TABLE table_name TO new_table_name',
        'CHANGE TABLE NAME table_name TO new_table_name',
        'UPDATE TABLE NAME table_name TO new_table_name',
        'MODIFY TABLE NAME table_name TO new_table_name',
      ],
    },
    {
      id: 'q13',
      text: 'How do you insert data into a table in PostgreSQL?',
      answers: [
        'INSERT INTO table_name (column1, column2) VALUES (value1, value2)',
        'ADD INTO table_name (column1, column2) VALUES (value1, value2)',
        'PUT INTO table_name (column1, column2) VALUES (value1, value2)',
        'NEW ROW INTO table_name (column1, column2) VALUES (value1, value2)',
        'INSERT ROW INTO table_name (column1, column2) VALUES (value1, value2)',
      ],
    },
    {
      id: 'q14',
      text: 'How do you update data in a table in PostgreSQL?',
      answers: [
        'UPDATE table_name SET column1 = value1 WHERE condition',
        'MODIFY table_name SET column1 = value1 WHERE condition',
        'CHANGE table_name SET column1 = value1 WHERE condition',
        'ALTER table_name SET column1 = value1 WHERE condition',
        'REPLACE table_name SET column1 = value1 WHERE condition',
      ],
    },
    {
      id: 'q15',
      text: 'How do you delete data from a table in PostgreSQL?',
      answers: [
        'DELETE FROM table_name WHERE condition',
        'REMOVE FROM table_name WHERE condition',
        'ERASE FROM table_name WHERE condition',
        'CLEAR FROM table_name WHERE condition',
        'DROP FROM table_name WHERE condition',
      ],
    },
    {
      id: 'q16',
      text: 'Which SQL statement is used to retrieve data from a database?',
      answers: [
        'SELECT',
        'GET',
        'FETCH',
        'EXTRACT',
        'RETRIEVE',
      ],
    },
    {
      id: 'q17',
      text: 'How do you select all columns from a table in PostgreSQL?',
      answers: [
        'SELECT * FROM table_name',
        'GET ALL FROM table_name',
        'FETCH ALL FROM table_name',
        'EXTRACT * FROM table_name',
        'RETRIEVE * FROM table_name',
      ],
    },
    {
      id: 'q18',
      text: 'How do you select distinct values from a column in PostgreSQL?',
      answers: [
        'SELECT DISTINCT column_name FROM table_name',
        'GET UNIQUE column_name FROM table_name',
        'FETCH DISTINCT column_name FROM table_name',
        'EXTRACT UNIQUE column_name FROM table_name',
        'RETRIEVE DISTINCT column_name FROM table_name',
      ],
    },
    {
      id: 'q19',
      text: 'How do you sort the result set in ascending order in PostgreSQL?',
      answers: [
        'ORDER BY column_name ASC',
        'SORT BY column_name ASC',
        'ARRANGE BY column_name ASC',
        'ORDER column_name ASC',
        'ORGANIZE BY column_name ASC',
      ],
    },
    {
      id: 'q20',
      text: 'How do you sort the result set in descending order in PostgreSQL?',
      answers: [
        'ORDER BY column_name DESC',
        'SORT BY column_name DESC',
        'ARRANGE BY column_name DESC',
        'ORDER column_name DESC',
        'ORGANIZE BY column_name DESC',
      ],
    },
    {
      id: 'q21',
      text: 'How do you limit the number of rows returned by a query in PostgreSQL?',
      answers: [
        'LIMIT number',
        'RESTRICT number',
        'CAP number',
        'SET LIMIT number',
        'ROW LIMIT number',
      ],
    },
    {
      id: 'q22',
      text: 'How do you combine the results of two queries in PostgreSQL?',
      answers: [
        'UNION',
        'JOIN',
        'MERGE',
        'COMBINE',
        'CONCAT',
      ],
    },
    {
      id: 'q23',
      text: 'What is the difference between UNION and UNION ALL?',
      answers: [
        'UNION removes duplicate rows, UNION ALL includes duplicate rows',
        'UNION includes duplicate rows, UNION ALL removes duplicate rows',
        'UNION is faster, UNION ALL is slower',
        'UNION is used for numeric data, UNION ALL is used for text data',
        'UNION can only combine two queries, UNION ALL can combine multiple queries',
      ],
    },
    {
      id: 'q24',
      text: 'How do you group rows that have the same values in PostgreSQL?',
      answers: [
        'GROUP BY column_name',
        'ORDER BY column_name',
        'SORT BY column_name',
        'ARRANGE BY column_name',
        'CLUSTER BY column_name',
      ],
    },
    {
      id: 'q25',
      text: 'How do you filter groups in PostgreSQL?',
      answers: [
        'HAVING condition',
        'WHERE condition',
        'FILTER condition',
        'GROUP BY condition',
        'LIMIT condition',
      ],
    },
    {
      id: 'q26',
      text: 'Which SQL function is used to calculate the total number of rows in a result set?',
      answers: [
        'COUNT()',
        'SUM()',
        'TOTAL()',
        'NUMBER()',
        'ADD()',
      ],
    },
]