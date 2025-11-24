"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Trash2, Plus, Pencil } from "lucide-react";

interface Service {
    _id: string;
    title: string;
    description: string;
    price: string;
    icon: string;
}

export default function AdminServices() {
    const [services, setServices] = useState<Service[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({ title: "", description: "", price: "", icon: "Star" });
    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const res = await fetch("/api/services");
            const data = await res.json();
            if (data.success) {
                setServices(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch services", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const url = editingId ? `/api/services/${editingId}` : "/api/services";
            const method = editingId ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setFormData({ title: "", description: "", price: "", icon: "Star" });
                setEditingId(null);
                fetchServices();
            }
        } catch (error) {
            console.error("Failed to save service", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure?")) return;
        try {
            await fetch(`/api/services/${id}`, { method: "DELETE" });
            fetchServices();
        } catch (error) {
            console.error("Failed to delete service", error);
        }
    };

    const handleEdit = (service: Service) => {
        setFormData({
            title: service.title,
            description: service.description,
            price: service.price,
            icon: service.icon,
        });
        setEditingId(service._id);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Manage Services</h1>

            {/* Form */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
                <h2 className="text-xl font-bold text-gray-700 mb-4">
                    {editingId ? "Edit Service" : "Add New Service"}
                </h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Service Title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-gold/20"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Price (e.g. From ₹50,000)"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-gold/20"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Icon Name (e.g. Star, Heart)"
                        value={formData.icon}
                        onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
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
                    <div className="md:col-span-2 flex gap-2">
                        <Button type="submit">
                            {editingId ? "Update Service" : "Add Service"}
                        </Button>
                        {editingId && (
                            <Button type="button" variant="outline" onClick={() => {
                                setEditingId(null);
                                setFormData({ title: "", description: "", price: "", icon: "Star" });
                            }}>
                                Cancel
                            </Button>
                        )}
                    </div>
                </form>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    services.map((service) => (
                        <div key={service._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-start">
                            <div>
                                <h3 className="font-bold text-lg">{service.title}</h3>
                                <p className="text-sm text-gray-500 mb-2">{service.description}</p>
                                <span className="text-xs font-bold bg-pastel-cream px-2 py-1 rounded-full text-pastel-text">
                                    {service.price}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => handleEdit(service)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg">
                                    <Pencil size={18} />
                                </button>
                                <button onClick={() => handleDelete(service._id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
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
