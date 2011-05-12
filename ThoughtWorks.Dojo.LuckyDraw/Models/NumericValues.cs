using System.Collections.Generic;

namespace ThoughtWorks.Dojo.LuckyDraw.Models
{
    public static class NumericValues
    {
        private static readonly IDictionary<string, short> Map = new Dictionary<string, short>
                                                               {
                                                                   {"A", 1}
                                                               };

        public static short FromString(string numericValue)
        {
            return Map.ContainsKey(numericValue) ? Map[numericValue] : short.Parse(numericValue);
        }
    }
}