using NSpec;
using NUnit.Framework;
using ThoughtWorks.Dojo.LuckyDraw.Models;

namespace ThoughtWorks.Dojo.LuckyDraw.Test
{
    [TestFixture]
    public class CardSpec
    {
        [Test, Sequential]
        public void ShouldBeCreatedFromAnInputStringWithCommonNumbers(
            [Values("2D", "3D", "4D")] string input,
            [Values(2, 3, 4)] short theExpectedNumericValue,
            [Values("diamonds", "diamonds", "diamonds")] string theExpectedSuite)
        {
            var card = new Card(input);
            card.Suite.should_be(theExpectedSuite);
            card.NumericValue.should_be(theExpectedNumericValue);
        }

        [Test]
        public void ShouldBeCreatedFromAnInputStringForAnAce()
        {
            var card = new Card("AS");
            card.Suite.should_be("spades");
            card.NumericValue.should_be(1);
        }
    }
}