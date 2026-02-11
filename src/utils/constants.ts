export const isProduction = process.env.NODE_ENV === 'production'
export const base_url = isProduction ? process.env.NEXT_PUBLIC_API_URL : 'http://localhost:3000'
