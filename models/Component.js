import mongoose, { Schema } from 'mongoose';


const ComponentSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  strings: [{
    type: Schema.Types.ObjectId,
    ref: 'String',
  }],
}, { timestamps: true });

export default mongoose.model('Component', ComponentSchema);
