$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(00) 00000-0000'
});
$('#cpf').mask('000.000.000-00', {
    placeholder: '000.000.000-00'
});
$('#cep').mask('00000-000', {
    placeholder: '000000-000'
});
$('form').validate({
    rules: {
        nome: {
            required: true,
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
        messages: {
            nome: 'Por favor, insira seu nome completo!',
            email: 'Por favor, insira um email válido',
            telefone: 'Por favor, insira um telefone válido',
            endereco: 'Por favor, insira um endereço válido',
            cep: 'Por favor, insira um CEP válido',
            
        },
    },
    
    submitHandler: function(form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!")
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids()
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
    }},
})
})
        $('input[type="submit"]').click(function() {
        $('form').submit();
        })

