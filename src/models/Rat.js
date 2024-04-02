import { Schema } from "mongoose";



export const RatSchema = new Schema({
  name: { type: String },
  picture: { type: String },
  specialties: [{ type: String, enum: ['language', 'disguise', 'cooking', 'infiltration', 'elimination', 'under-cover', 'kung-fu', 'navigation', 'planes', 'cars', 'hacking', 'boats'] }]
}, { toJSON: { virtuals: true } })

RatSchema.virtual('completedMissions', {
  localField: '_id',
  foreignField: 'ratId',
  ref: 'Mission',
  match: { completed: true },
  count: true
})
