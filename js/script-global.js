let icon_warning = '<i class="fa-solid fa-circle-exclamation me-2 font-2-50-vh-md font-2-50-vh  mt-n1"></i>';
let arrow_up = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='116.771' height='27.656' viewBox='0 0 116.771 27.656'%3E%3Cpath id='Trazado_63' data-name='Trazado 63' d='M-22006.529-19980.687l54.406-20.783,54.621,20.783' transform='translate(22010.402 20004.471)' fill='none' stroke='%23e00520' stroke-linecap='round' stroke-linejoin='round' stroke-width='6'/%3E%3C/svg%3E%0A";
let arrow_down = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='116.771' height='27.656' viewBox='0 0 116.771 27.656'%3E%3Cpath id='Trazado_63' data-name='Trazado 63' d='M-22006.529-19980.687l54.406-20.783,54.621,20.783' transform='translate(-21893.631 -19976.814) rotate(180)' fill='none' stroke='%23e00520' stroke-linecap='round' stroke-linejoin='round' stroke-width='6'/%3E%3C/svg%3E";
jQuery.validator.setDefaults({
    onfocusout: function (e) {
        this.element(e);
    },
    onkeyup: true,   
});

jQuery.extend(jQuery.validator.messages, {
    required: icon_warning+ "Este campo es requerido.",
    remote:icon_warning+ "Please fix this field.",
    email:icon_warning+ "Please enter a valid email address.",
    url:icon_warning+ "Please enter a valid URL.",
    date:icon_warning+ "Please enter a valid date.",
    dateISO:icon_warning+ "Please enter a valid date (ISO).",
    number:icon_warning+ "Please enter a valid number.",
    digits:icon_warning+ "Please enter only digits.",
    creditcard:icon_warning+ "Please enter a valid credit card number.",
    equalTo:icon_warning+ "Please enter the same value again.",
    accept:icon_warning+ "Please enter a value with a valid extension.",
    maxlength:icon_warning+ jQuery.validator.format("Please enter no more than {0} characters."),
    minlength:icon_warning+ jQuery.validator.format("Please enter at least {0} characters."),
    rangelength:icon_warning+ jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range:icon_warning+ jQuery.validator.format("Please enter a value between {0} and {1}."),
    max:icon_warning+ jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min:icon_warning+ jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});
$('#arrow').find('img').attr('src', arrow_up);
$('#arrow').css('margin-top', '0px');
$('#arrow').on('click', '.arrow-up', function(event){
    event.preventDefault();
    $('#arrow').find('img').attr('src',arrow_down);
    $('#arrow').find('img').removeClass('arrow-up').addClass('arrow-down');
    $('#top-card').addClass('card-top-up');
    $('#down-card').addClass('card-bottom-down');
    $('#arrow').css('margin-top', '0px');
    $('.message-top').removeClass('d-block').addClass('d-none');
});

$('#arrow').on('click', '.arrow-down', function(event){
    event.preventDefault();
    $('#arrow').find('img').attr('src',arrow_up);
    $('#arrow').find('img').removeClass('arrow-down').addClass('arrow-up');
    $('#top-card').removeClass('card-top-up');
    $('#down-card').removeClass('card-bottom-down');
    $('#arrow').css('margin-top', '0px');
    $('.message-top').removeClass('d-none').addClass('d-block');
});
$('input[type="number"]').on('keypress', function(event){
    var charCode = (event.which) ? event.which : event.keyCode
    if ((charCode >= 48 && charCode <= 57)) {
        return true;
    }
    return false;
});

$('input[data-type="number-limit"]').on('keyup keypress', function(event){
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode >= 48 && charCode <= 57) || jQuery.inArray( charCode, [46,97,101,105,111,117] ) !== -1) {
        if(charCode == 46){
            $(this).prev('input').focus();
        }else {
            $(this).next('input').focus();
        }
        return true;
    }
    return false;
});

$('input[data-type="solo-text"]').on('keypress', function(event){
    var charCode = (event.which) ? event.which : event.keyCode
    if ((charCode >= 48 && charCode <= 57)) {
        return false;
    }
    return true;
});

$('a[data-action="none-click"]').on('click', function(event){
    event.preventDefault();
    let click = $(this).data('click');
    $(click).click();
});

jQuery.validator.addMethod("unique", function(value, element, params) {
    var prefix = params;
    var selector = jQuery.validator.format("[name!='{0}'][unique='{1}']", element.name, prefix);
    var matches = new Array();
    $(selector).each(function(index, item) {
        if (value == $(item).val()) {
            matches.push(item);
        }
    });

    return matches.length == 0;
}, jQuery.validator.format(icon_warning+"Este campo debe ser distinto al anterior"));

$(document).on('click','div[data-see-password="show"]', function (e) {
    e.preventDefault();
    $(this).attr('data-see-password', 'hidden');
    $(this).parent().parent().find('input').attr('type','text');
})
$(document).on('click','div[data-see-password="hidden"]', function (e) {
    e.preventDefault();
    $(this).attr('data-see-password', 'show');
    $(this).parent().parent().find('input').attr('type','password');
})