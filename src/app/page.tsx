import { FilterForm } from "@/components/FilterForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 dark:bg-slate-900">
      <div className="w-full h-[400px] relative mb-8">
        <Image
          src="/banner.jpg"
          alt="Sail Banner"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold drop-shadow-lg text-center px-4">
            Resource Inventory Dashboard
          </h1>
        </div>
      </div>
      <div className="w-full max-w-5xl px-4 pb-12 z-10 -mt-16">
        <FilterForm />
      </div>
    </main>
  );
}
