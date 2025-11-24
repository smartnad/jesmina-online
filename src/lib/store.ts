import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const dataFile = path.join(dataDir, 'db.json');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// Initial Data Structure
const initialData = {
    services: [],
    pricing: [],
    portfolio: [],
    posts: [],
    contacts: []
};

// Helper to read database
function readDb() {
    if (!fs.existsSync(dataFile)) {
        fs.writeFileSync(dataFile, JSON.stringify(initialData, null, 2));
        return initialData;
    }
    try {
        const data = fs.readFileSync(dataFile, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // If file is corrupted, return initial data
        return initialData;
    }
}

// Helper to write database
function writeDb(data: any) {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

export const db = {
    // Generic Read
    read: () => readDb(),

    // Get all items from a collection
    get: (collection: string) => {
        const data = readDb();
        // @ts-ignore
        return data[collection] || [];
    },

    // Get single item by ID
    getById: (collection: string, id: string) => {
        const data = readDb();
        // @ts-ignore
        const list = data[collection] || [];
        return list.find((item: any) => item._id === id);
    },

    // Add new item
    add: (collection: string, item: any) => {
        const data = readDb();
        // @ts-ignore
        if (!data[collection]) data[collection] = [];

        const newItem = {
            ...item,
            _id: Date.now().toString(),
            createdAt: new Date().toISOString()
        };

        // @ts-ignore
        data[collection].unshift(newItem); // Add to beginning for newest first
        writeDb(data);
        return newItem;
    },

    // Update item
    update: (collection: string, id: string, updates: any) => {
        const data = readDb();
        // @ts-ignore
        if (!data[collection]) return null;

        // @ts-ignore
        const index = data[collection].findIndex((item: any) => item._id === id);
        if (index === -1) return null;

        // @ts-ignore
        data[collection][index] = { ...data[collection][index], ...updates };
        writeDb(data);
        // @ts-ignore
        return data[collection][index];
    },

    // Delete item
    delete: (collection: string, id: string) => {
        const data = readDb();
        // @ts-ignore
        if (!data[collection]) return false;

        // @ts-ignore
        data[collection] = data[collection].filter((item: any) => item._id !== id);
        writeDb(data);
        return true;
    }
};
