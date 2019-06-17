//Define Constant Arrays for Displayed Message
console.log("Javascript is loaded.");
var subtitle = $(".subtitle");
console.log(subtitle);


const pasta = ["Don't rinse your pasta, or you'll get rid of all the starches that help the sauce cling to it.", 
             "Always finish your pasta in the sauce!", 
             "Slightly undercook your pasta, so that when you finish it off in the sauce, it will cook to your liking.", 
             "For thick, chunky sauces, pick a pasta with wide grooves"];

const beef = ["For medium doneness, cook to 134*F!",
           "For rare doneness, cook to 120*F!",
           "For well done, cook to 160*F!",
           "For prime cuts, try to flip your beef only once during cooking.",
           "If your beef is sticking to the pan, let it cook a little longer. It will form a crust that helps it lift off!"];

const chicken = ["To decide when to flip your chicken cutlet, look for a white ring of cooked meat. When you see it creep up to the top, it's time to flip.",
              "NEVER undercook chicken. Temperature should read 165*F for white meat, 165-175*F for dark meat.",
              "If you hate dry poultry, try cooking legs and thighs. They're juicier and less-prone to dessication.",
              "Don't be afraid of undercooking your chicken. You don't need to cremate your bird to avoid illness."];

const veggies = ["Most veggies can be eaten raw without any negative consequence. Try sweet potato as an alterantive to raw carrot!",
                "If your veggies are floppy or mushy, they're probably overcooked. Add vegetables last to any dish, so they can briefly steam or sautee before serving.",
                "Check your cook times! Not all vegetables require the same amount of heat or time to cook.",
                 "Starchy vegetables like potatoes are a wonderful addition to soups and sauces.",
                "Save those bits and pieces from the cutting board! Place them in a freezer bag. When the bag is full, boil the contents for a wonderful vegetable stock."];

var pastaButton = $(".submit-pasta");
var beefButton = $(".submit-beef");
var chickenButton = $(".submit-chicken");
var veggiesButton = $(".submit-veggies");

pastaButton.on("click",pastaTips);
beefButton.on("click",beefTips);
chickenButton.on("click",chickenTips);
veggiesButton.on("click",veggiesTips);


function pastaTips(event){
  event.preventDefault();
  var randomDecimal = Math.random()*pasta.length;
  var roundedNum = Math.floor(randomDecimal);
  var message = $(".message");
  var newMessage = pasta[roundedNum];
  console.log(newMessage);
  message.text(newMessage);
  message.addClass("messageRecolor");
}

function beefTips(event){
  event.preventDefault();
  var randomDecimal = Math.random()*beef.length;
  var roundedNum = Math.floor(randomDecimal);
  var message = $(".message");
  var newMessage = beef[roundedNum];
  console.log(newMessage);
  message.text(newMessage);
  message.addClass("messageRecolor");
}

function chickenTips(event){
  event.preventDefault();
  var randomDecimal = Math.random()*chicken.length;
  var roundedNum = Math.floor(randomDecimal);
  var message = $(".message");
  var newMessage = chicken[roundedNum];
  console.log(newMessage);
  message.text(newMessage);
  message.addClass("messageRecolor");
}

function veggiesTips(event){
  event.preventDefault();
  var randomDecimal = Math.random()*veggies.length;
  var roundedNum = Math.floor(randomDecimal);
  var message = $(".message");
  var newMessage = veggies[roundedNum];
  console.log(newMessage);
  message.text(newMessage);
  message.addClass("messageRecolor");
}
