export default function AnalysisResult({ result }: { result: any }) {
  return (
    <div className="bg-white shadow p-4 rounded max-w-3xl mx-auto mt-4">
      <h2 className="text-xl font-bold text-blue-700 mb-3">🔍 Résultat de l'analyse</h2>
      <ul className="space-y-2">
        {result.findings.map((f: string, i: number) => (
          <li key={i} className="text-red-600">❌ {f}</li>
        ))}
        {result.recommendations.length > 0 && (
          <>
            <h3 className="text-md mt-4 font-semibold text-green-700">✅ Recommandations :</h3>
            {result.recommendations.map((r: string, i: number) => (
              <li key={i} className="text-green-700">➡️ {r}</li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}