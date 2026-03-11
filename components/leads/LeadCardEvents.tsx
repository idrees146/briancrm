import type { LeadEvent } from '@/types';

interface LeadCardEventsProps {
  events: LeadEvent[];
}

function EventIcon({ type }: { type: LeadEvent['type'] }) {
  if (type === 'followup') {
    return (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 4h18v18H3zM16 2v4M8 2v4M3 10h18" />
      </svg>
    );
  }

  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function LeadCardEvents({ events }: LeadCardEventsProps) {
  const followupEvent = events.find(ev => ev.type === 'followup');
  if (!followupEvent) return null;

  return (
    <div className="la-col flex items-center h-full">
      <div className="er fu flex items-center justify-between w-full h-full">
        
        <div className="ei flex items-center justify-center">
          <EventIcon type={followupEvent.type} />
        </div>

        <div className="ec flex flex-col justify-center">
          <span className="ek">{followupEvent.kind}</span>
          <span className="ed">{followupEvent.desc}</span>
        </div>

        <div className="em flex flex-col items-end justify-center">
          <span className="es">{followupEvent.sender}</span>
          <span className="et">{followupEvent.time}</span>
        </div>

      </div>
    </div>
  );
}