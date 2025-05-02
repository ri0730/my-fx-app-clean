export const metadata = {
    title: 'My FX',
    description: 'FXアシスタントアプリ',
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="ja">
        <body style={{ margin: 0, backgroundColor: '#111' }}>{children}</body>
      </html>
    );
  }
    