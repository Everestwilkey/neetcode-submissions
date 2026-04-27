class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) == len(t) and s is not None:
            hasseen = {}
            word1 = sorted(list(s))
            word2 = sorted(list(t))
            if word1 == word2:
                return True 
            else:
                return False
        else:
            return False         