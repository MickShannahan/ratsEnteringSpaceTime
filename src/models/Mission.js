import { Schema } from "mongoose";


export const MissionSchema = new Schema({
  codename: { type: String },
  objective: { type: String },
  year: { type: String },
  ratId: { type: Schema.Types.ObjectId, ref: 'Rat', required: true },
  locationId: { type: Schema.Types.ObjectId, ref: 'Location', required: true },
  completed: { type: Boolean, required: true, default: false }
}, { toJSON: { virtuals: true } })

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
