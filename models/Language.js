import mongoose, { Schema } from 'mongoose';


const LanguageSchema = Schema({
  label: {
    type: String,
    required: true,
  },
  abbr: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Language',LanguageSchema);
