class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s == null && t != null){
            return false
        }
        if(s != null && t == null){
            return false
        }
        let seen = new Map()
        let seen1 = new Map()
        for(let letter of s){
            if(seen.has(letter)){
                let count = seen.get(letter)
                seen.set(letter, count + 1 )
            }
            else{
                seen.set(letter, 1)
            }
        }
        for(let letter of t){
            if(seen1.has(letter)){
                let count = seen1.get(letter)
                seen1.set(letter, count + 1 )
            }
            else{
                seen1.set(letter, 1)
            }
        }
       if(seen.size == seen1.size){
            let match  = true
            for(let key of seen.keys()){
                if(seen.get(key) != seen1.get(key) || seen.get(key) == undefined || seen1.get(key) == undefined){
                    return false
                }
                else{
                    continue
                }
            }
            if(match == true){
                return true
            }
       }
       return false

    }
}
