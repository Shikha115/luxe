$(() => {
    $(document).scroll(() => {
        $('.main-header').toggleClass('on-scroll', $(this).scrollTop() > 100)
    });
});