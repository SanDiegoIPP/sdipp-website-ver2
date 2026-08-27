import Grainient from "@/components/ui/Grainient";

export default function GrainientWhiteSection({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`.trim()}>
      <Grainient
        color1="#FFFFFF"
        color2="#F7F7F8"
        color3="#EDEDED"
        timeSpeed={0}
        grainAnimated={false}
        maxDpr={1}
        lazy
        fallbackClassName="bg-grainient-white"
        className="w-full h-full"
      />
    </div>
  );
}
