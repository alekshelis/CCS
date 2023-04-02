
export default function () {
    $('.header__burgerbtn').click(e=>{
        $('.aside__menu').addClass('aside__menu--active')
        $('.aside__overlay').addClass('aside__overlay--active')
    })
    $('.menu-header__button').click(e=>{
        $('.aside__menu').removeClass('aside__menu--active')
        $('.aside__overlay').removeClass('aside__overlay--active')
    })
    $('.aside__overlay').click(e=>{
        $('.aside__menu').removeClass('aside__menu--active')
        $('.aside__overlay').removeClass('aside__overlay--active')
    })
}
