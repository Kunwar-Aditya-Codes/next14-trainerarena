import { Inter } from 'next/font/google';
import '../globals.css';
import { cn, constructMetadata } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body
          className={cn(
            'relative h-full font-sans antialiased',
            inter.className
          )}
        >
          <main className='relative flex flex-col min-h-screen'>
            <div className='flex-grow flex-1 '>{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
