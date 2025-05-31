import { useState } from 'react';
import ConfigForm from '../components/ConfigForm';
import AnalysisResult from '../components/AnalysisResult';
import Explanation from '../components/Explanation';
import { analyzeConfig } from '../utils/analyzeConfig';

export default function Home() {
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = (text: string) => {
    const analysis = analyzeConfig(text);
    setResult(analysis);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">VoIP Security Check</h1>
      <p className="text-center text-gray-600 mb-6">Analysez votre configuration VoIP pour détecter les failles de sécurité</p>
      <ConfigForm onAnalyze={handleAnalyze} />
      {result && <AnalysisResult result={result} />}
      <Explanation />
    </div>
  );
}