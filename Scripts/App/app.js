/*
 *  Menu Dropdown
 */
$(function () {
    $('.dropdown').hover(
        function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn();
        },
        function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut();
        }
    );
})