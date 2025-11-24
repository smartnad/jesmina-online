"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Trash2, Pencil } from "lucide-react";

interface Post {
    _id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    image: string;
    category: string;
}

export default function AdminBlog() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({
        title: "",
        excerpt: "",
        content: "",
        author: "Jesmina",
        image: "",
        category: ""
    });
    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await fetch("/api/blog");
            const data = await res.json();
            if (data.success) {
                setPosts(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch posts", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const url = editingId ? `/api/blog/${editingId}` : "/api/blog";
            const method = editingId ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setFormData({ title: "", excerpt: "", content: "", author: "Jesmina", image: "", category: "" });
                setEditingId(null);
                fetchPosts();
            }
        } catch (error) {
            console.error("Failed to save post", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure?")) return;
        try {
            await fetch(`/api/blog/${id}`, { method: "DELETE" });
            fetchPosts();
        } catch (error) {
            console.error("Failed to delete post", error);
        }
    };

    const handleEdit = (post: Post) => {
        setFormData({
            title: post.title,
            excerpt: post.excerpt,
            content: post.content,
            author: post.author,
            image: post.image,
            category: post.category,
        });
        setEditingId(post._id);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Manage Blog</h1>

            {/* Form */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
                <h2 className="text-xl font-bold text-gray-700 mb-4">
                    {editingId ? "Edit Post" : "Add New Post"}
                </h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Post Title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-gold/20"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Category"
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
                        className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-gold/20"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-gold/20"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Excerpt (Short summary)"
                        value={formData.excerpt}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                        className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-gold/20 md:col-span-2"
                        required
                    />
                    <textarea
                        placeholder="Content (Markdown or HTML)"
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-gold/20 md:col-span-2"
                        rows={6}
                        required
                    />
                    <div className="md:col-span-2 flex gap-2">
                        <Button type="submit">
                            {editingId ? "Update Post" : "Add Post"}
                        </Button>
                        {editingId && (
                            <Button type="button" variant="outline" onClick={() => {
                                setEditingId(null);
                                setFormData({ title: "", excerpt: "", content: "", author: "Jesmina", image: "", category: "" });
                            }}>
                                Cancel
                            </Button>
                        )}
                    </div>
                </form>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 gap-4">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    posts.map((post) => (
                        <div key={post._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
                            <div className="w-full md:w-48 h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-xl">{post.title}</h3>
                                    <span className="text-xs bg-pastel-cream text-pastel-text px-2 py-1 rounded-full">{post.category}</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">{post.excerpt}</p>
                                <div className="flex gap-2">
                                    <button onClick={() => handleEdit(post)} className="px-4 py-2 text-blue-500 hover:bg-blue-50 rounded-lg flex items-center gap-2">
                                        <Pencil size={16} /> Edit
                                    </button>
                                    <button onClick={() => handleDelete(post._id)} className="px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg flex items-center gap-2">
                                        <Trash2 size={16} /> Delete
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
