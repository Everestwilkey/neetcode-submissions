public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        Dictionary<int,int> map = new Dictionary<int,int>();
        foreach (int number in nums){
            if(map.ContainsKey(number)){
                map[number]++;
            }
            else{
                map.Add(number,1);
            }
        }
        var sortedmap = map.OrderByDescending(x => x.Value);
        List<int> result = new List<int>();
        foreach (KeyValuePair<int,int> item in sortedmap){
            if(result.Count < k){
                result.Add(item.Key);
                
            }
        }
        return result.ToArray();
    }
}
