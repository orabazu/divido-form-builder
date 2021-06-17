const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://divido-form-builder-eplj3r7pq-zhunor.vercel.app'