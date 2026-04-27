public class Solution {
    public int[]checktarget(int i,int j,int[] nums,int target){
                if(j == nums.Length ){
        
                    return null;
                 }
                if(i != j && nums[i] + nums[j] == target){
                    return new int[] {i,j};
                 }

                 else {
                    j++;
                   return checktarget(i,j,nums,target);
                 }
            }
    public int[] TwoSum(int[] nums, int target) {
        
        for(int i = 0; i < nums.Length; i++){
            int j = 0;
           int [] item = checktarget(i,j,nums,target);
           if(item != null){
            return item;
           }
           else{
            continue;
           }
        }
        return null;
    }
}

