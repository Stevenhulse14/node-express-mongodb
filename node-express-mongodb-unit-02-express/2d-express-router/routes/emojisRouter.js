const express = require("express");
const uuid = require("uuid").v4;

const router = express.Router();

const emojis = [
    {
        id: uuid(),
        symbol: '🤐',
        letter: 'z',
        name: 'zipper',
        categories: [
            'face',
        ],
    },
    {
        id: uuid(),
        symbol: '😁',
        name: 'grin',
        categories: [
            'face',
        ],
    },
    {
        id: uuid(),
        symbol: '😎',
        name: 'sunglasses',
        categories: [
            'face',
        ],
    },
    {
        id: uuid(),
        symbol: '😆',
        name: 'laugh',
        categories: [
            'face',
        ],
    },
    {
        id: uuid(),
        symbol: '😠',
        name: 'mad',
        categories: [
            'face',
        ],
    },
    {
        id: uuid(),
        symbol: '😭',
        name: 'cry',
        categories: [
            'face',
        ],
    },
    {
        id: uuid(),
        symbol: '😜',
        name: 'silly',
        categories: [
            'face',
        ],
    },
    {
        id: uuid(),
        symbol: '😱',
        name: 'whoops',
        categories: [
            'face',
        ],
    },
]

// GET localhost:3000/api/v1/emojis
router.get("/", function (req, res) {
    res.json({ message: "success", payload: emojis });
});

// GET localhost:3000/api/v1/emojis/symbols
router.get("/symbols", function (req, res) {
    const symbols = emojis.map((emoji) => emoji.symbol);
    res.json({ message: "success", payload: symbols });
});

// GET localhost:3000/api/v1/emojis/[id]
router.get("/:id", function (req, res) {
    const foundEmoji = emojis.find((emoji) => emoji.id === req.params.id);

    if (foundEmoji) {
        res.json({ message: "success", payload: foundEmoji });
    } else {
        res.status(404).json({ message: "failure", payload: "emoji not found" });
    }
});

// POST localhost:3000/api/v1/emojis
router.post("/", function (req, res) {
    const emoji = {
        ...req.body,
        id: uuid(),
    };

    emojis.push(emoji);
    res.json({ message: "success", payload: emoji });
});

// PATCH localhost:3000/api/v1/emojis/[id]
router.patch("/:id", function (req, res) {
    const emoji = emojis.find((emoji) => emoji.id === req.params.id);

    if (emoji === undefined) {
        res.status(404).json({ message: "failure", payload: "emoji not found" });

        return
    }

    const incomingObj = req.body;

    //merging two objects
    Object.assign(emoji, incomingObj);

    res .status(200) .json({ message: "success", payload: emoji });
});

// DELETE localhost:3000/api/v1/emojis/[id]
router.delete("/:id", function (req, res) {
    const i = emojis.findIndex((emoji) => emoji.id === req.params.id);

    if (i === -1) {
        res.status(500).json({
            message: "failure",
            payload: "emoji not found",
        });

        return
    }

    const deletedEmoji = emojis.splice(i, 1)[0];

    res.status(200).json({ message: "success", payload: deletedEmoji });
});

module.exports = router;
