"use client";

import { useState, useEffect } from "react";
import { Mail, Calendar, User, Trash2 } from "lucide-react";

interface ContactMessage {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
}

export default function AdminMessages() {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const res = await fetch("/api/contact");
            const data = await res.json();
            if (data.success) {
                setMessages(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch messages", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this message?")) return;
        // Note: You might need to implement a DELETE route for individual messages if you want this to work fully.
        // For now, we'll just remove it from the UI or you can add the DELETE endpoint to /api/contact/[id]/route.ts
        alert("Delete functionality requires a specific API endpoint. For now, this is a placeholder.");
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Inbox</h1>

            {isLoading ? (
                <p>Loading messages...</p>
            ) : messages.length === 0 ? (
                <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 text-center">
                    <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-700">No messages yet</h3>
                    <p className="text-gray-500">When someone contacts you, their message will appear here.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {messages.map((msg) => (
                        <div key={msg._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-pastel-cream flex items-center justify-center text-pastel-gold font-bold">
                                        {msg.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">{msg.name}</h3>
                                        <p className="text-xs text-gray-500">{msg.email}</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                    <Calendar size={12} />
                                    {new Date(msg.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                            <h4 className="font-bold text-gray-700 mb-2">{msg.subject}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl">
                                {msg.message}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
