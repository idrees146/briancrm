'use client';

import { useState } from 'react';
import Toggle from '@/components/ui/Toggle';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [away, setAway] = useState(false);

  return (
    <nav className="nb header">
      <div className="nb-left">
        {/* <button className="menu-btn" aria-label="Toggle sidebar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button> */}

        <div className="brand">
          <div className="brand-ico">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <span className="brand-n">CRM</span>
          {/* <span className="brand-t">Finance</span> */}
        </div>

        {/* <div className="ann min-w-[510px] w-full">
          <span className="pulse" />
          We&apos;ve launched a <strong style={{ marginLeft: 3 }}>&quot;Did You Know?&quot;</strong>&nbsp;series in our Facebook group—&nbsp;
          <a href="https://www.facebook.com/groups/1910696779327786/" target="_blank" rel="noreferrer">
            click here to join!
          </a>
        </div>
      </div>

      <div className="nb-right">
        <a href="https://www.facebook.com/groups/1910696779327786/" target="_blank" rel="noreferrer" className="nb-ico" aria-label="Facebook">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>

        <a href="#" className="nb-txt">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M2 3h20v14H2zM8 21h8M12 17v4" />
          </svg>
          <span>View mobile</span>
        </a>

        <Toggle checked={away} onChange={() => setAway(!away)} label="Away from desk" />

        <button className="notif" aria-label="Notifications">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="notif-b">3</span>
        </button>

        <div className="umenu">
          <button className="u-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <div className="ava">AK</div>
            <div className="u-inf">
              <span className="u-nm">User102</span>
              <span className="u-rl">Super Admin</span>
            </div>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`chev${dropdownOpen ? ' op' : ''}`}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="ddm">
              <div className="dd-sh">Customer Forms</div>
              <a href="#" className="dd-it">Quick Lead</a>
              <a href="#" className="dd-it">Online Application</a>
              <div className="dd-div" />
              <div className="dd-sh">Admin</div>
              <a href="#" className="dd-it">Admin Tools</a>
              <a href="#" className="dd-it">Manage Videos (Personal)</a>
              <a href="#" className="dd-it">Neo University</a>
              <a href="#" className="dd-it">Notifications</a>
              <div className="dd-div" />
              <a href="#" className="dd-it dng">Sign Out</a>
            </div>
          )}
        </div> */}
      </div>
    </nav>
  );
}