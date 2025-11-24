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

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const plan = db.add('pricing', body);
        return NextResponse.json({ success: true, data: plan }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to create pricing plan' }, { status: 400 });
    }
}
