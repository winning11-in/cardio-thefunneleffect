export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  description?: string;
  category: string;
  readTime: string;
  date: string;
  publishDate?: string;
  image: string;
  author: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "blog-001",
    slug: "python-fundamentals-variables-and-data-types",
    title: "Python Fundamentals: Variables and Data Types",
    excerpt: "Start your Python journey with this comprehensive guide to variables and data types. Learn the building blocks of Python programming with practical examples.",
    description: "Start your Python journey with this comprehensive guide to variables and data types. Learn the building blocks of Python programming with practical examples.",
    content: `
      <p>Python is one of the most beginner-friendly programming languages, and understanding variables and data types is your first step to mastering it.</p>
      
      <h2>What are Variables?</h2>
      <p>Variables are containers that store data values. In Python, you don't need to declare variable types explicitly.</p>
      
      <pre><code># Creating variables
name = "Alice"
age = 25
height = 5.6
is_student = True

print(name)    # Output: Alice
print(age)     # Output: 25</code></pre>
      
      <h2>Python Data Types</h2>
      
      <h3>1. Numbers</h3>
      <p>Python has three numeric types: int, float, and complex.</p>
      
      <pre><code># Integers
age = 30
count = 100

# Floats
price = 19.99
temperature = -5.5

# Complex numbers
complex_num = 3 + 4j</code></pre>
      
      <h3>2. Strings</h3>
      <p>Strings are sequences of characters enclosed in quotes.</p>
      
      <pre><code># Different ways to create strings
first_name = "John"
last_name = 'Doe'
message = """This is a
multi-line string"""

# String concatenation
full_name = first_name + " " + last_name
print(full_name)  # Output: John Doe</code></pre>
      
      <h3>3. Booleans</h3>
      <p>Boolean values are either True or False.</p>
      
      <pre><code>is_active = True
is_deleted = False

# Boolean operations
result = is_active and not is_deleted
print(result)  # Output: True</code></pre>
      
      <h3>4. Lists</h3>
      <p>Lists are ordered collections that can hold multiple items.</p>
      
      <pre><code># Creating lists
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = ["hello", 42, True, 3.14]

# Accessing list items
print(fruits[0])     # Output: apple
print(fruits[-1])    # Output: orange (last item)</code></pre>
      
      <h3>5. Dictionaries</h3>
      <p>Dictionaries store data in key-value pairs.</p>
      
      <pre><code># Creating dictionaries
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

# Accessing dictionary values
print(person["name"])     # Output: Alice
print(person.get("age"))  # Output: 30</code></pre>
      
      <h2>Type Checking</h2>
      <p>Use the type() function to check variable types:</p>
      
      <pre><code>x = 42
y = "Hello"
z = [1, 2, 3]

print(type(x))  # Output: &lt;class 'int'&gt;
print(type(y))  # Output: &lt;class 'str'&gt;
print(type(z))  # Output: &lt;class 'list'&gt;</code></pre>
      
      <h2>Type Conversion</h2>
      <p>Convert between different data types when needed:</p>
      
      <pre><code># String to number
age_str = "25"
age_int = int(age_str)
age_float = float(age_str)

# Number to string
number = 42
number_str = str(number)

print(f"Age: {age_int}, Type: {type(age_int)}")</code></pre>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Use descriptive variable names</li>
        <li>Follow Python naming conventions (snake_case)</li>
        <li>Initialize variables before using them</li>
        <li>Use appropriate data types for your data</li>
        <li>Comment your code for clarity</li>
      </ul>
      
      <p>Understanding variables and data types is fundamental to Python programming. Practice these concepts and you'll have a solid foundation for more advanced topics!</p>
    `,
    category: "Python",
    readTime: "6 min read",
    date: "Dec 15, 2024",
    publishDate: "2024-12-15",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Funnel Effect"
  },
  {
    id: "blog-003",
    slug: "react-hooks-complete-guide-for-beginners",
    title: "React Hooks Complete Guide for Beginners",
    excerpt: "Master React Hooks with this comprehensive guide. Learn useState, useEffect, and custom hooks with practical examples and best practices.",
    description: "Master React Hooks with this comprehensive guide. Learn useState, useEffect, and custom hooks with practical examples and best practices.",
    content: `
      <p>React Hooks revolutionized how we write components in React. This guide will teach you everything you need to know about React Hooks with practical examples.</p>
      
      <h2>What are React Hooks?</h2>
      <p>React Hooks are functions that let you use state and lifecycle features in functional components. They were introduced in React 16.8.</p>
      
      <h3>Why Use Hooks?</h3>
      <ul>
        <li>Simpler component logic</li>
        <li>Better code reusability</li>
        <li>Easier testing</li>
        <li>Smaller bundle size</li>
      </ul>
      
      <h2>useState Hook</h2>
      <p>The useState hook lets you add state to functional components:</p>
      
      <pre><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        Increment
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>useEffect Hook</h2>
      <p>useEffect lets you perform side effects in functional components:</p>
      
      <pre><code>import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() =&gt; {
    fetch(\`/api/users/125\`)
      .then(res =&gt; res.json())
      .then(userData =&gt; setUser(userData));
  }, [userId]);

  if (!user) return &lt;div&gt;Loading...&lt;/div&gt;;
  
  return &lt;div&gt;Hello, {user.name}!&lt;/div&gt;;
}</code></pre>
      
      <h2>Custom Hooks</h2>
      <p>Create your own hooks to share logic between components:</p>
      
      <pre><code>function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() =&gt; {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() =&gt; {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}</code></pre>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Always use hooks at the top level</li>
        <li>Use multiple useState calls for unrelated state</li>
        <li>Optimize useEffect with dependency arrays</li>
        <li>Extract logic into custom hooks when reusable</li>
      </ul>
      
      <p>React Hooks make functional components powerful and flexible. Start using them in your next React project!</p>
    `,
    category: "React",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    publishDate: "2024-12-15",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Funnel Effect"
  },
  {
    id: "blog-004",
    slug: "5-easy-ways-to-make-your-iphone-faster",
    title: "5 Easy Ways To Make Your iPhone Faster",
    excerpt: "Is your iPhone running slow? Don't worry - you don't need a new phone. These simple optimization techniques will breathe new life into your device and improve performance.",
    description: "Is your iPhone running slow? Don't worry - you don't need a new phone. These simple optimization techniques will breathe new life into your device and improve performance.",
    content: `
      <p>Is your iPhone running slow? Don't worry - you don't need a new phone. These simple optimization techniques will breathe new life into your device and improve performance.</p>
      
      <h2>1. Clean Up Your Storage</h2>
      <p>A full iPhone is a slow iPhone. When your storage is nearly full, your device struggles to perform basic functions.</p>
      
      <h3>How to Check Storage:</h3>
      <p>Go to Settings > General > iPhone Storage to see what's taking up space.</p>
      
      <h3>Quick Cleanup Tips:</h3>
      <ul>
        <li>Delete unused apps</li>
        <li>Clear photos and videos to cloud storage</li>
        <li>Remove downloaded music and podcasts</li>
        <li>Delete old message threads with attachments</li>
      </ul>
      
      <h2>2. Update Your iOS</h2>
      <p>Apple regularly releases updates that improve performance and fix bugs. Always keep your iPhone updated to the latest iOS version.</p>
      
      <h2>3. Restart Your iPhone Regularly</h2>
      <p>A simple restart clears temporary files and refreshes your phone's memory. Aim to restart your iPhone at least once a week.</p>
      
      <h2>4. Reduce Background App Refresh</h2>
      <p>Many apps refresh content in the background, which can slow down your phone and drain battery.</p>
      
      <h3>How to Adjust:</h3>
      <p>Go to Settings > General > Background App Refresh and turn off unnecessary apps.</p>
      
      <h2>5. Clear Safari Cache</h2>
      <p>If you use Safari frequently, clearing its cache can improve browsing speed and free up storage.</p>
      
      <h3>Steps:</h3>
      <p>Go to Settings > Safari > Clear History and Website Data.</p>
      
      <h2>Bonus Tips</h2>
      <ul>
        <li>Turn off visual effects in Accessibility settings</li>
        <li>Disable location services for apps that don't need it</li>
        <li>Remove widgets you don't use</li>
        <li>Turn off Siri suggestions</li>
      </ul>
      
      <p>These simple steps can significantly improve your iPhone's performance without spending a penny. Try them today and enjoy a faster, more responsive device!</p>
    `,
    category: "Technology",
    readTime: "7 min read",
    date: "Dec 8, 2023",
    publishDate: "2023-12-08",
    image: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Funnel Effect"
  },
  {
    id: "blog-005",
    slug: "javascript-es6-features-modern-development",
    title: "JavaScript ES6 Features for Modern Development",
    excerpt: "Master modern JavaScript with ES6 features. Learn arrow functions, destructuring, promises, and more essential features every developer should know.",
    description: "Master modern JavaScript with ES6 features. Learn arrow functions, destructuring, promises, and more essential features every developer should know.",
    content: `
      <p>JavaScript ES6 (ECMAScript 2015) introduced many powerful features that make code more readable, maintainable, and efficient. Let's explore the most important ones.</p>
      
      <h2>Arrow Functions</h2>
      <p>Arrow functions provide a shorter syntax for writing functions and lexically bind the 'this' value.</p>
      
      <pre><code>// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// With single parameter
const square = x => x * x;

// With block body
const greet = name => {
  const message = \`Hello, \${name}!\`;
  return message;
};</code></pre>
      
      <h2>Destructuring Assignment</h2>
      <p>Destructuring allows you to extract values from arrays or properties from objects into distinct variables.</p>
      
      <pre><code>// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [3, 4, 5]

// Object destructuring
const user = { name: 'John', age: 30, city: 'New York' };
const { name, age } = user;
console.log(name); // 'John'

// With default values
const { country = 'USA' } = user;
console.log(country); // 'USA'</code></pre>
      
      <h2>Template Literals</h2>
      <p>Template literals use backticks and allow embedded expressions with \${} syntax.</p>
      
      <pre><code>const name = 'Alice';
const age = 25;

// Traditional string concatenation
const message1 = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template literal
const message2 = \`Hello, my name is \${name} and I am \${age} years old.\`;

// Multi-line strings
const html = \`
  &lt;div&gt;
    &lt;h1&gt;\${name}&lt;/h1&gt;
    &lt;p&gt;Age: \${age}&lt;/p&gt;
  &lt;/div&gt;
\`;</code></pre>
      
      <h2>Let and Const</h2>
      <p>Block-scoped variable declarations that replace var in many cases.</p>
      
      <pre><code>// const for constants
const PI = 3.14159;

// let for variables that change
let count = 0;
count++;

// Block scoping
if (true) {
  let blockScoped = 'only available in this block';
  const alsoBlockScoped = 'same here';
}</code></pre>
      
      <h2>Default Parameters</h2>
      <p>Set default values for function parameters.</p>
      
      <pre><code>function greet(name = 'World', greeting = 'Hello') {
  return \`\${greeting}, \${name}!\`;
}

console.log(greet());           // 'Hello, World!'
console.log(greet('Alice'));    // 'Hello, Alice!'
console.log(greet('Bob', 'Hi')); // 'Hi, Bob!'</code></pre>
      
      <h2>Spread Operator</h2>
      <p>The spread operator (...) allows expanding iterables into individual elements.</p>
      
      <pre><code>// Array spreading
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Object spreading
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Function arguments
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6</code></pre>
      
      <h2>Promises</h2>
      <p>Promises provide a cleaner way to handle asynchronous operations.</p>
      
      <pre><code>// Creating a promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve('Data loaded successfully!');
      } else {
        reject('Failed to load data');
      }
    }, 1000);
  });
};

// Using promises
fetchData()
  .then(result => console.log(result))
  .catch(error => console.error(error));</code></pre>
      
      <h2>Classes</h2>
      <p>ES6 classes provide a cleaner syntax for creating objects and inheritance.</p>
      
      <pre><code>class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    console.log(\`\${this.name} barks\`);
  }
}

const dog = new Dog('Max', 'Golden Retriever');
dog.speak(); // 'Max barks'</code></pre>
      
      <p>These ES6 features make JavaScript more powerful and enjoyable to work with. Start incorporating them into your projects today!</p>
    `,
    category: "JavaScript",
    readTime: "10 min read",
    date: "Dec 10, 2024",
    publishDate: "2024-12-10",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Funnel Effect",
   },
  {
    id: "blog-006",
    slug: "building-rest-apis-with-nodejs-express",
    title: "Building REST APIs with Node.js and Express",
    excerpt: "Learn how to create robust REST APIs using Node.js and Express. This comprehensive guide covers routing, middleware, error handling, and best practices.",
    description: "Learn how to create robust REST APIs using Node.js and Express. This comprehensive guide covers routing, middleware, error handling, and best practices.",
    content: `
      <p>REST APIs are the backbone of modern web applications. Learn how to build robust, scalable APIs using Node.js and Express framework.</p>
      
      <h2>Setting Up Your Project</h2>
      <p>First, let's create a new Node.js project and install the necessary dependencies:</p>
      
      <pre><code>mkdir my-api
cd my-api
npm init -y
npm install express cors helmet morgan
npm install -D nodemon</code></pre>
      
      <h2>Basic Express Server</h2>
      <p>Create an app.js file with a basic Express server:</p>
      
      <pre><code>const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors());   // Enable CORS
app.use(morgan('combined')); // Logging
app.use(express.json()); // Parse JSON bodies

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our API!' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});</code></pre>
      
      <h2>Creating CRUD Routes</h2>
      <p>Let's build a simple users API with Create, Read, Update, Delete operations:</p>
      
      <pre><code>// In-memory data store (use a database in production)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

// POST create new user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});</code></pre>
      
      <h2>Error Handling Middleware</h2>
      <p>Add proper error handling to your API:</p>
      
      <pre><code>// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});</code></pre>
      
      <h2>Input Validation</h2>
      <p>Always validate user input to prevent security issues:</p>
      
      <pre><code>const validateUser = (req, res, next) => {
  const { name, email } = req.body;
  
  if (!name || typeof name !== 'string' || name.length < 2) {
    return res.status(400).json({ error: 'Valid name is required' });
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }
  
  next();
};

// Use validation middleware
app.post('/api/users', validateUser, (req, res) => {
  // Create user logic here
});</code></pre>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Use environment variables for configuration</li>
        <li>Implement proper authentication and authorization</li>
        <li>Add rate limiting to prevent abuse</li>
        <li>Use a database instead of in-memory storage</li>
        <li>Add comprehensive error handling</li>
        <li>Write unit and integration tests</li>
        <li>Document your API with tools like Swagger</li>
      </ul>
      
      <p>This foundation will help you build robust REST APIs. As you grow, consider adding databases, authentication, caching, and more advanced features!</p>
    `,
    category: "Backend",
    readTime: "8 min read",
    date: "Dec 8, 2024",
    publishDate: "2024-12-08",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Funnel Effect"
  },
  {
    id: "blog-007",
    slug: "css-flexbox-complete-guide-layouts",
    title: "CSS Flexbox: Complete Guide to Modern Layouts",
    excerpt: "Master CSS Flexbox to create responsive, flexible layouts with ease. Learn all flexbox properties with practical examples and real-world use cases.",
    description: "Master CSS Flexbox to create responsive, flexible layouts with ease. Learn all flexbox properties with practical examples and real-world use cases.",
    content: `
      <p>CSS Flexbox revolutionizes how we create layouts. This flexible layout method makes it easy to design responsive, complex layouts with minimal code.</p>
      
      <h2>What is Flexbox?</h2>
      <p>Flexbox (Flexible Box Layout) is a CSS layout method that provides an efficient way to arrange, distribute, and align elements in a container.</p>
      
      <h2>Basic Flexbox Setup</h2>
      <p>To use flexbox, you need a flex container (parent) and flex items (children):</p>
      
      <pre><code>.container {
  display: flex; /* This creates a flex container */
}

.item {
  /* These become flex items automatically */
  background: #f0f0f0;
  padding: 20px;
  margin: 10px;
}</code></pre>
      
      <h2>Flex Container Properties</h2>
      
      <h3>flex-direction</h3>
      <p>Controls the direction of flex items:</p>
      
      <pre><code>.container {
  display: flex;
  flex-direction: row;         /* Default: left to right */
  flex-direction: row-reverse; /* Right to left */
  flex-direction: column;      /* Top to bottom */
  flex-direction: column-reverse; /* Bottom to top */
}</code></pre>
      
      <h3>justify-content</h3>
      <p>Aligns items along the main axis:</p>
      
      <pre><code>.container {
  display: flex;
  justify-content: flex-start;    /* Default: start of container */
  justify-content: flex-end;      /* End of container */
  justify-content: center;        /* Center of container */
  justify-content: space-between; /* Equal space between items */
  justify-content: space-around;  /* Equal space around items */
  justify-content: space-evenly;  /* Equal space everywhere */
}</code></pre>
      
      <h3>align-items</h3>
      <p>Aligns items along the cross axis:</p>
      
      <pre><code>.container {
  display: flex;
  align-items: stretch;     /* Default: stretch to fill container */
  align-items: flex-start;  /* Start of cross axis */
  align-items: flex-end;    /* End of cross axis */
  align-items: center;      /* Center of cross axis */
  align-items: baseline;    /* Align to text baseline */
}</code></pre>
      
      <h2>Flex Item Properties</h2>
      
      <h3>flex-grow</h3>
      <p>Controls how much a flex item should grow:</p>
      
      <pre><code>.item-1 {
  flex-grow: 1; /* Takes 1 part of available space */
}

.item-2 {
  flex-grow: 2; /* Takes 2 parts of available space */
}</code></pre>
      
      <h3>flex-shrink</h3>
      <p>Controls how much a flex item should shrink:</p>
      
      <pre><code>.item {
  flex-shrink: 1; /* Default: can shrink */
  flex-shrink: 0; /* Won't shrink */
}</code></pre>
      
      <h3>flex-basis</h3>
      <p>Sets the initial main size before free space is distributed:</p>
      
      <pre><code>.item {
  flex-basis: 200px; /* Initial width/height of 200px */
  flex-basis: 50%;   /* Initial size of 50% */
  flex-basis: auto;  /* Based on content */
}</code></pre>
      
      <h2>Practical Examples</h2>
      
      <h3>Centering Content</h3>
      <pre><code>.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

&lt;div class="center-container"&gt;
  &lt;div&gt;Perfectly centered!&lt;/div&gt;
&lt;/div&gt;</code></pre>
      
      <h3>Navigation Bar</h3>
      <pre><code>.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

&lt;nav class="navbar"&gt;
  &lt;div class="logo"&gt;Logo&lt;/div&gt;
  &lt;div class="nav-links"&gt;
    &lt;a href="#"&gt;Home&lt;/a&gt;
    &lt;a href="#"&gt;About&lt;/a&gt;
    &lt;a href="#"&gt;Contact&lt;/a&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>
      
      <h3>Card Layout</h3>
      <pre><code>.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px; /* Grow, shrink, basis */
  border: 1px solid #ddd;
  padding: 1rem;
}</code></pre>
      
      <h2>Common Flexbox Patterns</h2>
      
      <h3>Equal Height Columns</h3>
      <pre><code>.columns {
  display: flex;
}

.column {
  flex: 1; /* Equal width columns */
  padding: 1rem;
}</code></pre>
      
      <h3>Sticky Footer</h3>
      <pre><code>body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1; /* Takes remaining space */
}

footer {
  background: #333;
  color: white;
  padding: 1rem;
}</code></pre>
      
      <h2>Browser Support and Tips</h2>
      <ul>
        <li>Flexbox is well-supported in all modern browsers</li>
        <li>Use autoprefixer for older browser support</li>
        <li>Test layouts on different screen sizes</li>
        <li>Combine with CSS Grid for complex layouts</li>
        <li>Use gap property for consistent spacing</li>
      </ul>
      
      <p>Flexbox is essential for modern web development. Practice these concepts and you'll be creating flexible, responsive layouts in no time!</p>
    `,
    category: "CSS",
    readTime: "7 min read",
    date: "Dec 5, 2024",
    publishDate: "2024-12-05",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Funnel Effect"
  },
  {
    id: "blog-008",
    slug: "git-version-control-beginners-guide",
    title: "Git Version Control: A Beginner's Guide",
    excerpt: "Learn Git from scratch with this comprehensive guide. Master version control, branching, merging, and collaboration workflows that every developer needs to know.",
    description: "Learn Git from scratch with this comprehensive guide. Master version control, branching, merging, and collaboration workflows that every developer needs to know.",
    content: `
      <p>Git is the most popular version control system used by developers worldwide. Learn how to track changes, collaborate with others, and manage your code effectively.</p>
      
      <h2>What is Git?</h2>
      <p>Git is a distributed version control system that tracks changes in your code, allowing you to collaborate with others and maintain a history of your project.</p>
      
      <h2>Installation and Setup</h2>
      <p>First, install Git and configure your identity:</p>
      
      <pre><code># Configure your name and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Check your configuration
git config --list</code></pre>
      
      <h2>Basic Git Commands</h2>
      
      <h3>Initializing a Repository</h3>
      <pre><code># Create a new Git repository
git init

# Clone an existing repository
git clone https://github.com/user/repo.git</code></pre>
      
      <h3>Tracking Changes</h3>
      <pre><code># Check status of your files
git status

# Add files to staging area
git add filename.txt        # Add specific file
git add .                   # Add all files
git add *.js               # Add all .js files

# Commit changes
git commit -m "Add new feature"

# Add and commit in one step
git commit -am "Update existing files"</code></pre>
      
      <h3>Viewing History</h3>
      <pre><code># View commit history
git log
git log --oneline          # Condensed view
git log --graph            # Show branch structure

# View changes in files
git diff                   # Unstaged changes
git diff --staged          # Staged changes
git diff HEAD~1            # Compare with previous commit</code></pre>
      
      <h2>Branching and Merging</h2>
      
      <h3>Working with Branches</h3>
      <pre><code># List branches
git branch

# Create new branch
git branch feature-login

# Switch to branch
git checkout feature-login

# Create and switch in one command
git checkout -b feature-signup

# Delete branch
git branch -d feature-login</code></pre>
      
      <h3>Merging</h3>
      <pre><code># Switch to main branch
git checkout main

# Merge feature branch
git merge feature-login

# Delete merged branch
git branch -d feature-login</code></pre>
      
      <h2>Remote Repositories</h2>
      
      <h3>Working with Remotes</h3>
      <pre><code># Add remote repository
git remote add origin https://github.com/user/repo.git

# View remotes
git remote -v

# Push to remote
git push origin main

# Pull from remote
git pull origin main

# Fetch changes without merging
git fetch origin</code></pre>
      
      <h2>Common Workflows</h2>
      
      <h3>Feature Branch Workflow</h3>
      <pre><code># 1. Create and switch to feature branch
git checkout -b feature-new-functionality

# 2. Make changes and commit
git add .
git commit -m "Implement new functionality"

# 3. Push feature branch
git push origin feature-new-functionality

# 4. Create pull request (on GitHub/GitLab)
# 5. After review, merge and delete branch
git checkout main
git pull origin main
git branch -d feature-new-functionality</code></pre>
      
      <h2>Undoing Changes</h2>
      
      <h3>Different Ways to Undo</h3>
      <pre><code># Undo changes in working directory
git checkout -- filename.txt

# Unstage files
git reset filename.txt

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert a commit (safe for shared repos)
git revert abc123def</code></pre>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Write clear, descriptive commit messages</li>
        <li>Commit small, logical changes frequently</li>
        <li>Use branching for features and experiments</li>
        <li>Pull before pushing to avoid conflicts</li>
        <li>Use .gitignore to exclude unnecessary files</li>
        <li>Review changes before committing</li>
        <li>Keep your main branch stable</li>
      </ul>
      
      <h2>Git Ignore</h2>
      <p>Create a .gitignore file to exclude files you don't want to track:</p>
      
      <pre><code># Dependencies
node_modules/

# Build outputs
dist/
build/

# Environment variables
.env

# IDE files
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db</code></pre>
      
      <p>Git is essential for modern development. Practice these commands and workflows to become confident with version control!</p>
    `,
    category: "Git",
    readTime: "9 min read",
    date: "Dec 3, 2024",
    publishDate: "2024-12-03",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Funnel Effect"
  },
  {
    id: "blog-009",
    slug: "html5-semantic-elements-web-accessibility",
    title: "HTML5 Semantic Elements for Better Web Accessibility",
    excerpt: "Learn how to use HTML5 semantic elements to create more accessible and SEO-friendly websites. Understand the importance of proper markup structure.",
    description: "Learn how to use HTML5 semantic elements to create more accessible and SEO-friendly websites. Understand the importance of proper markup structure.",
    content: `
      <p>HTML5 semantic elements provide meaning to your webpage structure, improving accessibility, SEO, and code maintainability. Learn how to use them effectively.</p>
      
      <h2>What are Semantic Elements?</h2>
      <p>Semantic elements clearly describe their meaning to both browsers and developers. Instead of using generic div elements, semantic elements tell us what the content represents.</p>
      
      <h2>Main Semantic Elements</h2>
      
      <h3>&lt;header&gt;</h3>
      <p>Represents introductory content or navigation aids:</p>
      
      <pre><code>&lt;header&gt;
  &lt;h1&gt;My Website&lt;/h1&gt;
  &lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;</code></pre>
      
      <h3>&lt;nav&gt;</h3>
      <p>Defines navigation links:</p>
      
      <pre><code>&lt;nav&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="/products"&gt;Products&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="/services"&gt;Services&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="/support"&gt;Support&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
      
      <h3>&lt;main&gt;</h3>
      <p>Specifies the main content of the document:</p>
      
      <pre><code>&lt;main&gt;
  &lt;h1&gt;Welcome to Our Blog&lt;/h1&gt;
  &lt;p&gt;Here you'll find the latest articles about web development.&lt;/p&gt;
  
  &lt;article&gt;
    &lt;h2&gt;How to Use Semantic HTML&lt;/h2&gt;
    &lt;p&gt;Content of the article goes here...&lt;/p&gt;
  &lt;/article&gt;
&lt;/main&gt;</code></pre>
      
      <h3>&lt;article&gt;</h3>
      <p>Represents independent, self-contained content:</p>
      
      <pre><code>&lt;article&gt;
  &lt;header&gt;
    &lt;h2&gt;Understanding CSS Grid&lt;/h2&gt;
    &lt;time datetime="2024-12-01"&gt;December 1, 2024&lt;/time&gt;
  &lt;/header&gt;
  
  &lt;p&gt;CSS Grid is a powerful layout system...&lt;/p&gt;
  
  &lt;footer&gt;
    &lt;p&gt;Tags: CSS, Layout, Grid&lt;/p&gt;
  &lt;/footer&gt;
&lt;/article&gt;</code></pre>
      
      <h3>&lt;section&gt;</h3>
      <p>Groups related content together:</p>
      
      <pre><code>&lt;section&gt;
  &lt;h2&gt;Our Services&lt;/h2&gt;
  &lt;p&gt;We offer a variety of web development services:&lt;/p&gt;
  
  &lt;article&gt;
    &lt;h3&gt;Frontend Development&lt;/h3&gt;
    &lt;p&gt;Creating beautiful user interfaces...&lt;/p&gt;
  &lt;/article&gt;
  
  &lt;article&gt;
    &lt;h3&gt;Backend Development&lt;/h3&gt;
    &lt;p&gt;Building robust server applications...&lt;/p&gt;
  &lt;/article&gt;
&lt;/section&gt;</code></pre>
      
      <h3>&lt;aside&gt;</h3>
      <p>Contains content tangentially related to the main content:</p>
      
      <pre><code>&lt;aside&gt;
  &lt;h3&gt;Related Articles&lt;/h3&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#"&gt;Introduction to HTML5&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;CSS Best Practices&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;JavaScript Fundamentals&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/aside&gt;</code></pre>
      
      <h3>&lt;footer&gt;</h3>
      <p>Contains footer information for its nearest ancestor:</p>
      
      <pre><code>&lt;footer&gt;
  &lt;p&gt;&copy; 2024 My Website. All rights reserved.&lt;/p&gt;
  &lt;nav&gt;
    &lt;a href="/privacy"&gt;Privacy Policy&lt;/a&gt;
    &lt;a href="/terms"&gt;Terms of Service&lt;/a&gt;
  &lt;/nav&gt;
&lt;/footer&gt;</code></pre>
      
      <h2>Complete Page Structure</h2>
      <p>Here's how to structure a complete webpage using semantic elements:</p>
      
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My Blog&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;My Tech Blog&lt;/h1&gt;
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;main&gt;
    &lt;article&gt;
      &lt;header&gt;
        &lt;h2&gt;Learning React Hooks&lt;/h2&gt;
        &lt;time datetime="2024-12-01"&gt;December 1, 2024&lt;/time&gt;
      &lt;/header&gt;
      
      &lt;section&gt;
        &lt;h3&gt;Introduction&lt;/h3&gt;
        &lt;p&gt;React Hooks changed how we write components...&lt;/p&gt;
      &lt;/section&gt;
      
      &lt;section&gt;
        &lt;h3&gt;useState Hook&lt;/h3&gt;
        &lt;p&gt;The useState hook allows you to...&lt;/p&gt;
      &lt;/section&gt;
    &lt;/article&gt;
  &lt;/main&gt;

  &lt;aside&gt;
    &lt;h3&gt;Popular Posts&lt;/h3&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#"&gt;JavaScript ES6 Features&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;CSS Grid Tutorial&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/aside&gt;

  &lt;footer&gt;
    &lt;p&gt;&copy; 2024 My Tech Blog&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      
      <h2>Benefits of Semantic HTML</h2>
      
      <h3>Accessibility</h3>
      <ul>
        <li>Screen readers can navigate content more effectively</li>
        <li>Users can jump to specific sections</li>
        <li>Better keyboard navigation support</li>
      </ul>
      
      <h3>SEO Advantages</h3>
      <ul>
        <li>Search engines understand content structure</li>
        <li>Better content indexing</li>
        <li>Improved search result snippets</li>
      </ul>
      
      <h3>Maintainability</h3>
      <ul>
        <li>Code is more readable and self-documenting</li>
        <li>Easier for teams to understand structure</li>
        <li>Reduces reliance on CSS classes for structure</li>
      </ul>
      
      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Using semantic elements just for styling</li>
        <li>Multiple &lt;main&gt; elements on one page</li>
        <li>Nesting &lt;header&gt; or &lt;footer&gt; inside &lt;address&gt;</li>
        <li>Using &lt;section&gt; as a generic wrapper</li>
        <li>Forgetting to include headings in sections</li>
      </ul>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Always include a heading in &lt;section&gt; elements</li>
        <li>Use only one &lt;main&gt; element per page</li>
        <li>Include lang attribute on &lt;html&gt; element</li>
        <li>Use &lt;time&gt; element for dates and times</li>
        <li>Validate your HTML for proper structure</li>
      </ul>
      
      <p>Semantic HTML is the foundation of accessible, SEO-friendly websites. Start using these elements in your projects to create better web experiences!</p>
    `,
    category: "HTML",
    readTime: "6 min read",
    date: "Dec 1, 2024",
    publishDate: "2024-12-01",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Funnel Effect"
  },
  {
    id: "blog-010",
    slug: "typescript-basics-javascript-developers",
    title: "TypeScript Basics for JavaScript Developers",
    excerpt: "Transition from JavaScript to TypeScript with this comprehensive guide. Learn type annotations, interfaces, and how TypeScript improves code quality and developer experience.",
    description: "Transition from JavaScript to TypeScript with this comprehensive guide. Learn type annotations, interfaces, and how TypeScript improves code quality and developer experience.",
    content: `
      <p>TypeScript extends JavaScript by adding static type definitions, helping you catch errors early and improve code quality. Perfect for JavaScript developers ready to level up.</p>
      
      <h2>What is TypeScript?</h2>
      <p>TypeScript is a superset of JavaScript that adds optional static typing. It compiles to plain JavaScript and runs anywhere JavaScript runs.</p>
      
      <h2>Why Use TypeScript?</h2>
      <ul>
        <li>Catch errors at compile time instead of runtime</li>
        <li>Better IDE support with autocomplete and refactoring</li>
        <li>Improved code documentation and readability</li>
        <li>Easier maintenance of large codebases</li>
        <li>Enhanced team collaboration</li>
      </ul>
      
      <h2>Setting Up TypeScript</h2>
      <p>Install TypeScript and create your first project:</p>
      
      <pre><code># Install TypeScript globally
npm install -g typescript

# Create a new project
mkdir my-ts-project
cd my-ts-project
npm init -y

# Install TypeScript locally
npm install -D typescript @types/node

# Initialize TypeScript config
tsc --init</code></pre>
      
      <h2>Basic Type Annotations</h2>
      
      <h3>Primitive Types</h3>
      <pre><code>// String
let name: string = "Alice";

// Number
let age: number = 30;
let price: number = 19.99;

// Boolean
let isActive: boolean = true;

// Array
let numbers: number[] = [1, 2, 3, 4];
let names: Array&lt;string&gt; = ["John", "Jane"];

// Any (avoid when possible)
let anything: any = "could be anything";</code></pre>
      
      <h3>Function Types</h3>
      <pre><code>// Function with typed parameters and return type
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function with types
const multiply = (x: number, y: number): number =&gt; x * y;

// Optional parameters
function greet(name: string, greeting?: string): string {
  return \`\${greeting || "Hello"}, \${name}!\`;
}

// Default parameters
function createUser(name: string, age: number = 18): object {
  return { name, age };
}</code></pre>
      
      <h2>Object Types and Interfaces</h2>
      
      <h3>Object Type Annotations</h3>
      <pre><code>// Inline object type
let user: { name: string; age: number; email: string } = {
  name: "John",
  age: 30,
  email: "john@example.com"
};</code></pre>
      
      <h3>Interfaces</h3>
      <pre><code>// Define an interface
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
  readonly createdAt: Date; // Readonly property
}

// Use the interface
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  createdAt: new Date()
};

// Function using interface
function updateUser(user: User): User {
  return { ...user, age: user.age || 18 };
}</code></pre>
      
      <h2>Union and Literal Types</h2>
      
      <h3>Union Types</h3>
      <pre><code>// Union types allow multiple types
type Status = "pending" | "approved" | "rejected";

let orderStatus: Status = "pending";

// Function with union parameter
function formatId(id: string | number): string {
  return \`ID: \${id}\`;
}

formatId(123);     // Works
formatId("abc");   // Also works</code></pre>
      
      <h3>Literal Types</h3>
      <pre><code>// Literal types for exact values
type Theme = "light" | "dark";
type Size = "small" | "medium" | "large";

interface Button {
  text: string;
  theme: Theme;
  size: Size;
}

const button: Button = {
  text: "Click me",
  theme: "dark",
  size: "medium"
};</code></pre>
      
      <h2>Generic Types</h2>
      <p>Generics allow you to create reusable components that work with multiple types:</p>
      
      <pre><code>// Generic function
function identity&lt;T&gt;(arg: T): T {
  return arg;
}

let output = identity&lt;string&gt;("hello");
let numOutput = identity&lt;number&gt;(42);

// Generic interface
interface ApiResponse&lt;T&gt; {
  data: T;
  status: number;
  message: string;
}

// Usage
type UserResponse = ApiResponse&lt;User&gt;;
type UsersResponse = ApiResponse&lt;User[]&gt;</code></pre>
      
      <h2>Classes with TypeScript</h2>
      <pre><code>class Animal {
  private name: string;
  protected species: string;
  public age: number;

  constructor(name: string, species: string, age: number) {
    this.name = name;
    this.species = species;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }

  protected makeSound(): void {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, "Canine", age);
  }

  public bark(): void {
    console.log("Woof!");
  }
}</code></pre>
      
      <h2>Common TypeScript Patterns</h2>
      
      <h3>Type Guards</h3>
      <pre><code>function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: unknown) {
  if (isString(value)) {
    // TypeScript knows value is string here
    console.log(value.toUpperCase());
  }
}</code></pre>
      
      <h3>Utility Types</h3>
      <pre><code>interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Pick specific properties
type UserSummary = Pick&lt;User, "name" | "email"&gt;;

// Make all properties optional
type PartialUser = Partial&lt;User&gt;;

// Make all properties required
type RequiredUser = Required&lt;PartialUser&gt;;</code></pre>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Start with strict mode enabled in tsconfig.json</li>
        <li>Use interfaces for object shapes, types for unions</li>
        <li>Avoid \`any\` type - use \`unknown\` if needed</li>
        <li>Use meaningful names for generic type parameters</li>
        <li>Enable strict null checks</li>
        <li>Prefer explicit return types for public functions</li>
      </ul>
      
      <h2>Migration Strategy</h2>
      <p>Moving from JavaScript to TypeScript:</p>
      
      <ol>
        <li>Rename .js files to .ts</li>
        <li>Add basic type annotations</li>
        <li>Fix TypeScript errors gradually</li>
        <li>Enable stricter compiler options</li>
        <li>Add types for external libraries</li>
      </ol>
      
      <p>TypeScript provides excellent developer experience and helps prevent bugs. Start with basic types and gradually adopt more advanced features!</p>
    `,
    category: "TypeScript",
    readTime: "8 min read",
    date: "Nov 28, 2024",
    publishDate: "2024-11-28",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Funnel Effect"
  }
];

// Helper function to get blog posts with limit
export const getBlogPosts = (limit?: number): BlogPost[] => {
  if (limit) {
    return blogPosts.slice(0, limit);
  }
  return blogPosts;
};

// Helper function to get a single blog post by slug
export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper function to get unique categories
export const getCategories = (): string[] => {
  return Array.from(new Set(blogPosts.map(post => post.category)));
};