//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let messageWithoutSpace = message.trim();
  
  if (messageWithoutSpace === '') {
    return "Fine. Be that way!";
    
  } else if (messageWithoutSpace === messageWithoutSpace.toUpperCase() 
             && messageWithoutSpace.endsWith("?") 
             && /[a-z]/i.test(message)) {
    return "Calm down, I know what I'm doing!";
    
  } else if (messageWithoutSpace === messageWithoutSpace.toUpperCase() 
             && /[a-z]/i.test(message)) {
    return "Whoa, chill out!";
    
  } else if (messageWithoutSpace.endsWith("?")){
    return "Sure."; 
    
  } else {
    return "Whatever.";
  }
};
