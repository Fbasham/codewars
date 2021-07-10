using System.Linq;

namespace Solution
{
  class Kata
    {
    public static int find_it(int[] seq) 
      {
      return seq.Where(e=>seq.Where(x=>e==x).Count()%2==1).ToArray()[0];
      }
       
    }
}