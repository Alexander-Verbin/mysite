
$(document).ready(function () {
    $('.edu__stitle.stitle').click(function () {
        $('.edu__info').toggleClass('edu__info--open')
    })
})

$(document).ready(function () {
    $('.exp__stitle.stitle').click(function () {
        $('.exp__info').toggleClass('exp__info--open')
    })
})
$(document).ready(function () {
    $('.general__burger').click(function () {
        $('.general__skill').toggleClass('general__skill--open')
        if ($(this).is('.js-active:not(.js-back)')) {
            $(this).addClass('js-back');
        } else if ($(this).is('.js-back')) {
            $(this).removeClass('js-back');
        } else {
            $(this).addClass('js-active');
        }
    })
})




$(document).ready(function () {
    $('.myskills__stitle.stitle').click(function () {
        $('.myskills__info').toggleClass('myskills__info--open')
    })
})
$(document).ready(function () {
    $('.othersk__stitle.stitle').click(function () {
        $('.othersk__info').toggleClass('othersk__info--open')
    })
})


$(document).ready(function () {
    $('.stitle__titles').click(function () {
        $(this)('.stitle__titles').toggleClass('stitle__titles--open')
    })
})
