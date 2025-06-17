import type { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  skillName: string;
  icon?: LucideIcon;
  className?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
}

export default function SkillBadge({ skillName, icon: Icon, className, variant = "secondary" }: SkillBadgeProps) {
  return (
    <Badge variant={variant} className={cn("text-sm py-1 px-3 flex items-center gap-1.5 shadow-sm", className)}>
      {Icon && <Icon className="h-4 w-4" />}
      <span>{skillName}</span>
    </Badge>
  );
}
