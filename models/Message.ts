import mongoose from 'mongoose'

/* MessageSchema will correspond to a collection in your MongoDB database. */
const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this message.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  subject: {
    type: String,
    required: [true, "Please provide the subject name"],
    maxlength: [60, "Subject cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, 'Please use your email'],
    maxlength: [60, 'Email cannot be more than 60 characters'],
  },
  message: {
    type: String,
    required: [true, 'Please use your email'],
    minlength: [10, 'Message must contain at least 10 characters'],
  },
})

export default mongoose.models.Message || mongoose.model('Message', MessageSchema)
