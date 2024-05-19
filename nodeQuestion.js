export default [
    {
      id: 'q1',
      text: 'Which of the following best describes Node.js?',
      answers: [
        'A runtime environment that allows you to run JavaScript on the server side.',
        'A framework for building mobile applications.',
        'A front-end library for creating user interfaces.',
        'A database management system for storing data.',
      ],
    },
    {
      id: 'q2',
      text: 'What is the purpose of npm (Node Package Manager)?',
      answers: [
        'To manage dependencies and packages in Node.js applications.',
        'To compile JavaScript code into machine code.',
        'To manage user authentication in Node.js applications.',
        'To handle database connections in Node.js applications.',
      ],
    },
    {
      id: 'q3',
      text: 'What does the "event-driven" architecture in Node.js imply?',
      answers: [
        'The flow of the program is determined by events such as user actions or messages from other programs.',
        'It uses a relational database to store events.',
        'Events are managed using a specific design pattern called MVC.',
        'The application can only handle one event at a time.',
      ],
    },
    {
      id: 'q4',
      text: 'Which module in Node.js is used for handling file system operations?',
      answers: [
        'fs',
        'http',
        'path',
        'url',
      ],
    },
    {
      id: 'q5',
      text: 'What is the purpose of middleware in Express.js?',
      answers: [
        'To execute code during the request-response cycle.',
        'To connect to a database.',
        'To handle static files.',
        'To render HTML pages.',
      ],
    },
    {
      id: 'q6',
      text: 'How can you create a new Node.js project?',
      answers: [
        'By running "npm init" in the project directory.',
        'By creating an index.html file in the project directory.',
        'By installing Node.js globally.',
        'By setting up a virtual environment.',
      ],
    },
    {
      id: 'q7',
      text: 'Which statement about asynchronous programming in Node.js is true?',
      answers: [
        'Asynchronous programming allows multiple tasks to be handled concurrently.',
        'Asynchronous programming makes code execution slower.',
        'Node.js does not support asynchronous programming.',
        'Asynchronous programming is only used for file system operations.',
      ],
    },
    {
      id: 'q8',
      text: 'What is a common use case for the "buffer" module in Node.js?',
      answers: [
        'To handle binary data.',
        'To manage memory allocation.',
        'To create a web server.',
        'To store configuration settings.',
      ],
    },
    {
      id: 'q9',
      text: 'Which command is used to install a package globally using npm?',
      answers: [
        'npm install -g <package_name>',
        'npm install --save <package_name>',
        'npm install -global <package_name>',
        'npm install --global <package_name>',
      ],
    },
    {
      id: 'q10',
      text: 'How do you import a module in Node.js?',
      answers: [
        'Using the require() function.',
        'Using the import statement.',
        'Using the include() function.',
        'Using the fetch() function.',
      ],
    },
    {
      id: 'q11',
      text: 'What is the purpose of the package.json file in a Node.js project?',
      answers: [
        'To manage project dependencies and scripts.',
        'To define the project’s database schema.',
        'To specify the project’s HTML structure.',
        'To store user authentication details.',
      ],
    },
    {
      id: 'q12',
      text: 'Which of the following is true about the Node.js event loop?',
      answers: [
        'It allows Node.js to perform non-blocking I/O operations.',
        'It only works with HTTP requests.',
        'It is used to manage the application state.',
        'It blocks the main thread until an event is processed.',
      ],
    },
    {
      id: 'q13',
      text: 'What is the difference between readFile and readFileSync in Node.js?',
      answers: [
        'readFile is asynchronous and readFileSync is synchronous.',
        'readFile reads data from the network, while readFileSync reads data from the file system.',
        'readFile reads data as a string, while readFileSync reads data as a buffer.',
        'There is no difference; they are interchangeable.',
      ],
    },
    {
      id: 'q14',
      text: 'Which of the following is a core module in Node.js?',
      answers: [
        'http',
        'express',
        'mongoose',
        'sequelize',
      ],
    },
    {
      id: 'q15',
      text: 'How do you create a simple HTTP server in Node.js?',
      answers: [
        'Using the http.createServer() method.',
        'Using the express() function.',
        'Using the net.createServer() method.',
        'Using the socket.io() function.',
      ],
    },
    {
      id: 'q16',
      text: 'What does the term "non-blocking I/O" mean in the context of Node.js?',
      answers: [
        'Operations do not block the execution of the program.',
        'Only one I/O operation can be performed at a time.',
        'I/O operations are performed sequentially.',
        'I/O operations block the main thread.',
      ],
    },
    {
      id: 'q17',
      text: 'Which method is used to parse a JSON string into a JavaScript object?',
      answers: [
        'JSON.parse()',
        'JSON.stringify()',
        'JSON.toObject()',
        'JSON.convert()',
      ],
    },
    {
      id: 'q18',
      text: 'What is Express.js?',
      answers: [
        'A web application framework for Node.js.',
        'A database management system for Node.js.',
        'A command-line tool for managing Node.js projects.',
        'A front-end library for building user interfaces.',
      ],
    },
    {
      id: 'q19',
      text: 'How do you handle errors in a Node.js application?',
      answers: [
        'By using try-catch blocks and error handling middleware.',
        'By ignoring the errors.',
        'By restarting the application.',
        'By logging errors to the console only.',
      ],
    },
    {
      id: 'q20',
      text: 'What is the purpose of the "path" module in Node.js?',
      answers: [
        'To handle and transform file paths.',
        'To create and manage HTTP routes.',
        'To interact with the operating system.',
        'To handle URL parsing and formatting.',
      ],
    },
    {
      id: 'q21',
      text: 'Which of the following is a way to make an HTTP request in Node.js?',
      answers: [
        'Using the http.request() method.',
        'Using the fs.readFile() method.',
        'Using the os.request() method.',
        'Using the url.parse() method.',
      ],
    },
    {
      id: 'q22',
      text: 'What is the purpose of the "cluster" module in Node.js?',
      answers: [
        'To create child processes that share the same server port.',
        'To manage database connections.',
        'To handle routing in Express.js applications.',
        'To parse and format URLs.',
      ],
    },
    {
      id: 'q23',
      text: 'Which of the following commands is used to start a Node.js application?',
      answers: [
        'node <file_name>',
        'npm start',
        'node start',
        'npm run <file_name>',
      ],
    },
    {
      id: 'q24',
      text: 'What is the purpose of the "require" function in Node.js?',
      answers: [
        'To import modules into a Node.js file.',
        'To export modules from a Node.js file.',
        'To manage dependencies in a Node.js project.',
        'To handle HTTP requests in a Node.js application.',
      ],
    },
    {
      id: 'q25',
      text: 'How do you define an environment variable in a Node.js application?',
      answers: [
        'By using process.env.<variable_name>',
        'By using global.<variable_name>',
        'By using env.<variable_name>',
        'By using config.<variable_name>',
      ],
    },
    {
      id: 'q26',
      text: 'Which method is used to send a response to the client in Express.js?',
      answers: [
        'res.send()',
        'req.send()',
        'res.receive()',
        'req.receive()',
      ],
    },
    {
      id: 'q27',
      text: 'What is the purpose of the "net" module in Node.js?',
      answers: [
        'To create TCP servers and clients.',
        'To manage HTTP requests and responses.',
        'To handle file system operations.',
        'To interact with the operating system.',
      ],
    },
    {
      id: 'q28',
      text: 'How do you install a specific version of a package using npm?',
      answers: [
        'npm install <package_name>@<version>',
        'npm install <package_name> --version=<version>',
        'npm install <package_name> -v <version>',
        'npm install <package_name> -g <version>',
      ],
    },
    {
      id: 'q29',
      text: 'Which of the following is a valid way to export a module in Node.js?',
      answers: [
        'module.exports = myModule;',
        'exports: myModule;',
        'export default myModule;',
        'module.export = myModule;',
      ],
    },
    {
      id: 'q30',
      text: 'What is the purpose of the "util" module in Node.js?',
      answers: [
        'To provide utility functions for debugging and inspection.',
        'To handle HTTP requests and responses.',
        'To manage file system operations.',
        'To create and manage streams.',
      ],
    },
    {
      id: 'q31',
      text: 'How do you make a function asynchronous in Node.js?',
      answers: [
        'By using the async keyword.',
        'By using the await keyword.',
        'By using the defer keyword.',
        'By using the sync keyword.',
      ],
    },
    {
      id: 'q32',
      text: 'What is the purpose of the "crypto" module in Node.js?',
      answers: [
        'To provide cryptographic functionality.',
        'To handle HTTP requests and responses.',
        'To manage file system operations.',
        'To create and manage streams.',
      ],
    },
    {
      id: 'q33',
      text: 'Which of the following is a built-in event emitter in Node.js?',
      answers: [
        'EventEmitter',
        'EventDispatcher',
        'EventNotifier',
        'EventHandler',
      ],
    },
    {
      id: 'q34',
      text: 'How do you create a new instance of an EventEmitter in Node.js?',
      answers: [
        'const emitter = new EventEmitter();',
        'const emitter = create EventEmitter();',
        'const emitter = EventEmitter.create();',
        'const emitter = new EventDispatcher();',
      ],
    },
    {
      id: 'q35',
      text: 'What is the purpose of the "stream" module in Node.js?',
      answers: [
        'To handle streaming data.',
        'To manage HTTP requests and responses.',
        'To handle file system operations.',
        'To create and manage events.',
      ],
    },
    {
      id: 'q36',
      text: 'Which of the following methods is used to read data from a readable stream?',
      answers: [
        'stream.read()',
        'stream.get()',
        'stream.receive()',
        'stream.fetch()',
      ],
    },
    {
      id: 'q37',
      text: 'What is the purpose of the "os" module in Node.js?',
      answers: [
        'To provide operating system-related utility methods and properties.',
        'To handle HTTP requests and responses.',
        'To manage file system operations.',
        'To create and manage streams.',
      ],
    },
    {
      id: 'q38',
      text: 'How do you handle exceptions in a Node.js application?',
      answers: [
        'By using try-catch blocks.',
        'By using async-await.',
        'By using promises.',
        'By using callbacks.',
      ],
    },
    {
      id: 'q39',
      text: 'What is the purpose of the "http" module in Node.js?',
      answers: [
        'To create HTTP servers and clients.',
        'To manage file system operations.',
        'To interact with the operating system.',
        'To handle streaming data.',
      ],
    },
    {
      id: 'q40',
      text: 'Which method is used to listen for incoming connections on an HTTP server?',
      answers: [
        'server.listen()',
        'server.connect()',
        'server.receive()',
        'server.on()',
      ],
    },
    {
      id: 'q41',
      text: 'What is the purpose of the "url" module in Node.js?',
      answers: [
        'To parse and format URLs.',
        'To create HTTP servers and clients.',
        'To manage file system operations.',
        'To handle streaming data.',
      ],
    },
    {
      id: 'q42',
      text: 'How do you convert a callback-based function to a promise-based one in Node.js?',
      answers: [
        'By using the util.promisify() method.',
        'By using the async keyword.',
        'By using the await keyword.',
        'By using the defer keyword.',
      ],
    },
    {
      id: 'q43',
      text: 'Which of the following is a valid way to handle asynchronous operations in Node.js?',
      answers: [
        'Using promises.',
        'Using loops.',
        'Using conditions.',
        'Using arrays.',
      ],
    },
    {
      id: 'q44',
      text: 'What is the purpose of the "child_process" module in Node.js?',
      answers: [
        'To spawn new processes.',
        'To manage file system operations.',
        'To handle HTTP requests and responses.',
        'To create and manage events.',
      ],
    },
    {
      id: 'q45',
      text: 'How do you install a package as a dev dependency using npm?',
      answers: [
        'npm install <package_name> --save-dev',
        'npm install <package_name> -g',
        'npm install <package_name> --global',
        'npm install <package_name> --save',
      ],
    },
    {
      id: 'q46',
      text: 'Which of the following is a valid way to create a route in Express.js?',
      answers: [
        'app.get(\'/route\', callback);',
        'app.route(\'/route\', callback);',
        'app.add(\'/route\', callback);',
        'app.create(\'/route\', callback);',
      ],
    },
    {
      id: 'q47',
      text: 'What is the purpose of the "zlib" module in Node.js?',
      answers: [
        'To provide compression and decompression functionalities.',
        'To handle HTTP requests and responses.',
        'To manage file system operations.',
        'To create and manage streams.',
      ],
    },
    {
      id: 'q48',
      text: 'Which of the following is a valid way to create a middleware in Express.js?',
      answers: [
        'app.use((req, res, next) => { /* middleware code */ });',
        'app.create((req, res, next) => { /* middleware code */ });',
        'app.route((req, res, next) => { /* middleware code */ });',
        'app.get((req, res, next) => { /* middleware code */ });',
      ],
    },
    {
      id: 'q49',
      text: 'What is the purpose of the "dns" module in Node.js?',
      answers: [
        'To perform DNS resolution.',
        'To handle HTTP requests and responses.',
        'To manage file system operations.',
        'To create and manage events.',
      ],
    },
    {
      id: 'q50',
      text: 'Which of the following methods is used to write data to a writable stream?',
      answers: [
        'stream.write()',
        'stream.send()',
        'stream.put()',
        'stream.post()',
      ],
    },
    {
      id: 'q51',
      text: 'How do you run a script defined in package.json?',
      answers: [
        'npm run <script_name>',
        'npm start <script_name>',
        'npm execute <script_name>',
        'npm perform <script_name>',
      ],
    },
    {
      id: 'q52',
      text: 'What is the purpose of the "vm" module in Node.js?',
      answers: [
        'To compile and run code within V8 virtual machine contexts.',
        'To handle HTTP requests and responses.',
        'To manage file system operations.',
        'To create and manage streams.',
      ],
    },
    {
      id: 'q53',
      text: 'Which of the following is a way to handle uncaught exceptions in Node.js?',
      answers: [
        'process.on(\'uncaughtException\', callback);',
        'app.on(\'uncaughtException\', callback);',
        'server.on(\'uncaughtException\', callback);',
        'event.on(\'uncaughtException\', callback);',
      ],
    },
    {
      id: 'q54',
      text: 'What is the purpose of the "timers" module in Node.js?',
      answers: [
        'To handle scheduling of functions to be called in the future.',
        'To manage file system operations.',
        'To handle HTTP requests and responses.',
        'To create and manage events.',
      ],
    },
    {
      id: 'q55',
      text: 'Which method is used to schedule a function to be called after a specified delay?',
      answers: [
        'setTimeout()',
        'setInterval()',
        'setImmediate()',
        'setTimer()',
      ],
    },
    {
      id: 'q56',
      text: 'What is the purpose of the "inspector" module in Node.js?',
      answers: [
        'To provide a debugging interface for Node.js applications.',
        'To manage file system operations.',
        'To handle HTTP requests and responses.',
        'To create and manage streams.',
      ],
    },
    {
      id: 'q57',
      text: 'Which of the following is a way to handle rejected promises in Node.js?',
      answers: [
        'Using .catch() method.',
        'Using .then() method.',
        'Using .finally() method.',
        'Using .resolve() method.',
      ],
    },
    {
      id: 'q58',
      text: 'What is the purpose of the "repl" module in Node.js?',
      answers: [
        'To provide a Read-Eval-Print Loop environment.',
        'To handle HTTP requests and responses.',
        'To manage file system operations.',
        'To create and manage events.',
      ],
    },
    {
      id: 'q59',
      text: 'Which of the following is a valid way to create an HTTPS server in Node.js?',
      answers: [
        'https.createServer(options, callback);',
        'https.create(options, callback);',
        'https.server(options, callback);',
        'https.get(options, callback);',
      ],
    },
    {
      id: 'q60',
      text: 'How do you specify the entry point of a Node.js application in the package.json file?',
      answers: [
        'By setting the "main" property.',
        'By setting the "start" property.',
        'By setting the "index" property.',
        'By setting the "entry" property.',
      ],
    },
  ];
  