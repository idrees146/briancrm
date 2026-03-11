const LINKS = [
  'Full Application Form',
  'Short Application',
  'Add New Lead',
  'Event Schedule',
  'Activity Report',
  'Search Inventory',
  'BDC Report',
  'Lead to Sales Report',
] as const;

export default function QuickLinks() {
  return (
    <nav className="ql">
      {LINKS.map((label) => (
        <a key={label} href="#" className="ql-a">
          {label}
        </a>
      ))}
    </nav>
  );
}