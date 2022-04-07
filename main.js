"use strict";

while (true) {
  question();
  if (confirm("uyinni davom etiraszmi ?")) {
    question();
  } else break;
}
function question() {
  let num = Number(
    prompt("3 xonali son kiriting: ularni chap va o'ngdan o'qigani aniqlaydi")
  );

  let hundered = Math.floor(num / 100);
  let one = num % 10;
  hundered === one
    ? alert("ushbu soning boshi va oxiri teng")
    : alert("ushbu sonning boshi va oxhirisi teng emas");
}

// while (true) {
//   question();
//   if (confirm("Siz uyinni davom ettirishni istaysizmi ?")) {
//     question();
//   } else break;
// }

// function question() {
//   let num = Number(prompt("write Your Number :"));
//   if (num > 20) {
//     let a = num - 20;
//     alert(` siz kiritgan ${num} soni 20 dan ${a} ta katta`);
//   } else if (num < 20) {
//     alert(`siz kiritgan ${num} soni 20 dan kichik kattaroq son bering`);
//   } else if (num === 20) {
//     alert(`siz kiritgfan ${num} soni 20 bilan o'zaro teng`);
//   } else {
//     alert(`siz qandaydir xatolikga yo'l qo'ydingiz qayta urinib ko'ring!`);
//   }
// }
