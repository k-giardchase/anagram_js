describe("anagram", function(){
    it("return the single combination of the word 'a'", function(){
        expect(anagram("a", "a")).to.eql(['a']);
    })

    it("returns the anagram match for a two-character word", function() {
        expect(anagram("an", "an")).to.eql(['an']);
    })

    it("returns the anagram matches with possible anagram matches to input",function(){
        expect(anagram("eat","tea eta")).to.eql(['tea','eta']);
    })

    it("returns the anagram matches with possible anagram matches to input",function(){
        expect(anagram("eat","tza eta")).to.eql(['eta']);
    })
});
