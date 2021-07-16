import express from "express";
import Album from "../models/album";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const albums = await Album.find();
        res.status(200).json({ albums });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const album = new Album(req.body);
        const newAlbum = await album.save();
        res.status(201).json(newAlbum);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete("/", async (req, res) => {
    try {
        const deletedAlbum = await Album.findOneAndDelete({
            _id: req.body._id,
        });
        res.status(200).json(deletedAlbum ?? { message: "Item not found" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
