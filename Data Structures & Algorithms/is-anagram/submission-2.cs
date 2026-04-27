public class Solution {
    public bool IsAnagram(string s, string t) {

        if(s.Length != t.Length){
            return false ;
        }
        List<char> list1 = s.ToList();
        List<char> list2 = t.ToList();
        int end = s.Length;
        List<char> letters = new List<char>();
        foreach(char letter in list1){
            foreach(char letter2 in list2){
                if(letter == letter2){
                    letters.Add(letter);
                    list2.Remove(letter);
                    break;
                }
            }
        }
        if(letters.Count() == s.Count()){
          Console.WriteLine(letters);
            return true;
        }
        else{
            return false;
        }
    }
}
