'use client';

import { useState } from 'react';
import ActivityFeed from './ActivityFeed';
import SendMessageForm from './SendMessageForm';
import type { ActivityTab, NoteType, ActivityFilters } from '@/types';

// Tabs
const ACTIVITY_TABS: ActivityTab[] = ['Make note', 'Create event', 'Send text/email', 'Send Videos'];

// Use exact NoteType strings as defined in your types
const NOTE_TYPES: NoteType[] = [
  'Verification note',
  'Sales note'
];

const FILTER_KEYS = ['text', 'notes', 'events', 'activity'] as const;

export default function ActivityForm() {
  const [activeTab, setActiveTab] = useState<ActivityTab>('Make note');
  
  // Use exact NoteType values
  const [noteType, setNoteType] = useState<NoteType>('Verification note');
  const [teamMember, setTeamMember] = useState<string>(''); 
  const [noteText, setNoteText] = useState<string>('');

  const [filters, setFilters] = useState<ActivityFilters>({
    text: true,
    notes: true,
    events: true,
    activity: true,
  });

  function toggleFilter(key: keyof ActivityFilters) {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  return (
    <div className="af">

      {/* Tabs */}
      <div className="ats">
        {ACTIVITY_TABS.map((tab) => (
          <button
            key={tab}
            className={`at${activeTab === tab ? ' on' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* MAKE NOTE TAB */}
      {activeTab === 'Make note' && (
        <div className="nf">
          <div className="nf-f">
            <label htmlFor="note-type">Note type</label>
            <select
              id="note-type"
              className="nf-sel"
              value={noteType}
              onChange={(e) => setNoteType(e.target.value as NoteType)}
            >
              {NOTE_TYPES.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>

          <div className="nf-f">
            <label htmlFor="team-member">Select team members to notify</label>
            <input
              id="team-member"
              className="nf-in"
              placeholder="Type team member name"
              value={teamMember}
              onChange={(e) => setTeamMember(e.target.value)}
            />
          </div>

          <div className="nf-f">
            <label htmlFor="note-text">Note</label>
            <textarea
              id="note-text"
              className="nf-ta"
              placeholder="Type your note here..."
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              rows={3}
            />
          </div>

          <button
            className="mk-btn"
            onClick={() => setNoteText('')}
          >
            Make Note
          </button>
        </div>
      )}

      {/* SEND TEXT / EMAIL TAB */}
      {activeTab === 'Send text/email' && (
        <SendMessageForm />
      )}

      {/* CREATE EVENT TAB */}
      {activeTab === 'Create event' && (
        <div className="nf">
          <div className="nf-f">
            <label>Event title</label>
            <input className="nf-in" placeholder="Enter event title" />
          </div>

          <div className="nf-f">
            <label>Date</label>
            <input type="date" className="nf-in" />
          </div>

          <div className="nf-f">
            <label>Time</label>
            <input type="time" className="nf-in" />
          </div>

          <button className="mk-btn">
            Create Event
          </button>
        </div>
      )}

      {/* SEND VIDEOS TAB */}
      {activeTab === 'Send Videos' && (
        <div className="nf">
          <div className="nf-f">
            <label>Video URL</label>
            <input className="nf-in" placeholder="Paste video link..." />
          </div>

          <div className="nf-f">
            <label>Message</label>
            <textarea className="nf-ta" rows={3} placeholder="Add message..." />
          </div>

          <button className="mk-btn">
            Send Video
          </button>
        </div>
      )}

      {/* Filters */}
      <div className="a-fil">
        {FILTER_KEYS.map((key) => (
          <label key={key} className="fc">
            <input
              type="checkbox"
              checked={filters[key]}
              onChange={() => toggleFilter(key)}
            />
            <span style={{ textTransform: 'capitalize' }}>{key}</span>
            <span className="fc-o">only</span>
          </label>
        ))}

        <button className="sa-btn">
          Show all
        </button>
      </div>

      {/* Activity Feed */}
      <ActivityFeed />
    </div>
  );
}