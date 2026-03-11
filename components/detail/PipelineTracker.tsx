const PIPELINE_STEPS = [
  'Fresh',
  'Working',
  'Pre-Approved',
  'Application Submitted',
  'Appointment Set',
] as const

const DONE_UNTIL = 2

export default function PipelineTracker() {
  return (
    <div className="flex items-center flex-wrap gap-2 text-xs">

      {PIPELINE_STEPS.map((step, i) => (
        <div key={step} className="flex items-center gap-1">

          <span
            className={`px-2 py-[2px] rounded border
            ${i <= DONE_UNTIL
              ? "bg-green-50 text-green-600 border-green-200"
              : "bg-gray-50 text-gray-500 border-gray-200"
            }`}
          >
            {step}
          </span>

          {i < PIPELINE_STEPS.length - 1 && (
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-400"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          )}

        </div>
      ))}

    </div>
  )
}