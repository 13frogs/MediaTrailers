const adAstra = {
  summary: "Thirty years ago, Clifford McBride led a voyage into deep space, but the ship and crew were never heard from again. Now his son -- a fearless astronaut -- must embark on a daring mission to Neptune to uncover the truth about his missing father and a mysterious power surge that threatens the stability of the universe.",
  year: "2019",
  genre: "2h 4m",
  trailer: "https://www.youtube.com/watch?v=BsCNKuB93BA",
  hulu: true,
  disney: true,
  amazon: false,
  netflix: false
};

const movies = new Array(adAstra); 
let video = "";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

let hasService = false;

function CheckServices() {
  return true;
}

function handleSpacePress(event) {
  if (event.code === "Space" || event.key === " ") {
    event.preventDefault(); // Prevent default page scroll
       let number = getRndInteger(0, movies.length);
  while (hasService == false) {
    if (checkServices(number) == false) {
       let number = getRndInteger(0, movies.length);
    } else {
      let hasService = true;
    }
  }
  let video = movies[number].trailer;
  iframe.src = video;
}   
  }
}

document.getElementById("youtubeFrame").addEventListener("keydown", handleSpacePress);

