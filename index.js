let muestraMenu = false;
$('.hamburger').on('click', function(){
  if(muestraMenu === true){
    //$('div').css('right', '-300px');
    TweenLite.to('.mobile-menu ul', 0.3, 
                 {right: '-50%'})
    muestraMenu = false;
  } else {
    //$('div').css('right', '0')
    TweenLite.to('.mobile-menu ul', 0.3,
                {right: '0'})
    muestraMenu = true;
  }
})