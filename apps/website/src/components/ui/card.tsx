import React from "react";

export default function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-4 rounded shadow bg-white ${className}`.trim()}>
      {children}
    </div>
  );
}
