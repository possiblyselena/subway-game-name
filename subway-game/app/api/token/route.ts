import { NextRequest, NextResponse} from 'next/server'
import * as Ably from "ably";

export async function POST(req: Request) {
    {
        const client = new Ably.Rest(process.env.ABLY_API_KEY!);

        const tokenRequest = await client.auth.createTokenRequest({
            clientId: "user-" + crypto.randomUUID(),
            capability: {
                "a-*": ["publish", "subscribe", "presence"]
            }
        });
        return NextResponse.json(tokenRequest);
    }
}