var main = function () {
    $('.alert').hide();

    $('#add').click(function () {
        var zadanie = $('#task').val();

        console.log(1);

        if (zadanie.length == 0) {
            $('.alert').show();
        } else {

            var tick_button = $('<img class="buttons" id="tick_button" width="70" height="70" src="images/tick.png"/>');

            var edit_button = $('<img class="buttons" id="edit_button" width="70" height="70" src="images/edit.png"/>');

            let remove_button = $('<button id="remove"></button>');

            $('<li>').text(zadanie).prependTo('#list').addClass('task');
            $('#list :nth-child(1)').append(tick_button).append(edit_button).append(remove_button);

            $('#task').val('');
            $('.alert').hide();
        }
    });

    $('#remove').click(function () {
        // var remove_parent = this.parentNode;

        console.log(5);

    });

    /*  if (number == 0) 
           $('<h2>').text('Brak zadań!').after('#menu');
      else $('h2').remove(); */
}


$(document).ready(main);
