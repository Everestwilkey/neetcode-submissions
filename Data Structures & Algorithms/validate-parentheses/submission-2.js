class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    let open = [];
    let items = s.split("")
    if((items.length % 2) != 0){
            return false
    }

    for(let i = 0; i < items.length; i++){
        
        if(items[i] ==  "[" || items[i] ==  "{"|| items[i] ==  "(" )
        {
            open.push(items[i])
            continue
        }
        if(items[i] ==  "]" || items[i] ==  ")"|| items[i] == "}"){
            if (items[i] == ")" && open.at(-1) == "(" ){
                open.pop()
                continue
            }
            if (items[i] == "}" && open.at(-1) == "{" ){
                open.pop()
                continue
            }
            if (items[i] == "]" && open.at(-1) == "[" ){
                open.pop()
                continue
            }
            else{
            return false 
            }
        }
        
    }
    
    if(open.length != 0){
        return false
    }
    else {
        return true 
    }
    }
}
