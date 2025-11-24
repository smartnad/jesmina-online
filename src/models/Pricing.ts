import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPricing extends Document {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular: boolean;
    createdAt: Date;
}

const PricingSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    features: { type: [String], required: true },
    popular: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

const Pricing: Model<IPricing> = mongoose.models.Pricing || mongoose.model<IPricing>('Pricing', PricingSchema);

export default Pricing;
