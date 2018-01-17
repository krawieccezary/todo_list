var main = function () {
    $('.alert').hide();

    $('#add').click(function () {
        var zadanie = $('#task').val();

        console.log(1);

        if (zadanie.length == 0) {
            $('.alert').show();
        } else {

            var tick_button = $('<img class="buttons" id="tick" width="70" height="70" src="images/tick.png"/>');

            var edit_button = $('<img class="buttons" id="edit" width="70" height="70" src="images/edit.png"/>');

            var remove_button = $('<img class="buttons" id="remove" width="70" height="70" src="images/remove.png"/>');
            $('<li>').text(zadanie).prependTo('#list').addClass('work');
            $('#list :nth-child(1)').append(tick_button).append(edit_button).append(remove_button);

            $('#task').val('');
            $('.alert').hide();

            $('#list').click(function (event) {
                var parent = event.target.parentNode;

                if (event.which === '#remove') {
                    $(parent).remove();
                    console.log(3);
                }


                if (event.which === '#edit') {

                    console.log('edit');
                    console.log(3);
                    /*  $('.selected').html(function () {

                          return '<input type="text" name="editt_place" id="edit_place" placeholder="' + $(this).text() + '"/>'; */


                    // };

                    $('#edit_place').keypress(function (e) {
                        if (e.which === 13) {
                            var edit_text = $('#edit_place').val();
                            $('.selected').text(edit_text).prependTo('#list').toggleClass('deselected');

                            console.log(edit_text);
                        }
                    });
                };


            });
        };


    });
};
/*  if (number == 0) 
       $('<h2>').text('Brak zadań!').after('#menu');
  else $('h2').remove(); */
$(document).ready(main);
