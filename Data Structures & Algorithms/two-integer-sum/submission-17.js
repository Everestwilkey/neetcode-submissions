class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let pair = []
        let leftover = 0
    for( let i = 0 ; i < nums.length; i++){
        leftover  =  target- nums[i] 
        if(nums.includes(leftover)){
           if(i == nums.indexOf(leftover)){
                continue
           }
           else{
             pair.push(i)
            pair.push(nums.indexOf(leftover))
            break
           }
        }
        else{
            continue 
        }
    }
    return pair
}
}
