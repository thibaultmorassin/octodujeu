export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div className="space-y-4 flex-1">{children}</div>
    </div>
  );
}
