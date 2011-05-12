using System.Collections.Generic;

namespace ThoughtWorks.Dojo.LuckyDraw.Models
{
    public static class Suites
    {
        private static readonly IDictionary<string, string> Map = new Dictionary<string, string>
                                                                      {
                                                                          {"S", "spades"},
                                                                          {"D", "diamonds"}
                                                                      };

        public static string FromString(string suite)
        {
            return Map[suite];
        }
    }
}