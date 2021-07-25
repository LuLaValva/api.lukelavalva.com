import mongoose, { Schema, Document } from "mongoose";

export interface IRating extends Document {
    fun: number;
    novelty: number;
    variety: number;
    depth: number;
    emotion: number;
    cohesion: number;
    polish: number;
}

const RatingSchema: Schema = new Schema({
    fun: { type: Number, required: true },
    novelty: { type: Number, required: true },
    variety: { type: Number, required: true },
    depth: { type: Number, required: true },
    emotion: { type: Number, required: true },
    cohesion: { type: Number, required: true },
    polish: { type: Number, required: true },
});

export interface IAlbum extends Document {
    name: string;
    artists: [string];
    rating?: IRating;
}

const AlbumSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    artists: { type: [String], required: true },
    rating: { type: RatingSchema, required: false },
});

export default mongoose.model<IAlbum>("album-ratings", AlbumSchema);
