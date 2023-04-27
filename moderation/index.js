const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

app.post("/events", (req, res) => {
    const { type, data } = req.body;
    if(type === "CommentCreated") {
        setTimeout(async() => {
            const status = data.content.includes("orange") ? "rejected" : "approved";
            await axios.post("http://localhost:4005/events", {
                type: "CommentModerated",
                data: {
                    id: data.id,
                    postId: data.postId,
                    status,
                    content: data.content
                }
            })
        }, 10000);
    }
    res.send({ msg: "Moderated" });
});

app.listen(4003, () => {
    console.log("Listening on port 4003");
})