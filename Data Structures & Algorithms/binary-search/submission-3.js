class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let middelindex = (Math.floor(nums.length/ 2))
        let left = 0
        let right = nums.length - 1
        let middlevalue =  nums[middelindex]
        function find(middlevalue,middelindex,target,right,left){
            console.log("step: " + left +":" + right)
            if (left > right) {
    return -1
}

            if(middlevalue <= target){
                if(middlevalue == target){
                    return middelindex
                }
                left = middelindex + 1
                console.log("middelindex before move: " + middelindex)
                console.log("middelval before move: " + middlevalue)
                middelindex = Math.floor((left+ right)/2)
                middlevalue = nums[middelindex]
                console.log("left move: " + left)
                return find(middlevalue,middelindex,target,right,left)
            }
            if(middlevalue >= target){
                right = (middelindex - 1)
                 console.log("middelindex before move: " + middelindex)
                 console.log("middelval before move: " + middlevalue)
                middelindex = Math.floor((left+ right)/2)
                middlevalue = nums[middelindex]
                console.log("right move: " + right)
                return find(middlevalue,middelindex,target,right,left)
            }
           
        }
        let output = find(middlevalue,middelindex,target,right,left)
        return output
    }
}
