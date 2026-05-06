class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let right = 0
        let left = numbers.length - 1
        while(right < left){
           
            
            if(numbers[right] + numbers[left] == target){
                return [right + 1, left + 1]
            }
            else if(numbers[right] + numbers[left] > target){
                left--
                continue
            }
            else if(numbers[right] + numbers[left] < target){
                right++
                continue
            }
               
               
            }
    }
}
