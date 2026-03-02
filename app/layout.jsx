import './globals.css';

export const metadata = {
  title: 'Ellen Valladares - Author, Coach & Spiritual Teacher',
  description: 'Spread Your Wings mentoring, oracle decks, books, and spiritual guidance with Ellen Valladares',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}
