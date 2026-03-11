import StatusBadge from '@/components/ui/StatusBadge';
import ChannelBadge from '@/components/ui/ChannelBadge';
import type { Lead } from '@/types';

interface LeadCardHeaderProps {
  lead: Lead;
}

export default function LeadCardHeader({ lead }: LeadCardHeaderProps) {
  return (
    <div className="lc-h">
      <div className="lc-hl">
        <StatusBadge status={lead.status} />
        <ChannelBadge channel={lead.channel} />
        <span className="lc-dt">{lead.date}</span>
        <span className="lc-age">{lead.age}</span>
        <span className="lc-loc">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {lead.location}
        </span>
      </div>

      <div className="lc-hr">
        {lead.tags?.map((tag) => (
          <span key={tag} className="tag-c">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
              <line x1="7" y1="7" x2="7.01" y2="7" />
            </svg>
            {tag}
          </span>
        ))}

        <a
          href="#"
          className="stip"
          onClick={(e) => e.stopPropagation()}
        >
          Stips {lead.stips}
        </a>

        <a
          href="#"
          className="opl"
          onClick={(e) => e.stopPropagation()}
        >
          Open
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </a>
      </div>
    </div>
  );
}