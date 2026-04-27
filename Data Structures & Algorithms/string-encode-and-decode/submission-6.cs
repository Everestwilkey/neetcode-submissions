public class Solution {

    public string Encode(IList<string> strs) {
        StringBuilder sb = new StringBuilder();
        if(strs.Count == 0){
            return "";
        }
        foreach(string item in strs){
            int len = item.Length;
            string num = len.ToString("D4");
            sb.Append(num);
            sb.Append(item);

        }
        return sb.ToString();
    }

    public List<string> Decode(string s) {
        string decoded = s;
        var done = false;
        List<string> results = new List<string>();
        int i = 0;
        string decodestring = "";
        string strlen = "";
        int len = 0;
        if(decoded != null && decoded != ""){
        while(!done){
            if(len != 0 ){
                decodestring += decoded[i];
                i++;
                len--;
                if(len == 0 && i > 1 ){
                    results.Add(decodestring);
                    decodestring = "";
                    strlen = "";
                }
            }
            else if (len == 0 ){
                 strlen += decoded[i];
                 strlen += decoded[i + 1];
                 strlen += decoded[i + 2];
                strlen += decoded[i + 3];
                 len = int.Parse(strlen);
                i++;
                i++;
                i++;
                i++;
                if(len == 0){
                   results.Add(decodestring);
                }
            }
    
            if(i >= decoded.Length){
                done = true;
            }
        }
        }
       
        return results;
   }
}
