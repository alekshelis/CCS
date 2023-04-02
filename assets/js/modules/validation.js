import 'jquery-validation';

const ELEMENTS_SELECTOR = {
    form: '[data-myform]',
};

export default function () {
    $('[data-myform]').each((i,e)=> {
        $(e).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                surname: {
                    required: true,
                    minlength: 2,
                },
                email: {
                    required: true,
                },

                select1: { 
                    required: true,
                },

                phone: {
                    required: true,
                    minlength: 11,
                }
            },
            messages: {
                name: {
                    required: 'Обязательное поле',
                    minlength: 'Имя должно быть больше 1го символа',
                },
                surname: {
                    required: 'Обязательное поле',
                    minlength: 'Фамилия должна быть больше 1го символа',
                },
                email: {
                    required: 'Обязательное поле',
                    email: 'E-mail указан неверно',	
                },

                select1: {
                    required: 'Выберете специализацию!',	
                },

                phone: {
                    required: 'Обязательное поле',
                    minlength: 'Телефон указан неверно',
                },
            }
        });
        
    })
}