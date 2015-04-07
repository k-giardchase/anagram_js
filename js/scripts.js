var anagram = function(input_word, possible_anagrams)
{
    var split_input_word = input_word.split("").sort().join("");
    var output_anagrams = [];

    var one_possible_anagram = possible_anagrams.split(" ");
      for(var i = 0; i<one_possible_anagram.length;i++)
      {
          var anagram_word = one_possible_anagram[i];
          var anagram_guinea_pig = anagram_word.split("").sort().join("");


          if(anagram_guinea_pig.indexOf(split_input_word) !== -1)
          {
              output_anagrams.push(anagram_word);
          }
      }
    return output_anagrams;
};

$(document).ready(function(){
    $('form#anagram_form').submit(function(event){
        var comparison_word = $("input#original_word").val();
        var anagram_choices = $("input#comparison_words").val();

        var result = anagram(comparison_word, anagram_choices);

        $(".anagram_outputs").empty();
        $("#comparison_word").empty();

        for(var i = 0; i < result.length; i++) {
            $("ul.anagram_outputs").prepend('<li>'+ result[i] + '</li>');
        }
        $("#comparison_word").text(comparison_word);
        $(".results").show().fadeIn(3000);
        event.preventDefault();
    });
});












/*

<form role="form">
    <div class="form-group">
        <label for="original_word">Enter word to compare: </label>
        <input name="original_word" id="original_word" type="text" placeholder="coffee"></input>
    </div>
    <div class="form-group">
        <label for="comparison_words">Enter comparison words: </label>
        <input name="comparison_words" id="comparison_words" type="text" placeholder="toffee"></input>
    </div>
<button class="btn btn-primary btn-xs">Click</button>
</form>

*/
