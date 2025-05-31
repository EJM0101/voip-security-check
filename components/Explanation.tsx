export default function Explanation() {
  return (
    <div className="bg-white shadow p-4 rounded max-w-4xl mx-auto mt-8 text-sm text-gray-700">
      <h2 className="text-lg font-semibold text-blue-700 mb-2">📚 Explication pédagogique</h2>

      <p className="mb-2"><strong>TLS (Transport Layer Security)</strong> : Chiffre les messages SIP pour empêcher les écoutes et attaques de type "man-in-the-middle".</p>

      <p className="mb-2"><strong>SRTP (Secure RTP)</strong> : Assure la confidentialité et l'intégrité des flux vocaux/multimédias en temps réel.</p>

      <p className="mb-2"><strong>Authentification SIP</strong> : Empêche les accès non autorisés ou l'usurpation d'identité lors des enregistrements et des appels.</p>

      <p className="mb-2"><strong>IPsec / VPN</strong> : Crée un tunnel chiffré entre les équipements pour sécuriser l’ensemble du trafic VoIP dans un réseau d’entreprise.</p>

      <p className="mb-2"><strong>Bonne pratique :</strong> Toujours utiliser `transport=tls`, `encryption=yes`, et désactiver `allowguest` dans vos fichiers de configuration SIP.</p>

      <p className="text-gray-600 text-xs mt-4 italic">
        Cette application vous aide à détecter les points faibles dans vos configurations VoIP et propose des conseils concrets pour améliorer la sécurité des communications.
      </p>
    </div>
  );
}
