// AUTHOR: Shruti Sharma
// JavaScript Concept: Promises and Asynchronous Programming
// GITHUB: https://github.com/shruti2522


// Asynchronous Calls in JavaScript

// JavaScript is a single-threaded language, which means it can execute one operation at a time. 
//However, many tasks, such as network requests or file I/O, can be time-consuming. Blocking the main thread to wait for these operations to complete would lead to unresponsive user interfaces. 
//Asynchronous programming is the solution to this problem, allowing JavaScript to perform tasks concurrently without blocking the main thread.

// Asynchronous Operations and the Event Loop:

// JavaScript leverages asynchronous operations to manage concurrency. When an asynchronous operation is initiated, like making an HTTP request or reading a file, the JavaScript runtime doesn't wait for it to finish. Instead, it registers a callback function and continues executing other code. When the asynchronous operation completes, the callback is added to the message queue.

// The event loop is a critical part of managing asynchronous code in JavaScript. It continuously checks the message queue and processes messages one by one, invoking the associated callback functions.


// ****PROMISES****

//Promises represent a future value, typically the result of an asynchronous operation. 
//They can be in one of three states: pending, fulfilled, or rejected. 
//Promises allow you to register callbacks for when the operation is successful or when it fails.
// This makes it easier to handle asynchronous code in a structured and organized manner.

// Promises have two main methods:
// - `then()`: Used to register a callback to be executed when the Promise is resolved.
// - `catch()`: Used to register a callback for handling errors when the Promise is rejected.

// Example:

function fetchDataWithPromises() {
    fetch('url')
      .then(response => {
        if (!response.ok) {
          throw new Error;
        }
        return response.json();
      })
      .then(data => {
        console.log('data:', data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // ****ASYNC_AWAIT****

  // async/await is a syntactic sugar on top of Promises, making asynchronous code more readable and resembling synchronous code. 
  //The `async` keyword defines a function as asynchronous, and `await` pauses the function's execution until a Promise is resolved or rejected. 
  //This simplifies error handling and makes code easier to follow.
  
  // async/await Example:
  
  async function fetchDataWithAsyncAwait() {
    try {
      const response = await fetch('url');
      if (!response.ok) {
        throw new Error;
      }
      const data = await response.json();
      console.log('data', data);
    } catch (err) {
      console.log(err);
    }
  }
  