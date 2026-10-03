
// Valitse eri quote joka päivää
const quotes = [
"Mukavaa ja tuotteliasta opiskelupäivää.",
"Yksi tehtävä kerrallaan.",
"Oppiminen kannattaa aina.",
"Focus on progress, not perfection.",
"Learning never stops.",
"Päivä kerrallaan kohti tavoitetta.",
"Jokainen tehtävä vie eteenpäin.",
"Believe in the process.",
"Think. Learn. Grow.",
"Pienikin edistys on edistystä.",
"Success starts with consistency.",
"Keep showing up.",
"Keep moving forward.",
"Pienet askeleet vievät pitkälle.",
"Stay curious.",
"Õppimine tasub alati ära.",
"Usko omaan kehitykseesi."
];
// Määrittelee päivämäärä
const today = new Date();

const seed =
today.getFullYear() * 1000 +
today.getMonth() * 100 +
today.getDate();

const quoteIndex =
seed % quotes.length;

// Quote tervehdyksen alapuolelle
document.getElementById("quote").textContent = quotes[quoteIndex];

// Päivämäärä tervehdyksen jälkeen
document.getElementById("date").textContent =
today.toLocaleDateString("fi-FI");

