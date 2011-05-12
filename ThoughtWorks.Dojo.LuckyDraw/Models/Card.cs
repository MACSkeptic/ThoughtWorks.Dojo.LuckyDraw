namespace ThoughtWorks.Dojo.LuckyDraw.Models
{
    public class Card
    {
        private readonly short _numericValue;
        private readonly string _suite;

        public Card(string input)
        {
            _suite = Suites.FromString(input[1].ToString());
            _numericValue = NumericValues.FromString(input[0].ToString());
        }

        public short NumericValue
        {
            get { return _numericValue; }
        }

        public string Suite
        {
            get { return _suite; }
        }
    }
}