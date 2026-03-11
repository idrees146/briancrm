'use client';

import { useState } from 'react';
import LeadCard from './LeadCard';
import DetailPanel from '@/components/detail/DetailPanel';
import { LEADS } from '@/data/mockData';
import type { Lead } from '@/types';

export default function LeadsList() {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(LEADS[0]);

  function handleSelect(lead: Lead) {
    setSelectedLead((prev) => (prev?.id === lead.id ? null : lead));
  }

  return (
    <div className="body">
      <div className={`ll${selectedLead ? ' wp' : ''}`}>
        {LEADS.map((lead) => (
          <LeadCard
            key={lead.id}
            lead={lead}
            selected={selectedLead?.id === lead.id}
            onClick={() => handleSelect(lead)}
          />
        ))}
      </div>

      {selectedLead && (
        <DetailPanel onClose={() => setSelectedLead(null)} />
      )}
    </div>
  );
}