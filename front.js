
    document.addEventListener('DOMContentLoaded', function(){
    var calendarE1 = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarE1,{
        initialView:'dayGridMonth',
        events:[
            {
                title : 'Event 1',
                start : '2024-08-25'
            },
            {
                title : 'Event 2',
                start : '2024-08-28'
            }
        ]
    });
    calendar.render();
});

motivational_quotes = [
    "The only way to do great work is to love what you do.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The best way to predict the future is to invent it.",
    "Your time is limited, don’t waste it living someone else’s life.",
    "You miss 100% of the shots you don’t take.",
    "The journey of a thousand miles begins with one step.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you’re halfway there.",
    "Act as if what you do makes a difference. It does.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don’t watch the clock; do what it does. Keep going.",
    "The way to get started is to quit talking and begin doing.",
    "You don’t have to be great to start, but you have to start to be great.",
    "In the middle of every difficulty lies opportunity.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Opportunities don't happen. You create them.",
    "The only impossible journey is the one you never begin.",
    "Don’t let yesterday take up too much of today.",
    "You are never too old to set another goal or to dream a new dream.",
    "You do not find the happy life. You make it.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
    "The only place where success comes before work is in the dictionary.",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "The best revenge is massive success.",
    "I find that the harder I work, the more luck I seem to have.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "To be the best, you must be able to handle the worst.",
    "We may encounter many defeats but we must not be defeated.",
    "Don’t be afraid to give up the good to go for the great.",
    "You only live once, but if you do it right, once is enough.",
    "The purpose of our lives is to be happy.",
    "Life is what happens when you’re busy making other plans.",
    "Get your facts first, then you can distort them as you please.",
    "You must be the change you wish to see in the world.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "The best way to predict your future is to create it."
]
motivational_quotes_author=[
    "Steve Jobs",
    "Eleanor Roosevelt",
    "Confucius",
    "Franklin D. Roosevelt",
    "Alan Kay",
    "Steve Jobs",
    "Wayne Gretzky",
    "Lao Tzu",
    "Winston Churchill",
    "Theodore Roosevelt",
    "William James",
    "Henry David Thoreau",
    "Sam Levenson",
    "Walt Disney",
    "Zig Ziglar",
    "Albert Einstein",
    "William Butler Yeats",
    "George Addair",
    "Chris Grosser",
    "Tony Robbins",
    "Will Rogers",
    "C.S. Lewis",
    "Camilla E. Kimball",
    "Dalai Lama",
    "Christian D. Larson",
    "A.A. Milne",
    "Vidal Sassoon",
    "Roy T. Bennett",
    "C.S. Lewis",
    "Frank Sinatra",
    "Thomas Jefferson",
    "Winston Churchill",
    "Wilson Kanadi",
    "Maya Angelou",
    "John D. Rockefeller",
    "Mae West",
    "Dalai Lama",
    "John Lennon",
    "Mark Twain",
    "Mahatma Gandhi",
    "Oscar Wilde",
    "Peter Drucker"
]

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * motivational_quotes.length);
    document.getElementById('motivation').textContent = motivational_quotes[randomIndex];
    document.getElementById('author').textContent = "~"+motivational_quotes_author[randomIndex];

}

// Display a new quote immediately on page load
displayRandomQuote();

// Set an interval to change the quote every 5 minutes (300000 milliseconds)
setInterval(displayRandomQuote, 4000);

