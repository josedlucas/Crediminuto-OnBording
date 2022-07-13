let form = $('#form-fecha-pago');
form.validate({
    rules:{
        'fecha-pago':{
            required:true,
        }
    },
    messages:{
        'fecha-pago':{
            required:icon_warning+ 'Este campo es requerido.',
        }
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback pl-16-px-md pl-10-px aling-items-center d-flex mt-10-px-md mt-10-px');
        element.closest('.form-group').append(error);
        $(element).parent().append(error);
        $(element).prev().addClass('text-warning');
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
        $(element).prev().addClass('text-warning');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        $(element).prev().removeClass('text-warning');
    },
    submitHandler: function(form) {

    }
});
$('select').on('keyup change', function (event) {
    if(form.valid()){
        $('.continuar-btn').removeAttr("disabled");
    }else {
        $('.continuar-btn').attr("disabled", true);
    }
});