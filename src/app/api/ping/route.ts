export const dynamic = 'force-dynamic'

export async function GET() {
    console.log(new Date().toISOString(), "ping");
    return Response.json({ ok: true })
}