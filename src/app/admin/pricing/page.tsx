"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Trash2, Pencil } from "lucide-react";

interface Pricing {
    _id: string;
    name: string;
    price: string;
    description: string;
    features: string[];
    popular: boolean;
}

export default function AdminPricing() {
    const [pricing, setPricing] = useState<Pricing[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        features: "",
        popular: false
    });
    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        fetchPricing();
    }, []);

    const fetchPricing = async () => {
        try {
            const res = await fetch("/api/pricing");
            const data = await res.json();
            if (data.success) {
                setPricing(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch pricing", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const url = editingId ? `/api/pricing/${editingId}` : "/api/pricing";
            const method = editingId ? "PUT" : "POST";

            // Convert features string to array
            const featuresArray = typeof formData.features === 'string'
                ? formData.features.split(',').map(f => f.trim())
                : formData.features;

            const body = { ...formData, features: featuresArray };

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (res.ok) {
                setFormData({ name: "", price: "", description: "", features: "", popular: false });
                setEditingId(null);
                fetchPricing();
            }
        } catch (error) {
            console.error("Failed to save pricing", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure?")) return;
        try {
            await fetch(`/api/pricing/${id}`, { method: "DELETE" });
            fetchPricing();
        } catch (error) {
            console.error("Failed to delete pricing", error);
        }
    };

    const handleEdit = (item: Pricing) => {
        setFormData({
            name: item.name,
            price: item.price,
            description: item.description,
            features: item.features.join(", "),
            popular: item.popular,
        });
        setEditingId(item._id);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Manage Pricing</h1>

            {/* Form */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
                <h2 className="text-xl font-bold text-gray-700 mb-4">
                    {editingId ? "Edit Plan" : "Add New Plan"}
                </h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Plan Name (e.g. Basic)"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-gold/20"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Price (e.g. ₹49,999)"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-gold/20"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-gold/20 md:col-span-2"
                        required
                    />
                    <textarea
                        placeholder="Features (comma separated)"
                        value={formData.features}
                        onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                        className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-gold/20 md:col-span-2"
                        rows={3}
                        required
                    />
                    <div className="md:col-span-2 flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="popular"
                            checked={formData.popular}
                            onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
                            className="w-4 h-4 text-pastel-gold rounded focus:ring-pastel-gold"
                        />
                        <label htmlFor="popular" className="text-gray-700">Mark as Most Popular</label>
                    </div>
                    <div className="md:col-span-2 flex gap-2">
                        <Button type="submit">
                            {editingId ? "Update Plan" : "Add Plan"}
                        </Button>
                        {editingId && (
                            <Button type="button" variant="outline" onClick={() => {
                                setEditingId(null);
                                setFormData({ name: "", price: "", description: "", features: "", popular: false });
                            }}>
                                Cancel
                            </Button>
                        )}
                    </div>
                </form>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    pricing.map((item) => (
                        <div key={item._id} className={`bg-white p-6 rounded-2xl shadow-sm border ${item.popular ? 'border-pastel-gold' : 'border-gray-100'} flex flex-col justify-between`}>
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    {item.popular && <span className="text-xs bg-pastel-gold text-white px-2 py-1 rounded-full">Popular</span>}
                                </div>
                                <p className="text-2xl font-bold text-pastel-text mb-2">{item.price}</p>
                                <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                            </div>
                            <div className="flex gap-2 mt-4">
                                <button onClick={() => handleEdit(item)} className="flex-1 py-2 text-blue-500 hover:bg-blue-50 rounded-lg flex justify-center">
                                    <Pencil size={18} />
                                </button>
                                <button onClick={() => handleDelete(item._id)} className="flex-1 py-2 text-red-500 hover:bg-red-50 rounded-lg flex justify-center">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
