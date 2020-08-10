//$( document ).ready(function() {
//console.log( "ready!" );
//});


/*
$( document ).ready(function() {
console.log( "ready set" );
});


$(function () {
  /**tooltip & popovers  
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  */


/**smooth scroll
smoothScroll.init({
selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
speed: 1000, // Integer. How fast to complete the scroll in milliseconds
easing: 'easeInOutCubic', // Easing pattern to use
offset: 56, // Integer. How far to offset the scrolling anchor location in pixels
callback: function (anchor, toggle) {} // Function to run after scrolling
});
**/

/*Megamenu Click
$(document).ready(function () {
  $(".megamenu").on('click mouseover', function () {
    e.stopPropagation();
  });
});




$(document).ready(function () {
  var fixHeight = function () {
    $('.navbar-nav').css(
      'max-height',
      document.documentElement.clientHeight - 150
    );
  };
  fixHeight();
  $(window).resize(function () {
    fixHeight();
  });

  $(".megamenu").on('click, mouseover', function () {
    e.stopPropagation();
  });

  $('.navbar .navbar-toggler').on('click', function () {
    fixHeight();
  });
  $('.navbar-toggler, .overlay').on('click', function () {
    $('.mobileMenu, .overlay').toggleClass('open');
  });
});

$(document).ready(function () {

  $('.custom-button').on('click', function () {

    $('.animated-icon').toggleClass('open');
  });

  $('.custom-button').on('click', function () {

    $('.animated-icon').toggleClass('bg-circle');
  });

});


$(document).ready(function () {
  if (Cookies('alert')) {
    $('.popup-alert').show();
  }



  $(document).on('click', '#close-pop-up', function () {
    var date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    Cookies.set('name', 'value', { expires: 0 })
    $('.popup-alert').hide();
  });
});


*/

/**navbar sticky **/
$(window).scroll(function () {
  var winTop = $(window).scrollTop();
  if (winTop >= 203) {
    $(".super-navigation").addClass("fixed-top-supernav");
  } else {
    $(".super-navigation").removeClass("fixed-top-supernav");
  }//if-else
});//win func.

/**navbar sticky keydown **/
$(window).keydown(function () {
  var winTop = $(window).scrollTop();
  if (winTop >= 203) {
    $(".super-navigation").addClass("fixed-top-supernav");
  } else {
    $(".super-navigation").removeClass("fixed-top-supernav");
    //this.console.log('keyUp triggered');
  }//if-else
});//win func.

/**navbar sticky keyup **/
$(window).keyup(function () {
  var winTop = $(window).scrollTop();
  if (winTop >= 203) {
    $(".super-navigation").addClass("fixed-top-supernav");
  } else {
    $(".super-navigation").removeClass("fixed-top-supernav");
    //this.console.log('keyUp triggered');
  }//if-else
});//win func.

/**navbar sticky **/
$(window).scroll(function () {
  var winTop = $(window).scrollTop();
  if (winTop >= 203) {
    $("nav.navbar").addClass("fixed-top");
  } else {
    $("nav.navbar").removeClass("fixed-top");
  }//if-else
});//win func.


/**navbar sticky keydown **/
$(window).keydown(function () {
  var winTop = $(window).scrollTop();
  if (winTop >= 203) {
    $("nav.navbar").addClass("fixed-top");
  } else {
    $("nav.navbar").removeClass("fixed-top");
    //this.console.log('keyUp triggered');
  }//if-else
});//win func.


/**navbar sticky keyup **/
$(window).keyup(function () {
  var winTop = $(window).scrollTop();
  if (winTop >= 203) {
    $("nav.navbar").addClass("fixed-top");
  } else {
    $("nav.navbar").removeClass("fixed-top");
    //this.console.log('keyUp triggered');
  }//if-else
});//win func.



/*
Parent click and dropdown for other part of Nav Items
https://stackoverflow.com/questions/48820404/bootstrap-4-keeping-parent-of-dropdown-a-clickable-link/55773664
*/

$('.navbar ul.navbar-nav > .dropdown > a[href]').click(function () {
  var dropdown = $(this).next('.dropdown-menu');
  /*
   * The dropdown can be non-existent
   * The dropdown can be already open by css
   * (for instance display: block from a custom :hover setting) 
   * or a "show" class on the element which also sets a display: block;
   */
  if (dropdown.length == 0 || $(dropdown).css('display') !== 'none') {
    if (this.href) {
      location.href = this.href;
    }
  }
});

/*
//hide super nav on scroll
$(window).scroll(function () {
  var winTop = $(window).scrollTop();
  if (winTop >= 700) {
    $("#super-navigation").addClass("super-navigation--hidden");
  } else {
    $("#super-navigation").removeClass("super-navigation--hidden");
  }//if-else
});//win func.
*/


//Make navbar smaller on scroll
var header = $(".start-style");
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 495) {
    header.removeClass('start-style').addClass("scroll-on");
  } else {
    header.removeClass("scroll-on").addClass('start-style');
  }
});


//Make navbar smaller on scroll
var header = $(".start-style");
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 495) {
    header.removeClass('start-style').addClass("smaller-nav");
  } else {
    header.removeClass("smaller-nav").addClass('start-style');
  }
});


// ===== Scroll to Top Button ====
$(window).scroll(function () {
  if ($(this).scrollTop() >= 300) {
    // If page is scrolled more than 15px
    $("#return-to-top").fadeIn(200); // Fade in the arrow
  } else {
    $("#return-to-top").fadeOut(200); // Else fade out the arrow
  }
});

$("#return-to-top").click(function () {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0 // Scroll to top of body
    },
    500
  );
});

/*
District Logo section
*/

$('#colorselector').change(function () {
  $('.colors').hide();
  $('#' + $(this).val()).show();
});



/*
Animate wow.css

wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true
});
wow.init();
*/


/*
$(document).ready(function() {
  let content = document.getElementById("quotes"),
    ajaxUrl = "https://www.rto-ero.org/json-test/post.json",
    quotesData = { quotes: [] };
 
  // Running ajax
  let dataQuery = $.ajax({
    method: "GET",
    url: ajaxUrl
  });
 
  dataQuery.done(res => {
    for (var i = 0; i < res.length; i++) {
      quotesData.quotes.push(res[i]);
    }
 
    let src = document.getElementById("quotes-template").innerHTML,
      template = Handlebars.compile(src),
      html = template(quotesData);
 
    content.innerHTML = html;
  });
});
 
 
var textValue;
$('[data-counter]').each(function () {
  $(this).animate(
    {
      Counter: $(this).data('counter')
    },
    {
      duration: 1000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      },
      complete: function () {
        if ($(this).text().length > 2) {
          textValue = $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
          $(this).text(textValue);
        }
      }
    });
});
 
 
 
var elem = $('#main');
if (elem.length) {
  var elemPos = elem.offset().top,
    value,
    scrollValue,
    callFunc = true;
  $(window).scroll(function () {
    scrollValue = $(window).scrollTop();
    if ((elemPos + 300) <= scrollValue && callFunc) {
      callFunc = false;
      counter();
    }
    value = elem.scrollTop;
  });
}
 
*/

/*
$(window).scroll(function () {
  if ($(".figures").is(':visible')) {
    // do your special stuff here
    var textValue;
    $('[data-counter]').each(function () {
      $(this).animate(
        {
          Counter: $(this).data('counter')
        },
        {
          duration: 1000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
          complete: function () {
            if ($(this).text().length > 2) {
              textValue = $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
              $(this).text(textValue);
            }
          }
        });
    });
  }
});
 
 
CSS Counter on Home Page - old version above and new version below
*/

const stats = document.querySelectorAll(".counter");

stats.forEach(stat => {
  // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
  const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
  const time = 1000;
  let result = [...patt.exec(stat.textContent)];
  let fresh = true;
  let ticks;

  // Remove first full match from result array (we dont need the full match, just the individual match groups).
  result.shift();
  // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
  result = result.filter(res => res != null);

  while (stat.firstChild) {
    stat.removeChild(stat.firstChild);
  }

  for (let res of result) {
    if (isNaN(res)) {
      stat.insertAdjacentHTML("beforeend", `<span>${res}</span>`);
    } else {
      for (let i = 0; i < res.length; i++) {
        stat.insertAdjacentHTML(
          "beforeend",
          `<span data-value="${res[i]}">
          <span>&ndash;</span>
          ${Array(parseInt(res[i]) + 1)
            .join(0)
            .split(0)
            .map(
              (x, j) => `
            <span>${j}</span>
          `
            )
            .join("")}
        </span>`
        );
      }
    }
  }

  ticks = [...stat.querySelectorAll("span[data-value]")];

  let activate = () => {
    let top = stat.getBoundingClientRect().top;
    let offset = window.innerHeight * 3 / 4;

    setTimeout(() => {
      fresh = false;
    }, time);

    if (top < offset) {
      setTimeout(() => {
        for (let tick of ticks) {
          let dist = parseInt(tick.getAttribute("data-value")) + 1;
          tick.style.transform = `translateY(-${dist * 100}%)`;
        }
      }, fresh ? time : 0);
      window.removeEventListener("scroll", activate);
    }
  };
  window.addEventListener("scroll", activate);
  activate();
});




/* 
accordion behaviour 
*/

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
const accordionItemContents = document.querySelectorAll(".accordion-item-body-content");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {

    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });




});


/*
******************************************************************************
******************************************************************************
Coverage comparison block JS
******************************************************************************
******************************************************************************




(function () {

  function activateTab() {
    if (activeTab) {
      resetTab.call(activeTab);
    }
    this.parentNode.className = 'tab tab-active';
    activeTab = this;
    activePanel = document.getElementById(activeTab.getAttribute('href').substring(1));
    activePanel.className = 'tabpanel show';
    activePanel.setAttribute('aria-expanded', true);
  }

  function resetTab() {
    activeTab.parentNode.className = 'tab';
    if (activePanel) {
      activePanel.className = 'tabpanel hide';
      activePanel.setAttribute('aria-expanded', false);
    }
  }

  var doc = document,
    tabs = doc.querySelectorAll('.tab a'),
    panels = doc.querySelectorAll('.tabpanel'),
    activeTab = tabs[0],
    activePanel;

  activateTab.call(activeTab);

  for (var i = tabs.length - 1; i >= 0; i--) {
    tabs[i].addEventListener('click', activateTab, false);
  }

})();

*/

//# sourceMappingURL=app.js.map
