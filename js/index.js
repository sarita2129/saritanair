var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $elnew = document.querySelector('.el-new');

var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));
var $imgtictacdiv = document.querySelector('.imgtictactoe');
// alert('1');
setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);
$elsArr.forEach(function($el) {
  $el.classList.add('el-height');

});
$elnew.classList.add('el-height');

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
    this.classList.remove('el-height');
    this.classList.add('el-height-click');
    // alert(this.height());
    // alert($window.height());
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
    $elsArr.forEach(function($el) {
      $el.classList.remove('el-height-click');
      $el.classList.add('el-height');

    });

  });
});
$(document).ready(function(){
//
//   $('.divproject').hover(function(){
//
//     // alert(this);
//     this.querySelector('.content').classList.add('content-hover');
//     this.querySelector('.content').classList.remove('content');
//     this.classList.add('imgtictactoe-hover');
//     this.classList.remove('imgtictactoe');
//   });

$(".imgtictactoe").hover(function(){
    // $('.content').show();
    // alert(this.querySelector('.content'));
    $(this).find('.content').first().show();
},function(){
    // $('.content').hide();
    $(this).find('.content').first().hide();
});
$(".imggostyle").hover(function(){
    // $('.content').show();
    // alert(this.querySelector('.content'));
    $(this).find('.content').first().show();
},function(){
    // $('.content').hide();
    $(this).find('.content').first().hide();
});
$(".imgreelsplex").hover(function(){
    // $('.content').show();
    // alert(this.querySelector('.content'));
    $(this).find('.content').first().show();
},function(){
    // $('.content').hide();
    $(this).find('.content').first().hide();
});
$(".imgfoodie").hover(function(){
    // $('.content').show();
    // alert(this.querySelector('.content'));
    $(this).find('.content').first().show();
},function(){
    // $('.content').hide();
    $(this).find('.content').first().hide();
});
$('#download').on('click', function(e) {
  // e.preventDefault();
  // this.href = "/Users/saritanair/WDI/Projects/Backup/Portfolio/images/SaritaNairResume.pdf";
  // this.download = 'SaritaNairResume.pdf';
  window.open("images/SaritaNairResume.pdf", "_blank")
});
$('#linkedin').on('click', function(e) {
  // e.preventDefault();
  // this.href = "/Users/saritanair/WDI/Projects/Backup/Portfolio/images/SaritaNairResume.pdf";
  // this.download = 'SaritaNairResume.pdf';
  window.open("https://www.linkedin.com/in/saritanair29/", "_blank")
});
$('#github').on('click', function(e) {
  // e.preventDefault();
  // this.href = "/Users/saritanair/WDI/Projects/Backup/Portfolio/images/SaritaNairResume.pdf";
  // this.download = 'SaritaNairResume.pdf';
  window.open("https://github.com/sarita2129", "_blank")
});

});
