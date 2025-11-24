import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPortfolio extends Document {
    title: string;
    category: string;
    image: string;
    description: string;
    createdAt: Date;
}

const PortfolioSchema: Schema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Portfolio: Model<IPortfolio> = mongoose.models.Portfolio || mongoose.model<IPortfolio>('Portfolio', PortfolioSchema);

export default Portfolio;
