import mongoose, { Schema } from 'mongoose';


const StringSchema = Schema({
  messageid: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  translations: [{
    type: Schema.Types.ObjectId,
    ref: 'Translation',
  }],
}, { timestamps: true });

export default mongoose.model('String', StringSchema);
