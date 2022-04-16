const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((line)=>{
    const caps=line.split(" ");
    const capsLines=caps.map(
      (caps=>caps.charAt(0).toUpperCase()+caps.slice(1))
    );
    const results=capsLines.join(" ");
    return results;
  });
};
console.log(titleCased());
// let titleCased = tutorials.map(
//   tutorials => tutorials.charAt(0).toUpperCase() + tutorials.slice(1).toLowerCase());

// console.log(titleCased);