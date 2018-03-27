var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/local', function() {
    console.log('DB connection Successful!');
});

var taskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
    date: Date
});

var Task = mongoose.model('Task', taskSchema);

var tasks = [
    {
        id: 1,
        title: 'Learn Angular',
        completed: false,
        date: new Date()
    },
    {
        id: 2,
        title: 'Learn NodeJS',
        completed: true,
        date: new Date()
    },
    {
        id: 3,
        title: 'Learn React',
        completed: false,
        date: new Date()
    },
    {
        id: 4,
        title: 'Learn MongoDB',
        completed: false,
        date: new Date()
    }
];

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,DELETE,OPTIONS,PUT");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.listen(3000, function() {
    console.log('Magic happens at port 3000!')
});

app.get('/', function(req, res) {    
    res.send('<h1>Hello World!</h1>')
});

app.get('/tasks', function(req, res) {
    Task.find().then(data => {
        res.send(data);
    });
    //res.send(tasks);
    // setTimeout(function() {
        
    // }, 3000);
    
})

app.get('/tasks/:id', function(req, res) {
    var id = Number(req.params.id);

    tasks.forEach(function(el, i) {
        if(el.id === id) {
            setTimeout(function() {
                res.send(el);
            }, 3000)
            
        }
    })
})

app.delete('/tasks/:id', function(req, res) {
    var id = Number(req.params.id);

    tasks.forEach(function(el, i) {
        if(el.id === id) {
            tasks.splice(i, 1);
        }
    })

    res.send({});
})

app.put('/tasks/:id', function(req, res) {
    var id = Number(req.params.id);

    tasks.forEach(function(el, i) {
        if(el.id === id) {
            tasks[i].completed = !tasks[i].completed;
        }
    })

    res.send({});
})

app.post('/tasks', function(req, res) {
    var task = req.body.task; //return a string from client.

    var taskObj = {
        id: tasks.length+1,
        title: task,
        completed: false,
        date: new Date()
    }

    tasks.push(taskObj);
});

app.post('/login', function(req, res) {
    console.log(req);
    var creds = req.body;

    if(creds.username === 'admin' && creds.password === 'admin') {
        res.send({
            username: creds.username,
            token: '1234'
        })
    } else {
        res.status(400).send({
            msg: 'Invalid username and password.'
        })
    }
})