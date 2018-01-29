var main = function () {
    $('.alert').hide();
    var empty;
    
    $('#add').click(function () {
        var zadanie = $('#task').val();

        if (zadanie.length === 0) {
            $('.alert').show();
        } else {
            
             var empty = $('#list').children('li').length;
        if (!empty)
       console.log('brak zadań!');

            $('#task').val('');
            $('.alert').hide();

            var item = $('<li>').text(zadanie);

            var buttons_bar = $('<div>').addClass('buttons_bar');

            var tick_button = $('<img class="button" data-action="tick"  src="images/tick.png"/>');

            var edit_button = $('<img class="button" data-action="edit" src="images/edit.png"/>');

            var remove_button = $('<img class="button" data-action="remove" src="images/remove.png"/>');

            $(buttons_bar).append(tick_button).append(edit_button).append(remove_button);
            $(item).append(buttons_bar).prependTo('#list').addClass('work');
        };
    });


    $('#list').click(function (event) { // + wciśnięcie ENTER akceptuje ???
        var parent = event.target.parentNode.parentNode;

        if (event.target.dataset.action === 'tick') {
            $(parent).toggleClass('tick');
        }


        if (event.target.dataset.action === 'edit') {
            console.log(3);

            $(parent).html(function () {

                return $('<input class="input_edit" type="text" name="editt_place" data-place="edit_place" placeholder="' + $(this).text() + '"/>');

            });

            $('edit_place').keypress(function (e) {
                if (e.which === 13) {
                    var edit_text = $('edit_place').val();
                    $('.work').text(edit_text).prependTo('#list');

                    console.log(edit_text);
                }
            });
        };

        if (event.target.dataset.action === 'remove') {
            $(parent).remove();
        }

        var empty = $('#list').children('li').length;
        if (!empty)
       console.log('brak zadań!');
    });
    
    
   
};

$(document).ready(main);
