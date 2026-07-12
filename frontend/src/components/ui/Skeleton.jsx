function Skeleton({ className = "" }) {
  return <div className={`animate-pulse rounded-md bg-slate-100 ${className}`} />;
}

export function SkeletonGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {["one", "two", "three", "four"].map((item) => (
        <div key={item} className="rounded-md border border-slate-200 bg-white p-5">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="mt-5 h-9 w-16" />
          <Skeleton className="mt-4 h-4 w-32" />
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
