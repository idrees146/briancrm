'use client';

import Toggle from '@/components/ui/Toggle';

interface ToolbarFiltersProps {
  compactView: boolean;
  onCompactViewChange: () => void;
}

const FILTER_FIELDS = ['Status', 'Source', 'Sales', 'BDR', 'Location', 'Tags'] as const;

export default function ToolbarFilters({ compactView, onCompactViewChange }: ToolbarFiltersProps) {
  return (
    <div className="fp">
      <div className="fg">
        {FILTER_FIELDS.map((field) => (
          <div key={field} className="fi">
            <label htmlFor={`filter-${field}`}>{field}</label>
            <select id={`filter-${field}`}>
              <option value="">All</option>
            </select>
          </div>
        ))}
      </div>
      <div className="mt8">
        <Toggle
          checked={compactView}
          onChange={onCompactViewChange}
          label="Compact View"
          sm
        />
      </div>
    </div>
  );
}