class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.replace(" ","")
        s = s.replace(",","")
        s = s.replace("'","")
        s = s.replace(".","")
        s = s.replace(":","")
        s = s.replace(";","")
        s = s.replace("?","")
        s = s.replace("!","")
        s = s.lower()
        slist = list(s)
        if len(slist) == 0 or len(slist) == 1:
            return True
        count = len(slist) - 1
        half = (count + 1) // 2
        j = count
      
        for i in range(half):
            if slist[i] != slist[j]:
                 return False
            else:
                j -= 1
        return True
