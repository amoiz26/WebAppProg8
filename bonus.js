
const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const firstName = 'Moiz';
const recipeName = 'Mango Smoothie';

// Array of ingredient objects
const ingredients = [
    { name: 'Mango', amount: 2, unit: 'cups' },
    { name: 'Milk', amount: 1, unit: 'cup' },
    { name: 'Honey', amount: 2, unit: 'tablespoons' },
    { name: 'Ice', amount: 4, unit: 'cubes' },
    { name: 'Sugar', amount: 1, unit: 'teaspoon' }
];

// Generate a random ingredient to leave out
const randomIndex = Math.floor(Math.random() * ingredients.length);
const unusedIngredient = ingredients[randomIndex];

// Find ingredients that will be used
const usedIngredients = ingredients.filter(
    (ingredient, index) => index !== randomIndex
);

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
        return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });

    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Moiz's Mango Smoothie</title>
    </head>
    <body>
        <h1>Moiz's Mango Smoothie Recipe</h1>
        <p>Created by ${firstName}</p>
        <p>Welcome to my random ingredient recipe!</p>

        <h2>Ingredients Used</h2>
        <ul>
    `;

    usedIngredients.forEach(ingredient => {
        html += `<li>${ingredient.amount} ${ingredient.unit} of ${ingredient.name}</li>`;
    });

    html += `
        </ul>
        <div>
            <h2>Randomly Removed Ingredient</h2>
            <p>${unusedIngredient.name} was not used in this recipe.</p>
        </div>
    </body>
    </html>
    `;

    res.end(html);
});

server.listen(port, hostname, () => {
    console.log(`Bonus server running at http://${hostname}:${port}/`);
});
