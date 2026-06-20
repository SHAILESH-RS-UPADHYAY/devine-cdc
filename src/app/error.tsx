"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service like Sentry in a real app
    console.error("Global application error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none -z-10" />
      
      <div className="bg-red-50 p-6 rounded-full mb-8">
        <svg
          className="w-16 h-16 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
        Something went wrong!
      </h2>
      
      <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
        We apologize for the inconvenience. Our team has been notified and we are working to fix the issue.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={reset}
          size="lg" 
          className="bg-devine-orange hover:bg-devine-orange/90 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Try again
        </Button>
        <Link href="/">
          <Button 
            variant="outline"
            size="lg" 
            className="border-devine-orange text-devine-orange hover:bg-devine-orange/5 rounded-full px-8 py-6 text-lg font-semibold"
          >
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
