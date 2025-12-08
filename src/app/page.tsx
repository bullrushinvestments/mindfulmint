import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MindfulMint',
  description: 'MindfulMint is an AI-driven mental health and productivity platform that helps small businesses create healthier, more productive work environments by integrating personalized wellness programs with task management tools.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">MindfulMint</h1>
      <p className="mt-4 text-lg">MindfulMint is an AI-driven mental health and productivity platform that helps small businesses create healthier, more productive work environments by integrating personalized wellness programs with task management tools.</p>
    </main>
  )
}
