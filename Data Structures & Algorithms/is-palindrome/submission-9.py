class Solution:
    def isPalindrome(self, s: str) -> bool:
        orignal = []
        reorg   = []
        for letter in s:
            if letter == " " or letter =="." or letter == "?" or letter == "!" or letter == "'" or letter == "," or letter == ":" or letter == ";":
                continue
            else:
                orignal.append(letter.lower())
        for letter in orignal:
            reorg.insert(0,letter)
        if str(reorg) == str(orignal):
            return True
        else:
            print(str(reorg))
           
            return False
        