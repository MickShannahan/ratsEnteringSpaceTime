import { Schema } from "mongoose";


export const LocationSchema = new Schema({
  country: { type: String, required: true },
  area: { type: String, required: true },
  labels: [{ type: String, enum: ['arctic', 'desert', 'jungle', 'urban', 'suburban', 'tundra', 'tropical', 'forrest', 'grass-land', 'temperate', 'building', 'complex', 'mountains', 'ruin', 'dangerous', 'desolate'] }]
})
