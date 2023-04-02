/**
 * Vendors
 */
import $ from 'jquery';
window.$ = $;

/**
 * Modules
 */
import btn_menu from './modules/btn_menu';
import select from './modules/select';
import validation from './modules/validation';
import mask from './modules/mask';
import range from './modules/range';

const app = {
    ready() {

        btn_menu();

        select();

        validation();

        mask();

        range();

    },

    load() {

    },

    resize() {

    },

    scroll() {

    },
};



$(() => {
    app.ready();

    $(window)
        .on('load', app.load)
        .on('resize', app.resize)
        .on('scroll', app.scroll);
});
