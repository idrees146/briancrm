import type { LeadStatus } from '@/types';

interface StatusBadgeProps {
  status: LeadStatus;
}

const statusMap: Record<LeadStatus, string> = {
  Active: 'A',
  Lost: 'L',
  Pending: 'P',
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`st ${statusMap[status]}`}>
      {status}
    </span>
  );
}