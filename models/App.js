import mongoose, { Schema } from 'mongoose';


const AppSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  languages: [{
    type: Schema.Types.ObjectId,
    ref: 'Language',
  }],
  components: [{
    type: Schema.Types.ObjectId,
    ref: 'Component',
  }],
}, { timestamps: true });

export default mongoose.model('App',AppSchema);
