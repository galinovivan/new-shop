$(document).ready(function() {
    var toggle = $('#itemControl .control_item');
    toggle.click(function(e) {
        e.preventDefault();
        toggle.removeClass('active');
        $(this).addClass('active');
    });
});