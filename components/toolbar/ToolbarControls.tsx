'use client';

import Toggle from '@/components/ui/Toggle';
import type { ListView } from '@/types';

interface ToolbarControlsProps {
  location: string;
  onLocationChange: (v: string) => void;
  loadCount: string;
  onLoadCountChange: (v: string) => void;
  listView: ListView;
  onListViewChange: (v: ListView) => void;
  staticFilter: boolean;
  onStaticFilterChange: () => void;
}

const LOCATIONS = ['Arizona- Prescott', 'Arizona- Phoenix', 'Arizona- Tucson', 'Arizona- Mesa'];
const LOAD_COUNTS = ['100', '500', '1000', '2000'];
const LIST_VIEWS: ListView[] = ['Live', 'Static'];

export default function ToolbarControls({
  location, onLocationChange,
  loadCount, onLoadCountChange,
  listView, onListViewChange,
  staticFilter, onStaticFilterChange,
}: ToolbarControlsProps) {
  return (
    <div className="tc">
      <div className="cg">
        <span className="c-lbl">Location</span>
        <select
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          className="c-sel"
        >
          {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
        </select>
      </div>

      <div className="cg">
        <span className="c-lbl">Load Count</span>
        <select
          value={loadCount}
          onChange={(e) => onLoadCountChange(e.target.value)}
          className="c-sel nw"
        >
          {LOAD_COUNTS.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>

      <div className="cg">
        <span className="c-lbl">List view</span>
        <select
          value={listView}
          onChange={(e) => onListViewChange(e.target.value as ListView)}
          className="c-sel nw"
        >
          {LIST_VIEWS.map((v) => <option key={v}>{v}</option>)}
        </select>
      </div>

      <Toggle
        checked={staticFilter}
        onChange={onStaticFilterChange}
        label="Static Filter"
        sm
      />
    </div>
  );
}