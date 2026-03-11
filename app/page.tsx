import Navbar from '@/components/layout/Navbar';
import StatsBar from '@/components/layout/StatsBar';
import Toolbar from '@/components/toolbar/Toolbar';
import LeadsList from '@/components/leads/LeadsList';

export default function Page() {
  return (
    <div className="root">
      <Navbar />
      {/* <StatsBar />
      <Toolbar /> */}
      <LeadsList />
    </div>
  );
}