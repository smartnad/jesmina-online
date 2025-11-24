import { NextResponse } from 'next/server';
import { db } from '@/lib/store';

export async function GET() {
    try {
        const portfolio = db.get('portfolio');
        return NextResponse.json({ success: true, data: portfolio });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to fetch portfolio' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const item = db.add('portfolio', body);
        return NextResponse.json({ success: true, data: item }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to create portfolio item' }, { status: 400 });
    }
}
