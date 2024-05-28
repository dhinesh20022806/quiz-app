export default [
    {
      id: 'q1',
      text: 'Which of the following best describes Python?',
      answers: [
        'A high-level, interpreted programming language known for its readability and simplicity.',
        'A low-level, compiled programming language used for system programming.',
        'A markup language used for creating web pages.',
        'A database management system for storing and retrieving data.',
        'A framework for developing web applications.',
      ],
    },
    {
      id: 'q2',
      text: 'What is PEP 8?',
      answers: [
        'A style guide for writing clean and readable Python code.',
        'A package manager for Python.',
        'A version control system for Python projects.',
        'A built-in module for handling exceptions.',
        'A tool for optimizing Python code.',
      ],
    },
    {
      id: 'q3',
      text: 'What is a virtual environment in Python?',
      answers: [
        'A tool to create isolated Python environments.',
        'A framework for building web applications.',
        'A database for storing Python objects.',
        'A library for scientific computing.',
        'A module for interacting with the operating system.',
      ],
    },
    {
      id: 'q4',
      text: 'Which of the following is a mutable data type in Python?',
      answers: [
        'List',
        'Tuple',
        'String',
        'Integer',
        'Float',
      ],
    },
    {
      id: 'q5',
      text: 'What is the purpose of the "self" keyword in Python class methods?',
      answers: [
        'It refers to the instance of the class.',
        'It is used to define class-level variables.',
        'It is a built-in function for object introspection.',
        'It is a placeholder for lambda functions.',
        'It is used to refer to global variables.',
      ],
    },
    {
      id: 'q6',
      text: 'How do you create a virtual environment in Python?',
      answers: [
        'By using the "venv" module: python -m venv <environment_name>',
        'By using the "virtualenv" module: virtualenv <environment_name>',
        'By using the "pip" module: pip create <environment_name>',
        'By using the "conda" module: conda create --name <environment_name>',
        'By using the "env" module: python -m env <environment_name>',
      ],
    },
    {
      id: 'q7',
      text: 'What is the difference between "==" and "is" in Python?',
      answers: [
        '"==" checks for value equality, while "is" checks for identity.',
        '"==" checks for identity, while "is" checks for value equality.',
        'There is no difference between them.',
        '"==" is used for numerical comparisons, while "is" is used for string comparisons.',
        '"==" is used for comparing objects, while "is" is used for comparing types.',
      ],
    },
    {
      id: 'q8',
      text: 'Which of the following methods is used to add an element to the end of a list in Python?',
      answers: [
        'append()',
        'insert()',
        'add()',
        'extend()',
        'push()',
      ],
    },
    {
      id: 'q9',
      text: 'What is a lambda function in Python?',
      answers: [
        'An anonymous function defined with the lambda keyword.',
        'A function that returns another function.',
        'A built-in function for mapping values.',
        'A function used to handle exceptions.',
        'A recursive function.',
      ],
    },
    {
      id: 'q10',
      text: 'How do you handle exceptions in Python?',
      answers: [
        'Using try-except blocks.',
        'Using if-else statements.',
        'Using switch-case statements.',
        'Using error handling functions.',
        'Using assertion statements.',
      ],
    },
    {
      id: 'q11',
      text: 'What is the purpose of the "pass" statement in Python?',
      answers: [
        'It is a null statement used as a placeholder.',
        'It is used to exit a loop prematurely.',
        'It is used to handle exceptions.',
        'It is used to define a function.',
        'It is used to skip an iteration in a loop.',
      ],
    },
    {
      id: 'q12',
      text: 'Which of the following is a built-in data type in Python?',
      answers: [
        'Dictionary',
        'Class',
        'Module',
        'Package',
        'Function',
      ],
    },
    {
      id: 'q13',
      text: 'How do you install a package using pip?',
      answers: [
        'pip install <package_name>',
        'pip add <package_name>',
        'pip get <package_name>',
        'pip download <package_name>',
        'pip upgrade <package_name>',
      ],
    },
    {
      id: 'q14',
      text: 'What is the output of the following code: print(type([]))?',
      answers: [
        '<class \'list\'>',
        '<class \'tuple\'>',
        '<class \'set\'>',
        '<class \'dict\'>',
        '<class \'array\'>',
      ],
    },
    {
      id: 'q15',
      text: 'Which keyword is used to define a function in Python?',
      answers: [
        'def',
        'func',
        'function',
        'define',
        'lambda',
      ],
    },
    {
      id: 'q16',
      text: 'How do you create a dictionary in Python?',
      answers: [
        'Using curly braces {}.',
        'Using square brackets [].',
        'Using parentheses ().',
        'Using angle brackets <>.',
        'Using the dict() function.',
      ],
    },
    {
      id: 'q17',
      text: 'What is the purpose of the "with" statement in Python?',
      answers: [
        'To ensure proper acquisition and release of resources.',
        'To define a function.',
        'To handle exceptions.',
        'To create a loop.',
        'To declare a variable.',
      ],
    },
    {
      id: 'q18',
      text: 'Which of the following is a correct way to create a set in Python?',
      answers: [
        'Using curly braces {} or the set() function.',
        'Using square brackets [].',
        'Using parentheses ().',
        'Using angle brackets <>.',
        'Using the setliteral() function.',
      ],
    },
    {
      id: 'q19',
      text: 'How do you create a new class in Python?',
      answers: [
        'Using the "class" keyword.',
        'Using the "def" keyword.',
        'Using the "function" keyword.',
        'Using the "new" keyword.',
        'Using the "classdef" keyword.',
      ],
    },
    {
      id: 'q20',
      text: 'What is the purpose of the "__init__" method in a Python class?',
      answers: [
        'To initialize the instance variables of a class.',
        'To define a class method.',
        'To create a new instance of a class.',
        'To delete an instance of a class.',
        'To create a static method.',
      ],
    },
    {
      id: 'q21',
      text: 'Which of the following is used to create an infinite loop in Python?',
      answers: [
        'while True:',
        'while 1:',
        'for i in range(1, 10**10):',
        'for i in itertools.count():',
        'while False:',
      ],
    },
    {
      id: 'q22',
      text: 'What is the purpose of the "map" function in Python?',
      answers: [
        'To apply a function to all items in an iterable.',
        'To filter elements from an iterable.',
        'To sort elements in an iterable.',
        'To reduce elements in an iterable to a single value.',
        'To combine elements from multiple iterables.',
      ],
    },
    {
      id: 'q23',
      text: 'Which method is used to remove an item from a list by its value in Python?',
      answers: [
        'remove()',
        'pop()',
        'del()',
        'discard()',
        'clear()',
      ],
    },
    {
      id: 'q24',
      text: 'What does the "break" statement do in a loop?',
      answers: [
        'Exits the loop immediately.',
        'Skips the current iteration and continues with the next one.',
        'Restarts the loop from the beginning.',
        'Exits the loop after completing the current iteration.',
        'Pauses the loop and waits for user input.',
      ],
    },
    {
      id: 'q25',
      text: 'Which of the following is true about Python decorators?',
      answers: [
        'They are used to modify the behavior of a function or class.',
        'They are used to define new functions.',
        'They are used to import modules.',
        'They are used to handle exceptions.',
        'They are used to create loops.',
      ],
    },
    {
      id: 'q26',
      text: 'How do you read the contents of a file in Python?',
      answers: [
        'Using the open() function.',
        'Using the readfile() function.',
        'Using the file() function.',
        'Using the openfile() function.',
        'Using the load() function',
      ]
    }
]
  