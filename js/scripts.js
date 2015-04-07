var anagram = function(input_word, possible_anagram)
{
    var split_input_word = input_word.split("").sort().join("");
    var output_anagrams = [];

    var split_possible_anagram = possible_anagram.split(" ");
      for(var i = 0; i<split_possible_anagram.length;i++)
      {
          var split_word = split_possible_anagram[i].split("").sort().join("");


          if(split_input_word === split_word)
          {
              output_anagrams.push(true);
          }
          else
           {
              output_anagrams.push(false);
           }
      }
    return output_anagrams;
};
