var buttons = document.getElementsByClassName('btn_cart');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    alert('Sem estoque');
  });
}