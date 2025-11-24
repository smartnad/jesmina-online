"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Trash2, Pencil } from "lucide-react";

interface PortfolioItem {
    _id: string;
    title: string;
    category: string;
    image: string;
    description: string;
}

export default function AdminPortfolio() {
    const [items, setItems] = useState<PortfolioItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        image: "",
        description: ""
    });
    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const res = await fetch("/api/portfolio");
            const data = await res.json();
            if (data.success) {
                setItems(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch portfolio", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const url = editingId ? `/api/portfolio/${editingId}` : "/api/portfolio";
            const method = editingId ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setFormData({ title: "", category: "", image: "", description: "" });
                setEditingId(null);
                fetchItems();
            }
        } catch (error) {
            console.error("Failed to save item", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure?")) return;
        try {
            await fetch(`/api/portfolio/${id}`, { method: "DELETE" });
            fetchItems();
        } catch (error) {
            console.error("Failed to delete item", error);
        }
    };

    const handleEdit = (item: PortfolioItem) => {
        setFormData({
            title: item.title,
            category: item.category,
            image: item.image,
            description: item.description,
        });
        setEditingId(item._id);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Manage Portfolio</h1>

            {/* Form */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
                <h2 className="text-xl font-bold text-gray-700 mb-4">
                    {editingId ? "Edit Item" : "Add New Item"}
                </h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Project Title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-gold/20"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Category (e.g. Web Design)"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-gold/20"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-gold/20 md:col-span-2"
                        required
                    />
                    <textarea
                        placeholder="Description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-gold/20 md:col-span-2"
                        rows={3}
                        required
                    />
                    <div className="md:col-span-2 flex gap-2">
                        <Button type="submit">
                            {editingId ? "Update Item" : "Add Item"}
                        </Button>
                        {editingId && (
                            <Button type="button" variant="outline" onClick={() => {
                                setEditingId(null);
                                setFormData({ title: "", category: "", image: "", description: "" });
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
                    items.map((item) => (
                        <div key={item._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                            <div className="h-48 bg-gray-100 relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <span className="text-xs bg-pastel-cream text-pastel-text px-2 py-1 rounded-full">{item.category}</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-4 flex-1">{item.description}</p>
                                <div className="flex gap-2 mt-4">
                                    <button onClick={() => handleEdit(item)} className="flex-1 py-2 text-blue-500 hover:bg-blue-50 rounded-lg flex justify-center">
                                        <Pencil size={18} />
                                    </button>
                                    <button onClick={() => handleDelete(item._id)} className="flex-1 py-2 text-red-500 hover:bg-red-50 rounded-lg flex justify-center">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
