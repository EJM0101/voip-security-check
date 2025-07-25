# 🔐 VoIP Security Check – Analyseur de sécurité des configurations VoIP

**VoIP Security Check** est une application web pédagogique permettant d’analyser une configuration VoIP (ex: Asterisk, SIP, FreePBX) et d’identifier automatiquement les failles de sécurité courantes.

---

## 🎯 Objectifs pédagogiques

- Détecter les erreurs fréquentes dans les fichiers de configuration VoIP
- Comprendre les bonnes pratiques de sécurisation de la VoIP
- Sensibiliser à l’importance de TLS, SRTP, et de l’authentification SIP
- Proposer des recommandations professionnelles claires et pratiques

---

## 🧠 Concepts illustrés

| Sécurité VoIP   | Description |
|------------------|-------------|
| **TLS**          | Chiffre la signalisation SIP |
| **SRTP**         | Protège les flux voix/vidéo |
| **VPN / IPsec**  | Chiffre l’ensemble du trafic VoIP |
| **Auth SIP**     | Contrôle l’identité de l’appelant |
| **NAT / Fail2ban** | Bloque les IP abusives |

---

## 🧪 Fonctionnalités

- 📤 Import manuel ou collage d’une configuration
- 🔎 Analyse automatique : TLS, SRTP, auth, allowguest, encryption...
- ❌ Détection des failles
- ✅ Recommandations pédagogiques
- 📚 Explication intégrée des bonnes pratiques VoIP

---

## ▶️ Installation

```bash
npm install
npm run dev

Ouvrir ensuite : http://localhost:3000


---

## 🚀 Déploiement

Déployable directement sur https://vercel.com


---

## 📘 Licence

Projet open source à visée pédagogique.