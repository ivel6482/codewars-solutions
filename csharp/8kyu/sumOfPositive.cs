using System;
using System.Linq;

public class Kata
{
  public static int PositiveSum(int[] arr)
  {
    // Your code here
    int sum = 0;
    foreach (int number in arr)
    {
      if (number > 0)
      {
        sum += number;
      }
    }
    return sum;
  }
}
