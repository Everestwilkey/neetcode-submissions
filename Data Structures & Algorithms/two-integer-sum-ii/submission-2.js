class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let output = []
        for(let i = 0; i < numbers.length; i++){
            let item = numbers[i]
            let number = target - item
            console.log(number)
            if(numbers.includes(number)){
                let val1 = i
                console.log(val1)
                let val2 = numbers.indexOf(number) 
                val1 += 1
                console.log(val1)
                val2 += 1
                if(val1 == val2){
                    continue
                }
                output = [val1,val2]

                break
            }
        }
        return output
    }
}
