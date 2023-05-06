// challenge
//variable 1
const message = 'your phone number is contained somewhere in the digits of Pi';

// in JS, functions are first class citizens, meaning they can be assigned to variables, passed into other functions and have return types

//challenge: invoke the saysomething and react function in a way that console logs the message variable and invokes one of the reaction methods
const surprisedReaction = () => console.log(':o');
const smoothReaction = () => console.log('B)');
const saySomethingAndReact = () => {
    console.log(message);
    
        surprisedReaction();

};

// add the inputs here
saySomethingAndReact();
