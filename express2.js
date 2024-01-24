//required import
import express from 'express';
//setup 
const app = express();
app.set('port', process.env.PORT || 3000);
//home routr
app.get('/', (req, res) =>{
    res.type('text/plain');
    res.send("Hello World");
});
//about route
app.get('/about', (req, res) =>{
    res.type('text/plain');
    res.send("About Page");
});

// Route to match multiple URL patterns
app.get(/^\/user(name)?$/, (req, res) => {
    res.type('text/plain');
    res.send('Regular Expression Route (This web page matches two url patterns) ');
});


//404 message
app.use((req, res) =>{
    res.type('text/plain');
    res.status(404).send('404 - Not Found');
});

// Setting up the server 
const PORT = process.env.PORT || 3000;


// Starting the server and logging a message
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
