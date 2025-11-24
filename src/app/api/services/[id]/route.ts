import { NextResponse } from 'next/server';
import { db } from '@/lib/store';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const body = await request.json();
        const service = db.update('services', params.id, body);

        if (!service) {
            return NextResponse.json({ success: false, error: 'Service not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: service });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to update service' }, { status: 400 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const deleted = db.delete('services', params.id);

        if (!deleted) {
            return NextResponse.json({ success: false, error: 'Service not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to delete service' }, { status: 400 });
    }
}
