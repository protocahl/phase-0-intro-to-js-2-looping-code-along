const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
function writeCards(names, event) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  const names = ["Charlie", "Samip", "Ali"];
  const event = "birthday";
  const thankYouMessages = writeCards(names, event);
  console.log(thankYouMessages);
  function countDown(number) {
    let count = number;
  
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  
  countDown(10);