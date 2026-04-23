import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <Card className="relative overflow-hidden border-none bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-slate-900">
      <div className="text-primary/10 absolute top-4 right-4 dark:text-slate-200">
        <Quote size={48} />
      </div>
      <CardContent className="relative z-10 flex flex-col gap-4 p-6 pt-8">
        <p className="relative text-lg text-slate-700 italic dark:text-slate-200">
          &quot;{quote}&quot;
        </p>
        <div className="mt-4">
          <p className="font-bold text-slate-900 dark:text-slate-200">
            {author}
          </p>
          <p className="text-primary text-sm">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
