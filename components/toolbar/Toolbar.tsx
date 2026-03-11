'use client';

import { useState } from 'react';
import QuickLinks from './QuickLinks';
import ToolbarControls from './ToolbarControls';
import ToolbarFilters from './ToolbarFilters';
import type { ListView, SortOption } from '@/types';

const SORT_OPTIONS: SortOption[] = ['Recently updated', 'Date created', 'Name A-Z', 'Status'];

export default function Toolbar() {
  const [location, setLocation] = useState('Arizona- Prescott');
  const [loadCount, setLoadCount] = useState('1000');
  const [listView, setListView] = useState<ListView>('Live');
  const [staticFilter, setStaticFilter] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('Recently updated');
  const [search, setSearch] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [compactView, setCompactView] = useState(false);

  return (
    <div className="tb">
      {/* Top row: quick links + controls */}
      <div className="tb-top">
        <QuickLinks />
        <ToolbarControls
          location={location} onLocationChange={setLocation}
          loadCount={loadCount} onLoadCountChange={setLoadCount}
          listView={listView} onListViewChange={setListView}
          staticFilter={staticFilter} onStaticFilterChange={() => setStaticFilter(!staticFilter)}
        />
      </div>

      {/* Bottom row: filters + search + export */}
      <div className="tb-bot">
        <div className="tb-l">
          <button className={`fil-btn${filtersOpen ? ' on' : ''}`} onClick={() => setFiltersOpen(!filtersOpen)}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
            </svg>
            {filtersOpen ? 'Hide' : 'Show'} Filters
          </button>

          <button className="dr-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 4h18v18H3zM16 2v4M8 2v4M3 10h18" />
            </svg>
            <span>Select date range</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <div className="srt">
            <span className="srt-l">Sort by</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)} className="s-sel">
              {SORT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>

        <div className="tb-r">
          <div className="srch">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="srch-ico">
              <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              className="srch-i"
              placeholder="Search by name or phone"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="exp-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Export app list
          </button>
        </div>
      </div>

      {/* Expandable filter panel */}
      {filtersOpen && (
        <ToolbarFilters
          compactView={compactView}
          onCompactViewChange={() => setCompactView(!compactView)}
        />
      )}
    </div>
  );
}