const prev = document.querySelector('.prev-list'),
    next = document.querySelector('.new-list'),
    buttons = document.querySelectorAll('button'),
    heading = document.querySelector('.heading');

const stocks = [
    { symbol: 'ANA', price: 270, title: 'First' },
    { symbol: 'XYZ', price: 130, title: 'Second' },
    { symbol: 'OLP', price: 168, title: 'Third' }
];

prev.innerHTML = stocks.map(item => {
    return `<li><strong>${item.title}</strong> - ${item.symbol} - <i>${item.price}</i></li>`;
}).join('');

function result(trigger) {
    const type = trigger.toString();
    const filteredStocks = stocks
        .filter(function(stock) {
            return stock.price >= 150
        })
        .map(function(stock) {
            return stock[type]
        });

    heading.innerHTML = `<strong>Result:</strong> (Filtered List of <b><i>${type}s</i></b> having <br>price greater than 150)`;
    next.innerHTML = filteredStocks.map(item => {
        return `<li><strong>${item}</strong></li>`;
    }).join('');
}


buttons.forEach((btn) => {
    const type = btn.dataset.type;
    btn.addEventListener('click', () => result(type));
})