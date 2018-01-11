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

                     var remove_button = $('<img class="buttons" id="remove" width="70" height="70" src="images/remove.png"/>');
                    $('<li>').text(zadanie).prependTo('#list').addClass('task');
                    $('#list :nth-child(1)').append(tick_button).append(edit_button).append(remove_button);

                    $('#task').val('');
                    $('.alert').hide();

                    $('#list').click(function(event) {

                        
                            if (event.which = '#remove')   {
                                var parent = event.target.parentNode;
                                 $(parent).remove();
                                  console.log(parent); } 
                            });
                          

                        };
                    });
                };



            /*  if (number == 0) 
                   $('<h2>').text('Brak zadań!').after('#menu');
              else $('h2').remove(); */
        $(document).ready(main);
