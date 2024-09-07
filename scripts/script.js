$(document).ready(function() {
    // JSON file
    $.getJSON('nato.json', function(data) {
        var natoAlphabet = data.nato;
        var civilianAlphabet = data.civilian;

        $('#convertButton').click(function() {
            var text = $('#textInput').val();
            var outputFormat = $('input[name="outputFormat"]:checked').val();
            var convertedList;

            switch(outputFormat) {
                case 'civilian-phonetic':
                    convertedList = convertToPhonetic(text, civilianAlphabet);
                    break;
                case 'nato-phonetic':
                    convertedList = convertToPhonetic(text, natoAlphabet);
                    break;
                default:
                    console.error('none available for use');
                    return;
            }

            displayOutputList(convertedList); 
        });

        $('#resetButton').click(function() {
            $('#outputList').empty(); 
            clearTextBox(); 
        });

        
        function clearTextBox() {
            $('#textInput').val(''); 
        }

        // converted list
        function displayOutputList(list) {
            $('#outputList').empty();
            list.forEach(function(item) {
                $('#outputList').append('<li class="list-group-item">' + item + '</li>');
            });
        }

        // convert text to phonetic 
        function convertToPhonetic(text, alphabet) {
            var phoneticList = [];
            for (var i = 0; i < text.length; i++) {
                var character = text[i].toUpperCase();
                var phoneticEquivalent = alphabet[character];
                if (phoneticEquivalent) {
                    phoneticList.push(character + ': ' + phoneticEquivalent);
                } else {
                    phoneticList.push(character + ': not in the betalpha');
                }
            }
            return phoneticList;
        }
    });
});