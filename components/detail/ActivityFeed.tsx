import type { JSX } from 'react';
import { ACTIVITY_FEED } from '@/data/mockData';
import type { ActivityType } from '@/types';

const TYPE_CLASSES: Record<ActivityType, string> = {
  email: 'em',
  followup: 'fu',
  status: 'st',
  text: 'tx',
  esign: 'es',
  note: 'no',
};

function FeedIcon({ type }: { type: ActivityType }) {
  const icons: Record<ActivityType, JSX.Element> = {
    email: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    followup: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 4h18v18H3zM16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    status: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="9,11 12,14 22,4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    text: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    esign: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    note: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  };
  return icons[type];
}

export default function ActivityFeed() {
  return (
    <div className="feed">
      {ACTIVITY_FEED.map((item, i) => (
        <div key={i} className={`fi-r ${TYPE_CLASSES[item.type]}`}>
          <div className="fi-ic">
            <FeedIcon type={item.type} />
          </div>
          <div className="fi-c">
            <span className="fi-k">{item.kind}</span>
            <span className="fi-d">{item.desc}</span>
          </div>
          <div className="fi-m">
            <span className="fi-a">{item.actor}</span>
            <span className="fi-t">{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}