const express = require("express")
const port = 3000;
const app = express();

const bodyParser = require("body-parser")
app.use(bodyParser.json())
let urlEncodeParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs')

var todos = [
    { name: "Clean" }
]
app.get('/', (request, response) => {

    response.render('todos/index', { todos: todos })

})

app.post('/add', urlEncodeParser, (request, response) => {

    if (request.body.name) todos.push(request.body);

    response.redirect('/')

})
app.get('/delete/:id', urlEncodeParser, (request, response) => {
    todos.splice(request.params.id, 1);
    response.redirect('/')

})

app.listen(port, () => {
    console.log(`App is running at port ${port}`)
})

