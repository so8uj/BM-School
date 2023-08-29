$.fn.menumaker = function (options) {
  var cssmenu = $(this),
    settings = $.extend(
      {
        title: "Menu",
        format: "dropdown",
        sticky: false,
      },
      options
    );

  return this.each(function () {
    cssmenu.append('<div id="menu-button">'+"</div>");
    $(this)
      .find("#menu-button")
      .on("click", function () {
        $(this).toggleClass("menu-opened");
        var mainmenu = $(".responsive-menu");
        if (mainmenu.hasClass("open")) {
          mainmenu.hide().removeClass("open");
        } else {
          mainmenu.show().addClass("open");
          if (settings.format === "dropdown") {
            mainmenu.find("ul").show();
          }
        }
      });

    cssmenu.find("li ul").parent().addClass("has-sub");

    multiTg = function () {
      cssmenu
        .find(".has-sub")
        .prepend('<span class="submenu-button"></span>');
      cssmenu.find(".submenu-button").on("click", function () {
        $(this).toggleClass("submenu-opened");
        if ($(this).siblings("ul").hasClass("open")) {
          $(this).siblings("ul").removeClass("open").hide();
        } else {
          $(this).siblings("ul").addClass("open").show();
        }
      });
    };

    if (settings.format === "multitoggle") multiTg();
    else cssmenu.addClass("dropdown");

    if (settings.sticky === true) cssmenu.css("position", "fixed");

    resizeFix = function () {
      if ($(window).width() > 1024) {
        cssmenu.find(".responsive-menu").show();
      }

      if ($(window).width() <= 1024) {
        cssmenu.find(".responsive-menu").hide().removeClass("open");
      }
    };
    resizeFix();
    return $(window).on("resize", resizeFix);
  });
};
$(document).ready(function () {
  window.onscroll = function() {

		var header = document.querySelector(".header-bottom");
		var scrollY = 100;
		if (window.pageYOffset >= scrollY) {
			header.classList.add("sticky_header");
		} else {
			header.classList.remove("sticky_header");
		}
		
	};
  $(".nav-menu").menumaker({
    title: "Menu",
    format: "multitoggle",
  });
  $('.counter').counterUp({
		delay: 15,
		time: 2000
	});
});
