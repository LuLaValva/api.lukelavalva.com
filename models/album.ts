import mongoose, { Schema, Document } from "mongoose";

export interface IRating extends Document {
    groove: number;
    art: number;
    shareability: number;
    complexity: number;
}

const RatingSchema: Schema = new Schema({
    groove: { type: Number, required: true },
    art: { type: Number, required: true },
    shareablility: { type: Number, required: true },
    complexity: { type: Number, required: true },
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

export default mongoose.model<IAlbum>("ratings", AlbumSchema);
