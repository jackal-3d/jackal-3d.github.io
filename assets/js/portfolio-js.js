// MOUSE CURSOR
const cursor = document.querySelector(".custom-cursor");
const links = document.querySelectorAll("a, .projectList");
let isCursorInited = false;

const initCursor = () => {
  cursor.classList.add("custom-cursor--init");
  isCursorInited = true;
};

const destroyCursor = () => {
  cursor.classList.remove("custom-cursor--init");
  isCursorInited = false;
};

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("custom-cursor--link");
  });

  link.addEventListener("mouseout", () => {
    cursor.classList.remove("custom-cursor--link");
  });
});

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  if (!isCursorInited) {
    initCursor();
  }

  cursor.style = `translate: ${mouseX}px ${mouseY}px`;
});

document.addEventListener("mouseout", destroyCursor);

// MODAL DIALOGS
$('#bushviper').click(function(e) {
  $('.vipermodal').addClass('active');
  e.preventDefault();
});

$('.vipermodal').click(function(e) {
  $('.vipermodal').removeClass('active');
  e.preventDefault();
});

$('#teaket').click(function(e) {
  $('.teamodal').addClass('active');
  e.preventDefault();
});
$('.teamodal').click(function(e) {
  $('.teamodal').removeClass('active');
  e.preventDefault();
});

$('#lighthou').click(function(e) {
  $('.lighthousemodal').addClass('active');
  e.preventDefault();
});
$('.lighthousemodal').click(function(e) {
  $('.lighthousemodal').removeClass('active');
  e.preventDefault();
});

$('#kitiles').click(function(e) {
  $('.tilemodal').addClass('active');
  e.preventDefault();
});
$('.tilemodal').click(function(e) {
  $('.tilemodal').removeClass('active');
  e.preventDefault();
});
