const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const router = require("./routes/router")


const app = express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(morgan("tiny"))


if (app.get("env") === "development"){
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        return res.json({
            message: err.messAge,
            error: err
        })
    })
}

app.use("/", router)
const port = process.env.PORT || 3001




app.listen(port, () => console.log(`Server started on port ${port}`))
module.exports = app