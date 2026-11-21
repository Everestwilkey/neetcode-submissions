class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let anagram = t.split("")
        let item = s.split("") 
        if(anagram.length != item.length){
            return false
        }
        for(let i = 0 ; i<anagram.length ;i++){
            if(item.includes(anagram[i])){
                let index = item.indexOf(anagram[i])
                item.splice(index, 1)
            }
        }
      
        if(item.length == 0 ){
            return true
        }
        return false
    }
}
