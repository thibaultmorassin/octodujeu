import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      {[...Array(3)]?.map((_, index) => (
        <Skeleton className="w-full md:w-[360px] h-[164px]" key={index} />
      ))}
    </>
  );
}
