import { Schema, model, Document } from "mongoose";

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IScore extends Document {
  id: string;
  name: string;
  score: number;
}

const ScoreSchema = new Schema({
  id: String,
  name: String,
  score: Number,
});

export const Score = model<IScore>("Score", ScoreSchema);

export type ScoreModel = typeof Score;
