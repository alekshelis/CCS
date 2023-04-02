export default function () {
    const range = $('.range__line');
    let rangeNumbers = $('.range__title b');

    // range.oninput = function () {
    //     // rangeNumbers.html = range.val + '%';
    //     console.log('123')
    // }
    range.on('input', function () {
        rangeNumbers.text($(this).val()+' %')
    });
}