import { NextResponse } from 'next/server';
import { db } from '@/lib/store';

export async function GET() {
    try {
        const pricing = db.get('pricing');
        return NextResponse.json({ success: true, data: pricing });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to fetch pricing' }, { status: 500 });
    }
}


