import { NextResponse } from 'next/server';
import { db } from '@/lib/store';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Basic validation
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        const contact = db.add('contacts', body);
        return NextResponse.json({ success: true, data: contact }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to submit contact form' }, { status: 400 });
    }
}


