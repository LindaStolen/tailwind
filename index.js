$(function(){
    let owl = $('#carousel1');
    owl.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        // nav: true,
    });
    // Go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
        console.log(456)
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel');
    })

    let owl2 = $('#carousel2');
    owl2.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<div class='absolute z-10 left-3 top-0 text-white flex md:h-[100%] sm:h-[90%] items-center'><i class='fas fa-chevron-left fa-lg'></i></div>", "<div class='carouselNextBtn absolute z-10 right-3 top-0 text-white flex md:h-[100%] sm:h-[90%] items-center'><i class='fas fa-chevron-right fa-lg'></i></div>"],
    });

    let owl3 = $('#carousel3');
    owl3.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<div class='absolute z-10 left-3 top-0 text-white flex md:h-[100%] sm:h-[90%] items-center'><i class='fas fa-chevron-left fa-lg'></i></div>", "<div class='carouselNextBtn absolute z-10 right-3 top-0 text-white flex md:h-[100%] sm:h-[90%] items-center'><i class='fas fa-chevron-right fa-lg'></i></div>"],
    });

    $("ul li:nth-child(1)").on("click",function(){
        $(this).next("div").slideToggle()
    })

})