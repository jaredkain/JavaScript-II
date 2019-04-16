// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function house() {
  const framing = 'Wood is required, here.'
  console.log(`I am the house! ${framing}`);
  debugger;

  function foundation() {
    const concrete = 'But, comprised mainly of concrete.'
    console.log(`I am the foundation to the house! ${framing} ${concrete}`);
    debugger;

    function footing() {
      const basePoor = 'Only concrete and rebar are needed!'
      const jk = 'Just kidding!'
      console.log(`I am the footing to it all! ${framing} ${jk} ${basePoor}`);
      debugger;
    }//footing

    footing();
  }//foundation

  foundation();
}//house

house();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
