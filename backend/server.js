import express from "express"
import cors from "cors";

const server = express();

server.use(express.json());
server.use(cors());

let CODE;

server.get("/code",  (req, res) => {

    if(CODE) {
        res.json({
            code: CODE,
            status: 200,
            message: "Code retrieved successfully"
        }).status(200);
        return;
    }

    res.json({
        status: 404,
        message: "No code found"
    }).status(404);
    return;
});

server.post("/code", (req, res) => {
    const { code } = req.body;

    if(!code) {
        res.json({
            status: 400,
            message: "Code is required"
        }).status(400);
        return;
    }

    CODE = code;

    res.json({
        status: 200,
        message: "Code saved successfully"
    }).status(200);
    return;
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});