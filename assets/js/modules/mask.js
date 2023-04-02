import Inputmask from "inputmask";

const ELEMENTS_SELECTOR = {
    phone: '[data-phone]',
    email: '[data-email]',
    date: '[data-date]',
};

export default function () {
    Inputmask("+7(999)999-99-99",{ "clearIncomplete": true}).mask($(ELEMENTS_SELECTOR.phone))
    Inputmask({'alias': 'email'}).mask('[data-placeholder-email]',).mask($(ELEMENTS_SELECTOR.email))
    Inputmask("99.99.9999",{ "clearIncomplete": true}).mask($(ELEMENTS_SELECTOR.date))
}