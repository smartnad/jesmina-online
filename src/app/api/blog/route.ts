import { NextResponse } from 'next/server';
import { db } from '@/lib/store';

export async function GET() {
    try {
        const posts = db.get('posts');
        return NextResponse.json({ success: true, data: posts });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to fetch posts' }, { status: 500 });
    }
}


