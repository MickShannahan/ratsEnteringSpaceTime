import { Schema } from "mongoose";


export const MissionSchema = new Schema({
  objective: { type: String },
  dangerLevel: { type: Number },
  year: { type: Number },
  ratId: { type: Schema.Types.ObjectId, ref: 'Rat', required: true },
  locationId: { type: Schema.Types.ObjectId, ref: 'Location', required: true },
  completed: { type: Boolean, required: true, default: false }
})

MissionSchema.virtual('rat', {
  localField: 'ratId',
  foreignField: '_id',
  ref: 'Rat',
  justOne: true
})

MissionSchema.virtual('location', {
  localField: 'locationId',
  foreignField: '_id',
  ref: 'Location',
  justOne: true
})
