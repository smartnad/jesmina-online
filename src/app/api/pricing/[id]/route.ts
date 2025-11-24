import { NextResponse } from 'next/server';
import { db } from '@/lib/store';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const body = await request.json();
        const plan = db.update('pricing', params.id, body);

        if (!plan) {
            return NextResponse.json({ success: false, error: 'Plan not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: plan });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to update plan' }, { status: 400 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const deleted = db.delete('pricing', params.id);

        if (!deleted) {
            return NextResponse.json({ success: false, error: 'Plan not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to delete plan' }, { status: 400 });
    }
}
