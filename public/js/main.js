/**
 * selectImages
 * preloader
 * Scroll process
 * Button Quantity
 * Delete file
 * Go Top
 * color swatch product
 * change value
 * footer accordion
 * close announcement bar
 * sidebar mobile
 * tabs
 * flatAccordion
 * button wishlist
 * button loading
 * variant picker
 * switch layout
 * item checkbox
 * infinite scroll
 * stagger wrap
 * filter
 * modal second
 * header sticky
 * header change background
 * img group
 * contact form
 * subscribe mailchimp
 * auto popup
 * RTL

 */


(function ($) {
  "use strict";

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  /* selectImages
  -------------------------------------------------------------------------------------*/
  var selectImages = function () {
    if ($(".image-select").length > 0) {
      const selectIMG = $(".image-select");
      selectIMG.find("option").each((idx, elem) => {
        const selectOption = $(elem);
        const imgURL = selectOption.attr("data-thumbnail");
        if (imgURL) {
          selectOption.attr(
            "data-content",
            "<img src='%i'/> %s"
              .replace(/%i/, imgURL)
              .replace(/%s/, selectOption.text())
          );
        }
      });
      selectIMG.selectpicker();
    }
  };

  /* preloader
  -------------------------------------------------------------------------------------*/
  const preloader = function () {
    if ($("body").hasClass("preload-wrapper")) {
      setTimeout(function () {
        $(".preload").fadeOut("slow", function () {
          $(this).remove();
        });
      }, 100);
    }
    
  };


  /* Button Quantity
  -------------------------------------------------------------------------------------*/
  var btnQuantity = function () {
    $(".minus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > 1) {
        value = value - 1;
      }
      $input.val(value);
    });

    $(".plus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > -1) {
        value = value + 1;
      }
      $input.val(value);
    });
  };

  /* Delete file 
  -------------------------------------------------------------------------------------*/
  var deleteFile = function (e) {
    $(".remove").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.closest(".file-delete").remove();
    });

    $('.ss-compapre-button-clear-all').on("click", function (e) {
      $(".ss-compare-item").remove();
    });
    $(".ss-compare-item .icon").on("click", function (e) {
      var $this = $(this);
      $this.closest(".ss-compare-item").remove();
    });
    $(".ss-mini-cart-remove").on("click", function (e) {
      console.log('hhh')
      $(this).closest(".ss-mini-cart-item").remove();
    });

  };

  /* Go Top
  -------------------------------------------------------------------------------------*/
  var goTop = function () {
    if ($("div").hasClass("progress-wrap")) {
      var progressPath = document.querySelector(".progress-wrap path");
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
      progressPath.style.strokeDasharray = pathLength + " " + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
      var updateprogress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
      };
      updateprogress();
      $(window).scroll(updateprogress);
      var offset = 200;
      var duration = 0;
      jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > offset) {
          jQuery(".progress-wrap").addClass("active-progress");
        } else {
          jQuery(".progress-wrap").removeClass("active-progress");
        }
      });
      jQuery(".progress-wrap").on("click", function (event) {
        event.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, duration);
        return false;
      });
    }
  };

  /* color swatch product
  -------------------------------------------------------------------------*/
  var swatchColor = function () {
    if ($(".product-card").length > 0) {
      $(".color-swatch").on("click, mouseover", function () {
        var swatchColor = $(this).find("img").attr("src");
        var imgProduct = $(this).closest(".product-card").find(".img-product");
        imgProduct.attr("src", swatchColor);
        $(this)
          .closest(".card-product")
          .find(".color-swatch.active")
          .removeClass("active");

        $(this).addClass("active");
      });
    }
  };

  /* change value
  ------------------------------------------------------------------------------------- */
  var changeValue = function () {
    if ($(".ss-dropdown-sort").length > 0) {
      $(".select-item").click(function (event) {
        $(this)
          .closest(".ss-dropdown-sort")
          .find(".text-sort-value")
          .text($(this).find(".text-value-item").text());

        $(this)
          .closest(".dropdown-menu")
          .find(".select-item.active")
          .removeClass("active");

        $(this).addClass("active");
      });
    }
  };

  /* footer accordion
  -------------------------------------------------------------------------*/
  var footer = function () {
    var args = { duration: 250 };
    $(".footer-heading-moblie").on("click", function () {
      $(this).parent(".footer-col-block").toggleClass("open");
      if (!$(this).parent(".footer-col-block").is(".open")) {
        $(this).next().slideUp(args);
      } else {
        $(this).next().slideDown(args);
      }
    });
  };


  /* range
  -------------------------------------------------------------------------*/
  var rangePrice = function(){
    const rangeInput = document.querySelectorAll('.range-input input')
    const progress = document.querySelector('.progress-price')
    const minPrice = document.querySelector('.min-price')
    const maxPrice = document.querySelector('.max-price')

    let priceGap = 10

    rangeInput.forEach(input => {
        input.addEventListener('input', e => {
            let minValue = parseInt(rangeInput[0].value, 10)
            let maxValue = parseInt(rangeInput[1].value, 10)

            if (maxValue - minValue < priceGap) {
                if (e.target.class === 'range-min') {
                    rangeInput[0].value = maxValue - priceGap
                } else {
                    rangeInput[1].value = minValue + priceGap
                }
            } else {
                progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
                progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
            }

            minPrice.innerHTML = minValue
            maxPrice.innerHTML = maxValue

            if (minValue >= 290) {
                minPrice.innerHTML = 290
            }

            if (maxValue <= 10) {
                maxPrice.innerHTML = 10
            }
        })
    })

  }

  /* sidebar mobile
  -------------------------------------------------------------------------*/
  var sidebarMobile = function () {
    if ($(".wrap-sidebar-mobile,.wrap-sidebar-account").length > 0) {
      var sidebar = $(".wrap-sidebar-mobile,.wrap-sidebar-account").html();
      $(".sidebar-mobile-append").append(sidebar);
      // $(".wrap-sidebar-mobile").remove();
    }
  };

  /* tabs
  -------------------------------------------------------------------------*/
  var tabs = function () {
    $(".widget-tabs").each(function () {
      $(this)
        .find(".widget-menu-tab")
        .children(".item-title")
        .on("click", function () {
          var liActive = $(this).index();
          var contentActive = $(this)
            .siblings()
            .removeClass("active")
            .parents(".widget-tabs")
            .find(".widget-content-tab")
            .children()
            .eq(liActive);
          contentActive.addClass("active").fadeIn("slow");
          contentActive.siblings().removeClass("active");
          $(this)
            .addClass("active")
            .parents(".widget-tabs")
            .find(".widget-content-tab")
            .children()
            .eq(liActive);
        });
    });
  };

  /* flatAccordion
  -------------------------------------------------------------------------*/
  var flatAccordion = function (class1, class2) {
    var args = { duration: 200 };

    $(class2 + " .toggle-title.active")
      .siblings(".toggle-content")
      .show();
    $(class1 + " .toggle-title").on("click", function () {
      $(class1 + " " + class2).removeClass("active");
      $(this).closest(class2).toggleClass("active");

      if (!$(this).is(".active")) {
        $(this).toggleClass("active");
        $(this).next().slideToggle(args);
      } else {
        $(class1 + " " + class2).removeClass("active");
        $(this).toggleClass("active");
        $(this).next().slideToggle(args);
      }
    });
  };

  /* button wishlist
  -------------------------------------------------------------------------*/
  var btnWishlist = function () {
    if ($(".btn-icon-action").length) {
      $(".btn-icon-action").on("click", function (e) {
        $(this).toggleClass("active");
      });
    }
  };

  /* button loading
  -------------------------------------------------------------------------*/
  var btnLoading = function () {
    if ($(".ss-btn-loading").length) {
      $(".ss-btn-loading").on("click", function (e) {
        $(this).addClass("loading");
        var $this = $(this);
        setTimeout(function () {
          $this.removeClass("loading");
        }, 600);
      });
    }
  };

  /* variant picker
  -------------------------------------------------------------------------*/
  var variantPicker = function () {
    if ($(".variant-picker-item").length) {
      $(".variant-picker-item label").on("click", function (e) {
        $(this)
          .closest(".variant-picker-item")
          .find(".variant-picker-label-value")
          .text($(this).data("value"));
      });
    }
    if ($(".variant-picker-item").length) {
      $(".select-size").on("click", function (e) {
        $(this)
          .closest(".variant-picker-item")
          .find(".variant-picker-label-value")
          .text($(this).data("value"));
      });
    }
  };

  /* switch layout
  -------------------------------------------------------------------------*/
  var switchLayout = function () {
    if ($(".ss-control-layout").length > 0) {
      $(".ss-view-layout-switch").on("click", function () {
        var value = $(this).data("value-grid");
        $(".grid-layout").attr("data-grid", value);
        $(this)
          .closest(".ss-control-layout")
          .find(".ss-view-layout-switch.active")
          .removeClass("active");

        $(this).addClass("active");
      });
      if (matchMedia("only screen and (max-width: 1150px)").matches) {
        $(".ss-view-layout-switch.active").removeClass("active");
        $(".sw-layout-3").addClass("active");
      }
      if (matchMedia("only screen and (max-width: 768px)").matches) {
        $(".ss-view-layout-switch.active").removeClass("active");
        $(".sw-layout-2").addClass("active");
      }
    }
  };

  
  
  /* stagger wrap
  -------------------------------------------------------------------------*/
  var staggerWrap = function () {
    if ($(".stagger-wrap").length) {
      var count = $(".stagger-item").length;
      // $(".stagger-item").addClass("stagger-finished");
      for (var i = 1, time = 0.2; i <= count; i++) {
        $(".stagger-item:nth-child(" + i + ")")
          .css("transition-delay", time * i + "s")
          .addClass("stagger-finished");
      }
    }
  };


  /* modal second
  -------------------------------------------------------------------------*/
  var clickModalSecond = function () {
    $(".btn-choose-size").click(function () {
      $("#find_size").modal("show");
    });
    $(".btn-show-quickview").click(function () {
      $("#quick_view").modal("show");
    });
    $(".btn-add-to-cart").click(function () {
      $("#shoppingCart").modal("show");
    });

    $(".btn-add-note").click(function () {
      $(".add-note").addClass("open");
    });
    $(".btn-add-gift").click(function () {
      $(".add-gift").addClass("open");
    });
    $(".btn-estimate-shipping").click(function () {
      $(".estimate-shipping").addClass("open");
    });
    $(".ss-mini-cart-tool-close ,.ss-mini-cart-tool-close .overplay").click(
      function () {
        $(".ss-mini-cart-tool-openable").removeClass("open");
      }
    );
  };



  /* header sticky
  -------------------------------------------------------------------------*/
  var headerSticky = function () {
    let didScroll;
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = $("header").outerHeight();
    $(window).scroll(function (event) {
      didScroll = true;
    });
    
    setInterval(function () {
      if (didScroll) {
        let st = $(this).scrollTop();

        // Make scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta) return;
        // If scrolled down and past the navbar, add class .nav-up.
        if (st > lastScrollTop && st > navbarHeight) {
          // Scroll Down
          $("header").css("top",`-${navbarHeight}px`)
        } else {
          // Scroll Up
          if (st + $(window).height() < $(document).height()) {
            $("header").css("top","0px");
          }
        }
        lastScrollTop = st;
        didScroll = false;
      }
    }, 250);
  };


   /* total cart
  -------------------------------------------------------------------------*/
  var totalPriceVariant = function () {

    var basePrice = parseFloat($(".price-on-sale").data("base-price")) || parseFloat($(".price-on-sale").text().replace("$", ""));
    var quantityInput = $(".quantity-product");
    // quantityInput.on("keydown keypress input", function(event) {
    //   event.preventDefault();
    // });
    $(".color-btn, .size-btn").on("click", function () {
      var newPrice = parseFloat($(this).data("price")) || basePrice;
      quantityInput.val(1);
      $(".price-on-sale").text("$" + newPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      var totalPrice = newPrice;
      $(".total-price").text("$" + totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    });

    $(".btn-increase").on("click", function () {
      var currentQuantity = parseInt(quantityInput.val());
      quantityInput.val(currentQuantity + 1);
      updateTotalPrice();
    });

    $(".btn-decrease").on("click", function () {
      var currentQuantity = parseInt(quantityInput.val());
      if (currentQuantity > 1) {
        quantityInput.val(currentQuantity - 1);
        updateTotalPrice();
      }
    });

    function updateTotalPrice() {
      var currentPrice = parseFloat($(".price-on-sale").text().replace("$", ""));
      var quantity = parseInt(quantityInput.val());
      var totalPrice = currentPrice * quantity;
      $(".total-price").text("$" + totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }

  };

  /* scroll grid product
  ------------------------------------------------------------------------------------- */
  var scrollGridProduct = function(){

    var headerHeight = $("#header").outerHeight(); 
    var activeColorBtn = null; 
    $(".btn-grid-color").on("click", function () {
        var color = $(this).data("color");
        var target = $(".item-img-color[data-color='" + color + "']"); 
        $('html, body').animate({
            scrollTop: target.offset().top - headerHeight 
        }, 100);

        $(".btn-grid-color").removeClass("active");
        $(this).addClass("active");
        activeColorBtn = $(this); 
    });

    $(window).on("scroll", function () {
        var isActiveSet = false; 
        $(".item-img-color").each(function () {
            var targetTop = $(this).offset().top - headerHeight;
            if ($(window).scrollTop() >= targetTop && $(window).scrollTop() < (targetTop + $(this).outerHeight())) {
                var color = $(this).data("color");
                if (!isActiveSet && (activeColorBtn === null || activeColorBtn.data("color") !== color)) {
                    $(".btn-grid-color").removeClass("active");
                    $(".btn-grid-color[data-color='" + color + "']").addClass("active");
                    // $('.value-currentColor').text(color);
                }
                isActiveSet = true; 
            }
        });
        if (!isActiveSet && activeColorBtn !== null) {
            $(".btn-grid-color").removeClass("active");
            activeColorBtn.addClass("active");
        }
    });
  }

  /* contact form
  ------------------------------------------------------------------------------------- */
  var ajaxContactForm = function () {
    $("#contactform").each(function () {
      $(this).validate({
        submitHandler: function (form) {
          var $form = $(form),
            str = $form.serialize(),
            loading = $("<div />", { class: "loading" });

          $.ajax({
            type: "POST",
            url: $form.attr("action"),
            data: str,
            beforeSend: function () {
              $form.find(".send-wrap").append(loading);
            },
            success: function (msg) {
              var result, cls;
              if (msg == "Success") {
                result =
                  "Email Sent Successfully. Thank you, Your application is accepted - we will contact you shortly";
                cls = "msg-success";
              } else {
                result = "Error sending email.";
                cls = "msg-error";
              }
              $form.prepend(
                $("<div />", {
                  class: "flat-alert " + cls,
                  text: result,
                }).append(
                  $(
                    '<a class="close" href="#"><i class="icon icon-close2"></i></a>'
                  )
                )
              );

              $form.find(":input").not(".submit").val("");
            },
            complete: function (xhr, status, error_thrown) {
              $form.find(".loading").remove();
            },
          });
        },
      });
    }); // each contactform
  };
  
 
  /* auto popup
  ------------------------------------------------------------------------------------- */
  var autoPopup = function () {
    if($("body").hasClass("popup-loader")){
      if ($(".auto-popup").length > 0) {
        let showPopup = sessionStorage.getItem("showPopup");
        if (!JSON.parse(showPopup)) {
          setTimeout(function () {
            $(".auto-popup").modal('show');
          }, 3000);
        }
      }
      $(".btn-hide-popup").on("click", function () {
        sessionStorage.setItem("showPopup", true);
      });
    };

  };
  /* toggle control
  ------------------------------------------------------------------------------------- */
  var clickControl = function () {
    // var args = { duration: 500 };

    $(".btn-address").click(function () {
      $(".show-form-address").toggle();
    });
    $(".btn-hide-address").click(function () {
      $(".show-form-address").hide();
    });

    $(".btn-edit-address").click(function () {
      $(this).closest(".account-address-item").find(".edit-form-address").toggle();
    });
    $(".btn-hide-edit-address").click(function () {
      $(this).closest(".account-address-item").find(".edit-form-address").hide();
    });
  };
  

    /* write-review
  ------------------------------------------------------------------------------------- */
  var writeReview = function () {

    if ($(".write-cancel-review-wrap").length > 0) {
      $(".btn-comment-review").click(function () {
        $(this).closest(".write-cancel-review-wrap").toggleClass("write-review");
      });
    }
   
  };

  /* ---------------------------------------------------
	Owl carousel - Slider
	-------------------------------------------------- */
	 var slider_ytc = function () {
		"use strict";
		// Content slider
		$('.yt-content-slider').each(function () {
			var $slider = $(this),
			$panels = $slider.children('div'),
			data = $slider.data();
			// Remove unwanted br's
			//$slider.children(':not(.yt-content-slide)').remove();
			// Apply Owl Carousel
			
			$slider.owlCarousel({
				responsiveClass: true,
				mouseDrag: true,
				video:true,
				lazyLoad: (data.lazyload == 'yes') ? true : false,
				autoplay: (data.autoplay == 'yes') ? true : false,
				autoHeight: (data.autoheight == 'yes') ? true : false,
				autoplayTimeout: data.delay * 1000,
				smartSpeed: data.speed * 1000,
				autoplayHoverPause: (data.hoverpause == 'yes') ? true : false,
				center: (data.center == 'yes') ? true : false,
				loop: (data.loop == 'yes') ? true : false,
				dots: (data.pagination == 'yes') ? true : false,
				nav: (data.arrows == 'yes') ? true : false,
				dotClass: "owl-dot",
				dotsClass: "owl-dots",
				margin: data.margin,
				navText:  ['<svg fill="currentcolor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon fill-rule="evenodd" points="9.414 12 16.707 19.293 15.293 20.707 6.586 12 15.293 3.293 16.707 4.707"></polygon></svg>','<svg fill="currentcolor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon fill-rule="evenodd" points="14.586 12 7.293 4.707 8.707 3.293 17.414 12 8.707 20.707 7.293 19.293"></polygon></svg>'],
				
				responsive: {
					0: {
						items: data.items_column4 
					},
					480: {
						items: data.items_column3
					},
					768: {
						items: data.items_column2
					},
					992: { 
						items: data.items_column1
					},
					1200: {
						items: data.items_column0 
					},
					1650: {
						items: data.items_column00 
					}
				}
			});			
		});	
	};
	
	
	
	// counter bootstrap
	var counter_number = function () {
    	$('.js-counter').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {              
              //change count up speed here
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
      });
	};
	var initpopupVideo = function () {
	 if ($(".btn_videos").length > 0) {
      var popupVideo = $('.btn_videos');
      popupVideo.YouTubePopUp();
	 }
    };
	var fancybox = function () {
		if ($(".popup-gallery").length > 0) {
         $(".popup-gallery").fancybox(); 
		}
    };
  // Dom Ready
  $(function () {
    selectImages();
    btnQuantity();
    deleteFile();
    goTop();
    preloader();
    sidebarMobile();
    tabs();
    flatAccordion(".flat-accordion", ".flat-toggle");
    flatAccordion(".flat-accordion1", ".flat-toggle1");
    swatchColor();
    changeValue();
    footer();
    btnWishlist();
    btnLoading();
    variantPicker();
    switchLayout();
    staggerWrap();
    clickModalSecond();
    headerSticky();
    totalPriceVariant();
    scrollGridProduct();
    writeReview();
    ajaxContactForm();
    autoPopup();
    rangePrice();
    clickControl();
	slider_ytc();
	initpopupVideo();
	counter_number();
	fancybox();
  });
})(jQuery);
