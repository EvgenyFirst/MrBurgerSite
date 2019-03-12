// page scroll
/*jQuery(document).ready(function($){
    var slider = $.fn.fsvs({
        autoPlay            : false,
        speed               : 1000,
        bodyID              : 'fsvs-body',
        selector            : '> .slide',
        mouseSwipeDisance   : 40,
        afterSlide          : function(){},
        beforeSlide         : function(){},
        endSlide            : function(){},
        mouseWheelEvents    : true,
        mouseWheelDelay     : false,
        mouseDragEvents     : true,
        touchEvents         : true,
        arrowKeyEvents      : true,
        pagination          : true,
        nthClasses          : 2,
        detectHash          : true
    });
});*/
(function($){
  $(window).on("load",function(){
    
    /* Page Scroll to id fn call */
    $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
      highlightSelector:"#navigation-menu a"
    });
    
    /* jquery-hashchange fn */
    $(window).hashchange(function(){
      var loc=window.location,
        to=loc.hash.split("/")[1] || "#top";
      $.mPageScroll2id("scrollTo",to,{
        clicked:$("a[href='"+loc+"'],a[href='"+loc.hash+"']")
      });
    });
    
    /* demo functions */
    $("a[rel='next']").click(function(e){
      e.preventDefault();
      var val="#/"+$(this).parent().parent("section").next().attr("id");
      window.location.hash=val;
    });
    
  });
})(jQuery);
//---------------------------------------------------------------//

// скорость листания, плавность
/*
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
  var delta = 0;
  if (event.wheelDelta) delta = event.wheelDelta / 120;
  else if (event.detail) delta = -event.detail / 3;

  handle(delta);
  if (event.preventDefault) event.preventDefault();
  event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
  var animationInterval = 10; //lower is faster
  var scrollSpeed = 10; //lower is faster

  if (end == null) {
    end = $(window).scrollTop();
  }
  end -= 20 * delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function() {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (scrollTop <= 0 ||
        scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
        goUp && step > -1 ||
        !goUp && step < 1) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step);
    }, animationInterval);
  }
}
*/
//---------------------------------------------------------------//

// плавный переход к якорю
/*
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 220;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});*/