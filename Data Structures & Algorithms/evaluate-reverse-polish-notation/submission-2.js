class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let operator = []
        let operand  = []
        let total = 0
        function evaluate(item1,item2,method){
            item1 = parseInt(item1)
            item2 = parseInt(item2)
            if(method == "+"){
                return item1 + item2
            }
            if(method == "-"){
                return item1 - item2
            }
            if(method == "*"){
                return item1 * item2
            }
            if(method == "/"){
                return item1 / item2
            }
        }
        tokens.forEach(item => {
            if(item  ==  "+" ||item  ==  "-" || item  ==  "*" || item  ==  "/" ){
                let val1 = operand.pop()
                let val2 = operand.pop()
                let total = evaluate(val2,val1,item)
                operand.push(total)
            }
            else{
                operand.push(item)
            }
        })  
    return Math.trunc(operand.pop())
    }
   
}
