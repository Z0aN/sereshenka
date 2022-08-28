$(document).ready(function(){
    $('.prices-slider').slick({
        arrows:false,
        adaptiveHeight: true,
        slidesToShow : 3,
        slidesToScroll: 2,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 2000,
        draggable: true,
        swipe: true,
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
    $(document).on("keydown", closeModal);

    function openModal() {
        let targetModal = $(this).attr('data-href');
        $(targetModal).find('.modal__overlay').addClass('active');
        $(targetModal).find('.modal__dialog').addClass('active');
    }

    function closeModal(e) {
        e.preventDefault()
        let modalOverlay = $('.modal__overlay');
        let modalDialog = $('.modal__dialog');
        modalOverlay.removeClass('active');
        modalDialog.removeClass('active');

        if(e.keyCode == 27) {
            modalOverlay.removeClass('active');
            modalDialog.removeClass('active');
        }
    }

});