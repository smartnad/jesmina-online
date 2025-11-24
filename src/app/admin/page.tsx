"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Briefcase, DollarSign, Image, PenTool, Users, TrendingUp, Eye } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

// Mock Data for Charts
const serviceData = [
    { name: 'Web Design', value: 400 },
    { name: 'Branding', value: 300 },
    { name: 'SEO', value: 300 },
    { name: 'Marketing', value: 200 },
];

const visitorData = [
    { name: 'Mon', visitors: 4000 },
    { name: 'Tue', visitors: 3000 },
    { name: 'Wed', visitors: 2000 },
    { name: 'Thu', visitors: 2780 },
    { name: 'Fri', visitors: 1890 },
    { name: 'Sat', visitors: 2390 },
    { name: 'Sun', visitors: 3490 },
];

const COLORS = ['#E6CBA5', '#F4C2C2', '#D8BFD8', '#A0C4FF'];

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
                    <p className="text-gray-500">Welcome back, Admin. Here's what's happening today.</p>
                </div>
                <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-medium text-gray-600">System Online</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { title: "Total Services", value: "6", icon: <Briefcase className="text-pastel-gold" />, color: "bg-pastel-cream" },
                    { title: "Portfolio Items", value: "12", icon: <Image className="text-pastel-pink" />, color: "bg-pink-50" },
                    { title: "Blog Posts", value: "8", icon: <PenTool className="text-pastel-lilac" />, color: "bg-purple-50" },
                    { title: "Total Views", value: "24.5k", icon: <Eye className="text-blue-400" />, color: "bg-blue-50" },
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow"
                    >
                        <div className={`p-4 rounded-xl ${stat.color}`}>
                            {stat.icon}
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Visitor Stats */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
                >
                    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <TrendingUp size={20} className="text-pastel-gold" /> Visitor Trends
                    </h2>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={visitorData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                    cursor={{ fill: '#f9fafb' }}
                                />
                                <Bar dataKey="visitors" fill="#E6CBA5" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Service Distribution */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
                >
                    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <Briefcase size={20} className="text-pastel-pink" /> Service Distribution
                    </h2>
                    <div className="h-80 w-full flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={serviceData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {serviceData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center gap-4 mt-4 flex-wrap">
                        {serviceData.map((entry, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                                <span className="text-sm text-gray-600">{entry.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h2>
                <div className="space-y-4">
                    {[
                        { action: "New Contact Form Submission", time: "2 mins ago", user: "Sarah J." },
                        { action: "Updated Pricing Plan", time: "1 hour ago", user: "Admin" },
                        { action: "New Blog Post Published", time: "3 hours ago", user: "Admin" },
                        { action: "Service 'Web Design' Updated", time: "Yesterday", user: "Admin" },
                    ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors border-b border-gray-50 last:border-0">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-pastel-cream flex items-center justify-center text-pastel-gold font-bold">
                                    {item.user[0]}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-800">{item.action}</p>
                                    <p className="text-xs text-gray-500">by {item.user}</p>
                                </div>
                            </div>
                            <span className="text-xs text-gray-400">{item.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
