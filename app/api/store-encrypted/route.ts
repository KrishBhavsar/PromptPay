import { BACKEND_URL } from '@/lib/constants';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        console.log("here in route.ts of storeEncrypted");
        
        const body = await req.json();

        // Forward the request to your backend
        const response = await fetch(`${BACKEND_URL}/store-encrypted`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if (!response.ok) {
            return Response.json(data, { status: response.status });
        }

        return Response.json(data);
    } catch (error: any) {
        return Response.json(
            { error: 'Failed to generate preview', details: error.message },
            { status: 500 }
        );
    }
}