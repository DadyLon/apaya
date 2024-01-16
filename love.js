var c = 0;

var when = ["Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "Lopyuu more more more", "banyakk banyakkk pokoknyaaa 💜💜💜💜💜💜💜💜💜"];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// Acak saat memulai
$(function () {
  shuffle(when);
});

$(document).on("click", function (e) {
  e.preventDefault(); // Mencegah tindakan default dari elemen yang diklik
  if (e.button == 0) {
    if (c < when.length) {
      $("<p>" + when[c] + "</p>").hide().prependTo("#when-you").fadeIn(2000);
      c++;
    } else {
      $("<p>sayang juga ya </p>").hide().prependTo("#when-you").fadeIn(2000);
      $("body").css('background', '#000');
      $("#g p").css('color', '#fff');
      $(document).off("click"); // Menghentikan pendengaran klik setelah semua elemen ditampilkan
    }
  }
  console.log("Click event");
});
