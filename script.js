window.addEventListener("load", () => {
  alert("¡Feliz mesesaurio, mi amor! ❤️");
});

function updateDaysTogether() {
  const startDate = new Date('2025-09-07'); // First day together
  const today = new Date();
  const timeDiff = today - startDate;
  let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  // Pad with leading zeros to 7 digits
  let daysStr = String(days).padStart(6, '0');

  const counterDiv = document.getElementById('day-counter');
  counterDiv.innerHTML = ''; // clear old digits

  // Split number into digits
  daysStr.split('').forEach(d => {
    const span = document.createElement('span');
    span.className = 'digit';
    span.textContent = d;
    counterDiv.appendChild(span);
  });
}

// Initialize and update
updateDaysTogether();
setInterval(updateDaysTogether, 1000 * 60 * 60);


const motdArray = [
  "¡Quiero estar contigo!",
  "Ey, ey ey... Dame un beso.",
  "Eres mi lugar seguro.",
  "Eres la más bonita.",
  "Me quiero casar contigo :P",
  "Respira, mi amor :)",
  "Gracias por existir en mi vida.",
  "Un Valo, ¿o qué?",
  "Conéctate, chango.",
  "¡Te amo!",
  "Te quiero mucho ;)",
  "¿Te cuento un secreto? Eres el amor de mi vida",
  "Eres mi persona especial.",
  "Kenai es NUESTRO.  ",
  "¡Conéctate al Disc!",
  "¿11 roles de canela, o yunque de componente?",
  "Te amo, DCEM.",
  "Tienes nombre de telenovela.",
  "¿Fingimos estar casados por un desayuno gratis?",
  "Duerme, preciosa.",
  "Márcame.",
  "¿Me das un beso?",
  "Amor, ¿qué tienes? :(",
  "¿Eres bruja? Porque me encantas.",
  "¿Vas Peleadores Álmicos?",
  "Te cambio esa gota por un cinto.",
  "Ponme humo en mid.",
  "¡Qué buena, mi amor!",
  "Cena algo, bobi.",
  "Te adoro, ratón.",
  "¿Me das skin de Vandal?",
  "Perdón, amor :(",
  "Ya voy por Costera.",
  "Salúdame a tu má.",
  "¡Frena antes del tope!",
  "Vámonos por la Escénica",
  "Hey, Mona.",
  "¿Quieres ser mi dúo?",
  "Ahorita se te quita el lag, amor.",
  "¡Feliz mesesaurio!",
  "¡MonDragoooooooon!"
];


// pick random
const randomIndex = Math.floor(Math.random() * motdArray.length);
document.getElementById("motd").textContent = motdArray[randomIndex];