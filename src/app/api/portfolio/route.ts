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


