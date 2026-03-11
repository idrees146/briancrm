'use client';

import { useState } from 'react';

export default function DetailFields() {
  const [tags, setTags] = useState('');

  return (
    <div className="space-y-4 p-3">

      {/* Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

        <div className="flex flex-col text-xs">
          <label className="text-gray-500 mb-1">Sales</label>
          <select className="border rounded px-2 py-1 text-xs">
            <option>—</option>
          </select>
        </div>

        <div className="flex flex-col text-xs">
          <label className="text-gray-500 mb-1">Decision</label>
          <select className="border rounded px-2 py-1 text-xs">
            <option>—</option>
          </select>
        </div>

        <div className="flex flex-col text-xs">
          <label className="text-gray-500 mb-1">Source</label>
          <span className="text-blue-600 text-xs">Facebook</span>
        </div>

        <div className="flex flex-col text-xs">
          <label className="text-gray-500 mb-1">Detail</label>
          <span>—</span>
        </div>

      </div>

      {/* Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

        <div className="flex flex-col text-xs">
          <label className="text-gray-500 mb-1">Sales 2</label>
          <select className="border rounded px-2 py-1 text-xs">
            <option>—</option>
          </select>
        </div>

        <div className="flex flex-col text-xs">
          <label className="text-gray-500 mb-1">Lot</label>
          <select className="border rounded px-2 py-1 text-xs">
            <option>Arizona- Pri</option>
          </select>
        </div>

        <div className="flex flex-col text-xs">
          <label className="text-gray-500 mb-1">Tiers</label>
          <span>—</span>
        </div>

      </div>

      {/* Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

        <div className="flex flex-col text-xs">
          <label className="text-gray-500 mb-1">BDR</label>
          <select className="border rounded px-2 py-1 text-xs">
            <option>Natalia L</option>
          </select>
        </div>

        <div className="flex flex-col text-xs">
          <label className="text-gray-500 mb-1">BDR 2</label>
          <select className="border rounded px-2 py-1 text-xs">
            <option>—</option>
          </select>
        </div>

      </div>

      {/* Tags */}
      <div className="flex flex-col text-xs">
        <label className="text-gray-500 mb-1">Tags</label>
        <input
          className="border rounded px-2 py-1 text-xs"
          placeholder="Add tag..."
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>

    </div>
  );
}