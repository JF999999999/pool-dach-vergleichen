# pool-dach-vergleichen

Statische Empfehlungs-/Vergleichsseite zum Thema Poolüberdachungen mit
Fokus auf das schienenlose Echtglas-System von **Paradiso Systeme GmbH**.
Reines HTML/CSS/JS ohne Build-Schritt – direkt per FTP hochladbar.

## Struktur

```
index.html          Startseite (Hero, Vergleich, Vorteile, Modelle, Presse, Kontakt-CTA)
impressum.html       Impressum
datenschutz.html     Datenschutzerklärung
css/styles.css        Design-System (Farben, Typografie, Komponenten)
js/main.js            Mobile Nav-Toggle, Scroll-Reveal, Footer-Jahr
```

## Vor dem Upload noch ausfüllen

Im Impressum (`impressum.html`) sind rechtlich nötige, aber nicht öffentlich
verifizierbare Angaben als `[Platzhalter]` markiert:

- Name der Geschäftsführung
- Handelsregistergericht & HRB-Nummer
- Umsatzsteuer-ID
- Verantwortliche Person nach § 18 Abs. 2 MStV

In `datenschutz.html` fehlt der Name/die Anschrift des tatsächlichen
FTP-/Hosting-Anbieters (Platzhalter im Abschnitt „Server-Logfiles").

Alle übrigen Angaben (Adresse, Telefon, E-Mail von Paradiso Systeme GmbH)
stammen aus öffentlich zugänglichen Quellen (Firmenverzeichnisse,
paradiso.tv) und sollten vor dem Livegang trotzdem gegengeprüft werden.

## Deployment per FTP

1. Gesamten Ordnerinhalt (`index.html`, `impressum.html`, `datenschutz.html`,
   `css/`, `js/`) 1:1 in das Root-Verzeichnis des Webspace hochladen.
2. Keine weiteren Abhängigkeiten – die Seite lädt lediglich Google Fonts
   von `fonts.googleapis.com` extern.
3. Alle Handlungsaufforderungen (CTAs) verlinken bewusst nach außen auf
   `www.paradiso.tv` (kein eigenes Kontaktformular).
