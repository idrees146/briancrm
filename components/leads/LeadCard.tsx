import LeadCardHeader from './LeadCardHeader';
import LeadCardMeta from './LeadCardMeta';
import LeadCardEvents from './LeadCardEvents';
import type { Lead } from '@/types';

interface LeadCardProps {
  lead: Lead;
  selected: boolean;
  onClick: () => void;
}

export default function LeadCard({ lead, selected, onClick }: LeadCardProps) {
  return (
    <div
      className={`lc  ${selected ? ' sel' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-pressed={selected}
    >
      <LeadCardHeader lead={lead} />

      <div className="lc-b">
        <LeadCardMeta lead={lead} />
        {lead.events && lead.events.length > 0 && (
          <LeadCardEvents events={lead.events} />
        )}
      </div>
    </div>
  );
}