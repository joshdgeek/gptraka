const quotes = [
    "Educaton is the key to success",
    "A good CGPA is an edge for your future career",
    "Patience and Perseverance,for what is to come, never give up",
    "Let a vision of your future always be at the back of your mind",
    "Train your mind to be the best",
    "sometimes your best isnt enough",
    "Believe in yourself",
    "Let Excelence become your habit",
    "Purpose is the foundation, why are you here ?",
    "You grades could always be better",
    "Strive to be the imposssible",
    "Work harder if it's worth it"
]

function renderQuotes(){
    let item = quotes[Math.round(Math.random()*quotes.length -1) + 1];
    return (item) 
}
module.exports = renderQuotes