var tw = {};
tw.card = function (number, suite) {
    var api = {},
        data = {};

    data.number = number;
    data.suite = suite;

    function description() {
        return (data.number + ' of ' + data.suite);
    }

    function random(max) {
        return Math.floor(Math.random() * max);
    }

    function createCardElement() {
        return $('<div>', { 'class': 'card ' + data.suite }).
            append(createNumberElement()).
            append(createSuiteElement()).
            css('-webkit-transform', 'rotate(' + (random(20) - 10) + 'deg)').
            css('display', 'none');
    }

    function createNumberElement() {
        return $('<span>', {
            'class': 'number',
            'html': data.number
        });
    }

    function createSuiteElement() {
        return $('<span>', {
            'class': 'suite',
            'html': data.suite
        });
    }

    function cardElement() {
        return (data.cardElement = data.cardElement ||
                createCardElement());
    }

    api.render = function (container) {
        container.append(cardElement().slideDown('slow'));
    };

    api.hide = function () {
        cardElement().detach();
    };

    return api;
};

tw.deck = (function () {
    var api = {},
        data = {};

    data.mapToLetter = {
        '1': 'A',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': 'J',
        '12': 'Q',
        '13': 'K'
    };

    data.suites = {
        '1': 'hearts',
        '2': 'diamonds',
        '3': 'clubs',
        '4': 'spades'
    };

    function createCards() {
        data.cards = [];
        for (var suite = 1; suite <= 4; suite++) {
            for (var number = 1; number <= 13; number++) {
                data.cards.push(
                    tw.card(
                        data.mapToLetter['' + number],
                        data.suites['' + suite]
                    )
                );
            }
        }
    }

    function random(max) {
        return Math.floor(Math.random() * max);
    }

    api.render = function (container) {
        data.cards || createCards();
        $.each(data.cards, function (i, card) {
            card.render(container);
        });
    };

    api.shuffle = function (container) {
        container.html('');
        createCards();
        for (var count = 0; count < 1000; count++) {
            var random1 = random(52);
            var random2 = random(52);
            var temp = data.cards[random1];
            data.cards[random1] = data.cards[random2];
            data.cards[random2] = temp;
        }

        api.render(container);
    };

    api.reorganize = function (container) {
        container.html('');
        createCards();
        api.render(container);
    };

    return api;
})();

function documentReady() {
    var container = $('#container');
    tw.deck.render(container);

    $('#shuffle').click(function () {
        tw.deck.shuffle(container);
    });

    $('#reorganize').click(function () {
        tw.deck.reorganize(container);
    });

    $('#droppable').droppable();
}

$(documentReady);