import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-dark pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <div className="text-gray-300 space-y-8 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">1. Verantwortlicher</h2>
              <p>
                Joshua Werner<br />
                JW MEDIA<br />
                E-Mail: distorted.heights@joshuawerner-media.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Allgemeine Informationen</h2>
              <p>
                Diese Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir diese nutzen.
                Wir nehmen den Schutz Ihrer persönlichen Daten ernst und halten uns an alle geltenden 
                Datenschutzgesetze, insbesondere die Datenschutz-Grundverordnung (DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">3. Hosting und Webserver</h2>
              <p>
                Diese Website wird auf GitHub Pages gehostet. GitHub, Inc. ist ein Unternehmen der Microsoft-Gruppe.
                Beim Besuch dieser Website können IP-Adressen und technische Informationen von GitHub erfasst werden.
                Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub: 
                <a href="https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-white hover:text-gray-400 transition-colors ml-1">
                  https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Kontaktformular</h2>
              <p>
                Wenn Sie das Kontaktformular auf dieser Website ausfüllen, werden Ihre Daten 
                (Name, E-Mail-Adresse, Nachricht) ausschließlich zum Zweck der Kontaktaufnahme 
                und Beantwortung Ihrer Anfrage verarbeitet.
              </p>
              <p className="mt-4">
                <strong>Speicherung:</strong> Die Daten werden nicht dauerhaft auf unseren Servern gespeichert. 
                Sie werden an Ihre E-Mail-Adresse versendet und danach gelöscht. Der Verantwortliche 
                speichert die E-Mails entsprechend seiner E-Mail-Provider-Datenschutzrichtlinien.
              </p>
              <p className="mt-4">
                <strong>Rechtsgrundlage:</strong> Artikel 6 Absatz 1 lit. a DSGVO (Einwilligung)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Ihre Rechte</h2>
              <p>
                Sie haben das Recht:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>auf Auskunft über die von uns gespeicherten Daten</li>
                <li>auf Berichtigung unrichtiger Daten</li>
                <li>auf Löschung Ihrer Daten</li>
                <li>auf Einschränkung der Verarbeitung</li>
                <li>auf Datenübertragbarkeit</li>
                <li>Widerspruch gegen die Verarbeitung</li>
              </ul>
              <p className="mt-4">
                Bitte richten Sie entsprechende Anfragen an: distorted.heights@joshuawerner-media.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">6. Beschwerde bei der Aufsichtsbehörde</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, 
                wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten rechtswidrig ist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">7. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen, um sie den 
                geltenden Gesetzen entsprechend zu aktualisieren. Die aktuelle Fassung ist jederzeit 
                auf dieser Seite verfügbar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">8. Kontakt</h2>
              <p>
                Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter: distorted.heights@joshuawerner-media.de
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-dark-accent">
              <p className="text-sm text-gray-400">
                Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE')}
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <Link href="/" className="text-white hover:text-gray-400 transition-colors">
              ← Zurück zur Startseite
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
