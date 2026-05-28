import { createServerClient } from '@/lib/supabase'

export async function GET() {
  const supabase = await createServerClient()

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .limit(5)

  return Response.json({ data, error })
}