'use client';

import { useState } from 'react';
import ToggleButton from './ToggleButton';

export interface ToggleState {
  capitalizeRandomLetters: boolean;
  includeNumbers: boolean;
}

interface ToggleButtonListProps {
  onChange: (states: ToggleState) => void;
}

const initialToggles: ToggleState = {
  capitalizeRandomLetters: false,
  includeNumbers: false,
};

const toggleLabels: Record<keyof ToggleState, string> = {
  capitalizeRandomLetters: 'Capitalize random letters',
  includeNumbers: 'Include numbers',
};

export default function ToggleButtonList({ onChange }: ToggleButtonListProps) {
  const [toggleState, setToggleState] = useState<ToggleState>(initialToggles);

  const handleToggle = (name: keyof ToggleState) => {
    const updated = { ...toggleState, [name]: !toggleState[name] };
    setToggleState(updated);
    onChange(updated);
  };

  return (
 <div className="flex flex-wrap gap-2 mb-6">
  {Object.entries(toggleLabels).map(([key, label]) => (
    <ToggleButton
      key={key}
      label={label}
      checked={toggleState[key as keyof ToggleState]}
      onToggle={() => handleToggle(key as keyof ToggleState)}
    />
  ))}
</div>

  );
}
