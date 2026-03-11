import DetailHeader from './DetailHeader'
import ActivityForm from './ActivityForm'

interface DetailPanelProps {
  onClose: () => void
}

export default function DetailPanel({ onClose }: DetailPanelProps) {
  return (
    <aside className="w-full md:w-[420px] h-full border-l bg-[var(--surface)] flex flex-col">

      <DetailHeader onClose={onClose} />

      <div className="flex-1 overflow-y-auto">
        <ActivityForm />
      </div>

    </aside>
  )
}