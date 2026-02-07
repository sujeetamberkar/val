// ── Forgiveness cringe lines ────────────────────────────────────────
const forgiveCringe = [
  "Plsssss I promise to kill DEAN MAP 😭",
  "I will do the dishes without complaining. ",
  "You can slap me 30 times when we meet next time, just say yes",
  "I will cook something cute next time we meet, I promises",
  "I ppromise to send you a cute dance video every day for a week if you say yes",
  "Baby I'm literally begging on virtual knees here 🙏",
  "mana re tu nathile mu eka eka... please forgive your Hyd wala idiot",
  "Mu sorry re pila, please forgive me 🙏",
];

// ── Valentine cringe lines ──────────────────────────────────────────
const valentineCringe = [
  "But you're already my Valentine in my heart... just say yes officially? 🥺",
  "If you say no,  what will I tell the future TIME TRAVELLER Sujeet",
  "Mo Valentine tu heiki achhu... please official bana de re pila? 🥺",
  "Long distance Valentine = me sending virtual hugs 10 times a day... accept kar lo psl",
  "Can I be your Chandler to your Monica? Please say yes! 👫",
  "Will u be my detective to my lucifer? Please say yes! 👫",
  "My heart already booked February 14 for you only 💘",
  "I WILL MAKE SUJEET DO 50 SItups as punishment 😭",
  "Pls say Yes BUBU, Your Mandu is WAITING!",
  "Be my Valentine too? Pretty please?"
];

let forgiveIndex = 0;
let valentineIndex = 0;
let currentStage = "forgive";  // "forgive" or "valentine"

function forgiveNo() {
  showCringe(forgiveCringe, forgiveIndex);
  forgiveIndex++;
  currentStage = "forgive";
  document.getElementById('retryYesBtn').onclick = forgiveYes;
  document.getElementById('retryNoBtn').onclick = forgiveNo;
}

function forgiveYes() {
  hideAllStages();
  document.getElementById('question').textContent = "Will you be my Valentine? 💕";
  document.getElementById('valentineButtons').classList.remove('hidden');
  document.getElementById('heartMain').textContent = "❤️";
  currentStage = "valentine";
}

function valentineNo() {
  showCringe(valentineCringe, valentineIndex);
  valentineIndex++;
  currentStage = "valentine";
  document.getElementById('retryYesBtn').onclick = valentineYes;
  document.getElementById('retryNoBtn').onclick = valentineNo;
}

function valentineYes() {
  hideAllStages();
  document.getElementById('happyEnding').classList.remove('hidden');
  document.getElementById('title').textContent = "YESSSSS!!!";
}

function showCringe(linesArray, index) {
  hideAllStages();
  const line = linesArray[index % linesArray.length];
  document.getElementById('cringeLine').textContent = line;
  document.getElementById('cringeZone').classList.remove('hidden');
}

function hideAllStages() {
  document.getElementById('forgiveButtons').classList.add('hidden');
  document.getElementById('valentineButtons').classList.add('hidden');
  document.getElementById('cringeZone').classList.add('hidden');
  document.getElementById('happyEnding').classList.add('hidden');
}