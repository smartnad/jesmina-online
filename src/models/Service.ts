import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IService extends Document {
    title: string;
    description: string;
    price: string;
    icon: string;
    createdAt: Date;
}

const ServiceSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    icon: { type: String, default: 'Star' }, // Name of the Lucide icon
    createdAt: { type: Date, default: Date.now },
});

// Prevent overwrite model error in Next.js hot reload
const Service: Model<IService> = mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);

export default Service;
