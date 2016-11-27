import mongoose, { Schema } from 'mongoose';


const TranslationSchema = Schema({
  translation: {
    type: String,
    required: true,
  },
  language: {
    type: Schema.Types.ObjectId,
    ref: 'Language',
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Translation', TranslationSchema);
