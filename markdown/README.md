### GPT => Grade Point Tracker

it is a simple platform created solely for Nigerian students in higher institution,

It employs an authentication to ensure the security of registered users, 

It utilizes a nosql database , mongodb

### Technology used 
1. node js
1. Javascript,
1. JWT,
1. git,
1. github
1. mongodb


### lines of code
roughly a thousand lines, lol :)


### Prerequisite to use this software locally
1. Have mongodb installed, mongodb compass was used during development
1. create a collection named GPT
1. Given below is the db config on the main server file (app.js)

```
let db = "mongodb://localhost:27017/GPT"
mongoose.connect(db,{useNewUrlParser:true ,useUnifiedTopology:true , useCreateIndex:true,useFindAndModify: false})
.then(()=>{
    console.log("mongodb connnect")
})
```


##Run this program using the command below
```js
node app.js
```
 
## Happy coding, i await your contributions .