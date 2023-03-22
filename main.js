$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#cancel-button').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();

        const urlNewImage = $("#new-image-addres").val();
        const newItem = $('<li style="display: none"></li>');

        $(` <img src="${urlNewImage}"/>`).appendTo(newItem);
        $(` <div class="overlay-image-link">
                <a href="${urlNewImage}" title="Full Size Image" target="_blank">Full Size image</a>
            </div>
        `).appendTo(newItem);

        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);
        $('#new-image-addres').val('');
    })
})

