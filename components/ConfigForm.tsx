import { useState } from 'react';

export default function ConfigForm({ onAnalyze }: { onAnalyze: (config: string) => void }) {
  const [config, setConfig] = useState('');

  return (
    <div className="bg-white shadow p-4 rounded max-w-3xl mx-auto mb-6">
      <label className="block mb-2 font-semibold text-blue-700">Configuration SIP/VoIP :</label>
      <textarea
        value={config}
        onChange={(e) => setConfig(e.target.value)}
        className="w-full h-40 p-2 border rounded mb-4"
        placeholder="Collez ici votre configuration Asterisk, SIP ou VoIP..."
      />
      <button
        onClick={() => onAnalyze(config)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Analyser
      </button>
    </div>
  );
}