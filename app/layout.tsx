export default function LandingLayout({
    children 
  }: { 
    children: React.ReactNode; 
  }) {
    return (
      <html>
        <body>
          {children}
        </body>
      </html>
    );
  }