import { Schema } from "mongoose";


export const MissionSchema = new Schema({
  codename: { type: String, required: true },
  objective: { type: String, required: true },
  year: { type: String, required: true },
  locationId: { type: Schema.ObjectId, required: true },
  ratId: { type: Schema.ObjectId, required: true },
  completed: { type: Boolean, required: true }
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