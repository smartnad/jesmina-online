import { NextResponse } from 'next/server';
import { db } from '@/lib/store';

export async function GET() {
    try {
        const services = db.get('services');
        return NextResponse.json({ success: true, data: services });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to fetch services' }, { status: 500 });
    }
}


