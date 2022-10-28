$(document).ready(function(){

    $('.prices-slider').slick({
        arrows:false,
        slidesToShow : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: true,
        swipe: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow : 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow : 2,
                },
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow : 1,
                }
            }
        ]
    });

    const txHeight = 30;
    const tx = document.getElementsByTagName("textarea");

    for (let i = 0; i < tx.length; i++) {
    if (tx[i].value == '') {
        tx[i].setAttribute("style", "height:" + txHeight + "px;overflow-y:hidden;");
    } else {
        tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
    }
    tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput(e) {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
    }



    let modalButton = $('[data-toggle=modal]'),
        closeModalButton = $('.modal__close'),
        modalOverlay = $('.modal__overlay')

    modalButton.on('click', openModal);
    closeModalButton.on('click', closeModal);
    modalOverlay.on('click',closeModal);
    // Закрытие на Esc
    $(document).on("keydown", function (event) {
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        if (event.keyCode == 27) {
          modalOverlay.removeClass("active");
          modalDialog.removeClass("active");
        }
      });

    function openModal() {
        let targetModal = $(this).attr('data-href');
        $(targetModal).find('.modal__overlay').addClass('active');
        $(targetModal).find('.modal__dialog').addClass('active');
    }

    $("[data-iframe]").click(function () {
        $(this).html($(this).attr("data-iframe"));
    });

    function closeModal(e) {
        e.preventDefault()
        let modalOverlay = $('.modal__overlay');
        let modalDialog = $('.modal__dialog');
        modalOverlay.removeClass('active');
        modalDialog.removeClass('active');
    }

    $('.header__burger').click(function(event){
        $('.header__burger,.header-nav').toggleClass('active');
        $('body').toggleClass('lock');
    })

    const headerLinks = document.querySelectorAll('.header-nav__item')
    headerLinks.forEach((el) => {
        el.addEventListener('click', () => {
            $('.header__burger,.header-nav').toggleClass('active');
        })
    })
})