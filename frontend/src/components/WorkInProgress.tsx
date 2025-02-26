import { Construction, ArrowUpRight, Linkedin } from "lucide-react";
import Link from "next/link";

interface WorkInProgressProps {
  title: string;
}

export function WorkInProgress({ title }: WorkInProgressProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/20 p-8 transition-all hover:bg-black/30">
      <div className="flex flex-col items-start gap-4">
        <Construction className="h-8 w-8 text-muted-foreground" />
        <div className="space-y-2">
          <h3 className="text-xl text-left font-semibold tracking-tight">
            {title}
          </h3>
          <p className="text-muted-foreground text-left">
            This section is currently being updated as part of my new website
            design.
          </p>
        </div>
        <Link
          href="https://linkedin.com/in/alvarocastle"
          className="group inline-flex items-center gap-2 text-sm text-white hover:text-white/80"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-4 w-4" />
          View my professional background on LinkedIn
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </div>
  );
}
