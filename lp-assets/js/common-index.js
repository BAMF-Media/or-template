$(function() {

    $(".companiesList").slick({
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }

        ]
    });


});
