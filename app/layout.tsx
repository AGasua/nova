import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Évaluation des Compétences DG CPE",
  description: "Questionnaire d'évaluation pour directrices générales de CPE au Québec",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      
      <body className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}