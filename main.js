var main = function () {
    var empty = 0;


    //FUNKCJA JEŻELI BRAK ZADAŃ
    var empty_alert = function () {
        empty = $('#list').children('li').length;
        console.log(empty);

        if (empty !== 0) {
            $('#brak').slideUp(700).css('display', 'none');
        }
        else  $('#brak').slideDown(1000).css('display', 'block');
    };

    var radius_last_item = function () {
        $('#list li:last').css('border-radius', '0 0 25px 0');
    };

    // FUNKCJA DODAWANIE ZADANIA
    var add_task = function () {
        var zadanie = $('#task').val();

        if (zadanie.length === 0) {
            $('.alert').fadeIn(700).show();
        } else {
            $('#task').val('');
            $('.alert').slideUp(700, function () {
                $(this).hide();
            });

            var tick_button = $('<img class="button" data-action="tick"  src="images/tick.png"/>');

            var edit_button = $('<img class="button" data-action="edit" src="images/edit.png"/>');

            var remove_button = $('<img class="button" data-action="remove" src="images/remove.png"/>');

            var buttons_bar = $('<div>').addClass('buttons_bar').append(tick_button).append(edit_button).append(remove_button);

            var text_bar = $('<div>').text(zadanie).addClass('text_bar');

            var item = $('<li>').append(text_bar).append(buttons_bar);

            radius_last_item();

            $(item).prependTo('#list').addClass('work');
            $(item).slideDown(700).show();

            $('#list li:last').css('border-radius', '0 0 25px 0');

            empty_alert();
        };
    };


    $('#add').click(add_task);
    $('#task').keypress(function (e) {
        if (e.which === 13) {
            $('#task').submit();
            add_task();
            return false;
        };
    });


    $('#list').on('click.changeItem', function (event) {
        var parent = event.target.parentNode.parentNode;
        // console.log(parent);


        // BUTTON "ZROBIONE"
        if (event.target.dataset.action === 'tick') {
            $(parent).slideDown(700).toggleClass('tick');

        }

        // BUTTON "EDYCJA"  // TODO fix edition
        if (event.target.dataset.action === 'edit') {
            var edit = event.target;
            // console.log(event.target);
            var remove = $(edit).next();
            //  console.log(remove);
            var tick = $(edit).prev();
            console.log(tick);

            $(remove).attr('data-action', 'none');
            $(edit).attr('data-action', 'none');
            $(tick).attr('data-action', 'none');

            $(edit).animate({
                opacity: 0.3,
            }, 500);
            $(remove).animate({
                opacity: 0.3,
            }, 500);


            var parent_edit = event.target.parentNode;
            var text_bar = parent_edit.previousSibling;
            //console.log('edit: ', text_bar);

            //TODO tekst w placeholderze
            var edit_place = $('<div><input type="text" name="editt_place2" id="edit_place" placeholder="' + $(parent).text() + '"/></div>');
            //console.log(parent);
            console.log(text_bar.textContent);
            text_bar.textContent = '';

            $(parent).append(edit_place);
            // var tick_edit = $('<img class="button" data-action="tick_edit"  src="images/tick.png"/>');


            var add_edit = function () {
                //var parent = this.parentNode.parentNode;
                var edit_text = $('#edit_place').val();
                $(edit_place).remove();
                $(parent).prepend(edit_text);

                $(edit).animate({
                    opacity: 1,
                }, 500);
                $(remove).animate({
                    opacity: 1,
                }, 500);

                $(remove).attr('data-action', 'remove');
                $(edit).attr('data-action', 'edit');
               // $(tick).attr('data-action', 'tick');
            };

            $(tick).click(add_edit);
            $('#list').keypress(function (e) {
                if (e.which === 13) {
                    $('#edit_place').submit();
                    add_edit();
                    return false;
                }
            });
        };


        //BUTTON "USUŃ"
        if (event.target.dataset.action === 'remove') {
            $(parent).slideUp(700, function () {
                $(parent).remove();
                radius_last_item();
                empty_alert();
            });
        }
    });
};

$(document).ready(main);
