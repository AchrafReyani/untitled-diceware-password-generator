'use client';

interface ToggleButtonProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
}

export default function ToggleButton({ label, checked, onToggle }: ToggleButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-md border transition ${
        checked ? 'bg-blue-600 text-white border-blue-700' : 'bg-white text-gray-800 border-gray-300'
      } hover:shadow`}
      onClick={onToggle}
    >
      {label}
    </button>
  );
}
