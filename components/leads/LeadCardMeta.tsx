import StatusBadge from '@/components/ui/StatusBadge';
import type { Lead } from '@/types';

interface LeadCardMetaProps {
  lead: Lead;
}

export default function LeadCardMeta({ lead }: LeadCardMetaProps) {
  return (
    <div className="li-col flex items-center gap-6">

      <div className="flex items-center gap-2">
        <span className="ml">Status</span>
        <StatusBadge status={lead.status} />
      </div>

      <div className="flex items-center gap-2">
        <span className="ml">Full Name</span>
        <a href="#" onClick={(e) => e.stopPropagation()}>
          {lead.name}
        </a>
      </div>

      <div className="flex items-center gap-2">
        <span className="ml">BDR:</span>
        <span className="mv">{lead.bdr ?? '—'}</span>
      </div>

    </div>
  );
}