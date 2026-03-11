interface DetailHeaderProps {
  onClose: () => void;
}

export default function DetailHeader({ onClose }: DetailHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--neo-border)] px-3 py-2 bg-[var(--surface)] p-[20px]">

      {/* Left */}
      <div className="flex items-center gap-2 text-[11px] flex-wrap ">

        <span className="px-2 py-[2px] rounded-full bg-red-100 text-red-600 font-medium">
          Lost
        </span>

        <span className="px-2 py-[2px] rounded-full bg-green-100 text-green-600 font-medium">
          Online
        </span>

        <span className="text-gray-500">10/28/25</span>
        <span className="text-gray-500">4mo | 4mo | 0v</span>
        <span className="text-gray-500">Arizona- P...</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">

        <button
          className="flex items-center justify-center w-7 h-7 rounded-md border border-[var(--neo-border)] hover:bg-gray-100"
          aria-label="Pin"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
          </svg>
        </button>

        <button
          className="flex items-center justify-center w-7 h-7 rounded-md border border-[var(--neo-border)] bg-blue-50"
          aria-label="Mobile view"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
            <path d="M12 18h.01" />
          </svg>
        </button>

        <button
          onClick={onClose}
          className="flex flex-col justify-center items-center w-7 h-7 rounded-md border border-[var(--neo-border)] hover:bg-gray-100"
          aria-label="More options"
        >
          <span className="w-[3px] h-[3px] bg-gray-600 rounded-full mb-[2px]" />
          <span className="w-[3px] h-[3px] bg-gray-600 rounded-full mb-[2px]" />
          <span className="w-[3px] h-[3px] bg-gray-600 rounded-full" />
        </button>

      </div>
    </div>
  );
}