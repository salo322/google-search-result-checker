
            let button = document.createElement('input');
                button.type = 'checkbox';
                button.className = 'checkButton';
            let label = document.createElement('label');
                label.appendChild(document.createTextNode('Select all'));
                
            let append = document.querySelector('#ucs');
                append.appendChild(button);
                append.appendChild(label);
          


            let input = document.createElement('input');
                input.type = 'checkbox';
                $('.LC20lb').prepend(input);
                $('.l').prepend(input);
                $('.checkButton').click(function() {
                $('input:checkbox').not(this).prop('checked', this.checked);
                            
                           });
                
              

            let copyButton = document.createElement('input');
                copyButton.type = 'submit';
                copyButton.value = 'copy to clipboard';
                copyButton.className = 'copy';
                append.appendChild(copyButton);

                
                
                $( ".copy" ).click(function() {
                    var inp = $("<textarea>");
                    $("body").append(inp);
                    
                    var str = "";
                    
                    $('a').filter(':has(:checkbox:checked)').each(function() {  
                        let string = $(this).attr('href') + "\n";                   
                        str+= string ;
                        
                        
                    });
                
                    inp.val(str).select();
                    document.execCommand("copy");
                    inp.remove();
                })
               

