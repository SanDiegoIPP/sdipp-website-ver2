import React from "react";

export default function Button({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`px-4 py-2 rounded-md bg-blue-600 text-white ${className}`.trim()}>
      {children}
    </button>
  );
}
