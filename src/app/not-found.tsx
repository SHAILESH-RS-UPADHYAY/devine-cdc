import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none -z-10" />
      
      <h1 className="text-9xl font-extrabold text-devine-purple/20 mb-4 tracking-tighter">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
        We couldn&apos;t find the page you were looking for. It might have been moved or doesn&apos;t exist.
      </p>
      
      <Link href="/">
        <Button size="lg" className="bg-devine-purple hover:bg-devine-purple/90 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          Return to Home
        </Button>
      </Link>
    </div>
  );
}
