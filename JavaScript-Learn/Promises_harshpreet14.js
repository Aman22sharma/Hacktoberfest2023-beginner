//AUTHOR: Harshpreet Kaur
//JavaScript Concept: Promises
//GITHUB: github.com/harshpreet14

//In solution to call back hells, promises were introduced. 
function getMedicine1() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("1 Received")
        resolve();
      }, 1000);
    });
  }
  
  function getMedicine2() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
              console.log("2 Received")
        resolve();
      }, 2000);
    });
  }
  
  getMedicine1()
      .then(getMedicine2())

      //simulating API request
      const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = { name: "John Doe", age: 25 };
          resolve(data); }
        , 2000);
      });
      
      fetchData
        .then((result) => {
          console.log("Data fetched:", result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });