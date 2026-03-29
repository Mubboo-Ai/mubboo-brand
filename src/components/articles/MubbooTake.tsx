export default function MubbooTake({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-lg border-l-4 border-mubboo bg-[#FFF7ED] p-6">
      <p className="mb-2 text-sm font-bold uppercase tracking-wide text-mubboo">
        Mubboo&apos;s take
      </p>
      <div className="prose prose-sm max-w-none text-gray-700">{children}</div>
    </div>
  );
}
