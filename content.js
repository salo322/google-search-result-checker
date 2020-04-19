chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
          if (request.greeting == "hello"){
           
            let button = document.createElement('input');
                button.type = 'checkbox';
                button.className = 'checkButton';
            let label = document.createElement('label');
                label.appendChild(document.createTextNode('Select all'));
                
            let append = document.querySelector('#ucs');
                append.appendChild(button);
                append.appendChild(label);
         $('.checkButton').click(function() {
          $('input:checkbox').not(this).prop('checked', this.checked);
                   
                  });


            let input = document.createElement('input');
                input.type = 'checkbox';
                $('.LC20lb').prepend(input);
                
              

            let copyButton = document.createElement('input');
                copyButton.type = 'submit';
                copyButton.value = 'copy to clipboard';
                copyButton.className = 'copy';
                append.appendChild(copyButton);

                
                
                $( ".copy" ).click(function() {
                    var inp = $("<input>");
                    $("body").append(inp);
                    var str = ""
                  
                    $('.LC20lb').filter(':has(:checkbox:checked)').each(function() {                     
                       str+= $(this).text()
                    })
                  
                    inp.val(str).select();
                    document.execCommand("copy");
                    inp.remove();
                  })
                  }
    });


