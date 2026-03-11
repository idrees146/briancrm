'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import type { EventsTab } from '@/types'

const TABS: { label: EventsTab; count: number }[] = [
  { label: 'Today Events', count: 0 },
  { label: 'All Scheduled Events', count: 1 },
  { label: 'Action Plans', count: 2 },
]

export default function EventsTabs() {
  const [activeTab, setActiveTab] = useState<EventsTab>('Today Events')

  return (
    <div className="space-y-3">

      <div className="flex gap-2 flex-wrap">
        {TABS.map(({ label, count }) => (
          <Button
            key={label}
            size="sm"
            variant={activeTab === label ? "default" : "outline"}
            onClick={() => setActiveTab(label)}
          >
            {label} ({count})
          </Button>
        ))}
      </div>

      {activeTab === 'Today Events' && (
        <div className="text-sm text-gray-500">No events today</div>
      )}

      {activeTab === 'All Scheduled Events' && (
        <div className="text-sm text-gray-500">1 scheduled event</div>
      )}

      {activeTab === 'Action Plans' && (
        <div className="text-sm text-gray-500">2 action plans active</div>
      )}

    </div>
  )
}