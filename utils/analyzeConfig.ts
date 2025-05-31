export function analyzeConfig(text: string) {
  const findings: string[] = [];
  const recommendations: string[] = [];

  if (!/tls|transport\s*=\s*tls/i.test(text)) {
    findings.push('TLS non activé pour la signalisation SIP.');
    recommendations.push('Ajoutez `transport=tls` pour sécuriser les messages SIP.');
  }

  if (!/encryption\s*=\s*yes|srtp/i.test(text)) {
    findings.push('SRTP non activé pour les flux multimédia.');
    recommendations.push('Activez SRTP avec `encryption=yes` pour protéger la voix.');
  }

  if (/allowguest\s*=\s*yes/i.test(text)) {
    findings.push('Appels anonymes autorisés (allowguest=yes).');
    recommendations.push('Désactivez `allowguest` pour éviter l’usage abusif.');
  }

  if (!/auth|username|secret|password/i.test(text)) {
    findings.push('Absence d\'authentification SIP explicite.');
    recommendations.push('Configurez `username` et `secret` pour chaque utilisateur.');
  }

  return { findings, recommendations };
}