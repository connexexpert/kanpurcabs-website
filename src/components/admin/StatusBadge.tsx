import { cn } from '@/lib/utils';

export function StatusBadge({ status }: { status: string }) {
  const normalized = status.toLowerCase();
  
  let colorClass = 'bg-slate-100 text-slate-700';
  let label = status.replace('_', ' ');

  if (normalized === 'new' || normalized === 'pending') colorClass = 'bg-blue-100 text-blue-700';
  else if (normalized === 'confirmed') colorClass = 'bg-green-100 text-green-700';
  else if (normalized === 'in_progress' || normalized === 'active') colorClass = 'bg-yellow-100 text-yellow-700';
  else if (normalized === 'completed') colorClass = 'bg-emerald-100 text-emerald-700';
  else if (normalized === 'cancelled') colorClass = 'bg-red-100 text-red-700';

  return (
    <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium capitalize whitespace-nowrap", colorClass)}>
      {label}
    </span>
  );
}
