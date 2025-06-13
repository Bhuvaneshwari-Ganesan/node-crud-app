import express from "express";

const app = express()
const PORT = 6969;

app.get('/', (req, res) =>{
    res.json({msg: "Hello Students!!"});
});


app.listen(6969, () =>{
    console.log(`The server is running at http://localhost:${PORT}`);
})


// DRY Principle Dont Repeat Yourself

// KISS "" Keep it simple stupid