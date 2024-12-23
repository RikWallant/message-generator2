const adjective = ['beautiful', 'strong', 'compassionate', 'brave'];
const encouragement = ['fighting', 'going', 'moving', 'battling'];
const praise = ['excellent', 'brilliant', 'marvellous'];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let randomAdjective;
let randomEncouragement;
let randomPraise;

function generateMessage() {
    
    randomAdjective = getRandomElement(adjective);
    randomEncouragement = getRandomElement(encouragement);
    randomPraise = getRandomElement(praise);
    
    const randomMessage = `You are ${randomAdjective}. Keep ${randomEncouragement}. Well done! You are ${randomPraise}!`;
  
    message.textContent = randomMessage;
};


const button = document.getElementById('generateBtn');
const message = document.getElementById('message');


button.addEventListener('click', generateMessage);




