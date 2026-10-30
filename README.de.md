<div align="center">

# DialCaptain


### Dein Drehring für Roon, BluOS, WiiM und Infrarot

<img src="docs/assets/tap-dial.webp" alt="Philips Hue Tap Dial" width="300">

**Deutsch** · [English](README.md)

**[Projektseite](https://mermayer.github.io/DialCaptain/de/)** · **[Vollständige Anleitung](https://mermayer.github.io/DialCaptain/de/guide/)** · **[Gehäuse & STL-Dateien](https://mermayer.github.io/DialCaptain/de/#enclosure)**


<a href="https://mermayer.github.io/DialCaptain/video/dialcaptain-installation-de.html"><img src="docs/assets/video-guide-de.svg" alt="Installationsvideo ansehen – Deutsch" width="330"></a>

</div>

DialCaptain verbindet einen **Philips Hue Tap Dial RDM002** mit einem
**ESP32-C6 Zero mit 8 MB**. Der Ring regelt die Lautstärke; vier Tasten lassen
sich für kurze und lange Aktionen belegen. Es ist eine Betriebsart aktiv;
die Einstellungen der anderen bleiben erhalten.

- **Roon:** Zone, Wiedergabe und Lautstärke sowie drei Favoriten aus Playlists
  oder Meine Live-Radiosender. Konfiguration im Zahnrad der Roon-Erweiterung.
- **BluOS:** Player im Netzwerk auswählen, Wiedergabe steuern und gespeicherte
  Presets den Tasten zuordnen.
- **WiiM:** Player und WiiM-Home-Presets wählen; die eigene WiiM-Lautstärke kann
  ausdrücklich für den Ring aktiviert werden.
- **Infrarot:** Zehn Befehle der Originalfernbedienung lernen und Drehring sowie kurze/lange Tasten zuordnen. Benötigt optionale IR-Module direkt am ESP.

**IR im Entwicklungsstand 0.3.0-dev.2:** Zehn Lernplätze, Drehring und kurze/lange Tasten mit optionalen IR-Modulen direkt am ESP. [Anschlüsse und IR-Anleitung](https://mermayer.github.io/DialCaptain/de/guide/#infrared). Die Softwareprüfungen sind abgeschlossen; der Test mit echten IR-Modulen steht noch aus. Das aktuelle lokale USB-Paket führt eine Neuinstallation aus. Aktuelle Sicherungen verwenden Format 2.

**Lange Batterielaufzeit:** Philips Hue nennt für den Tap Dial mit einer CR2032
**mindestens zwei Jahre**. Das ist eine [Herstellerangabe](https://www.philips-hue.com/de-de/p/hue-tap-dial-switch/8719514440999);
die tatsächliche Laufzeit hängt von der Nutzung ab. Für DialCaptain liegt noch
keine Langzeitmessung vor.

**Kleine USB-Stromversorgung:** Der ESP braucht dauerhaft Strom; ein kleines,
stabiles **5-V-USB-Netzteil genügt**. Ein leistungsstarkes Schnellladegerät ist
nicht erforderlich. Konkrete Verbrauchswerte wurden noch nicht gemessen.

Eine Hue Bridge, RoonPilot oder ein zusätzlicher Computer-Dienst sind nicht
nötig. Roon benötigt einen Roon Server; BluOS und WiiM werden direkt gesteuert.
DialCaptain überträgt Steuerbefehle und spielt selbst keine Musik ab.

## Einrichtung

Die vollständige Anleitung erklärt die USB-Installation, WLAN-Einrichtung,
Roon-Serverwahl, Erstkopplung des Tap Dial, die vier Betriebsarten sowie
Dateisicherung und Wiederherstellung. Die Webkonfiguration wird bei Bedarf
aktiviert: standardmäßig Taste 4 acht Sekunden halten und loslassen,
alternativ BOOT am laufenden ESP drei Sekunden halten. Bernsteinfarbenes
Blinken zeigt den aktiven Webserver; nach zehn Minuten ohne Bedienung
schließt er. Die Audiosteuerung läuft weiter.

## Weitere Geräte und zukünftige Erweiterungen

DialCaptain lässt sich grundsätzlich auch für Netzwerk-Player, Verstärker und
andere Audiogeräte weiterer Hersteller erweitern, wenn sie eine vom ESP
erreichbare **REST-API** mit passenden Steuerbefehlen bereitstellen. Welche
Funktionen möglich sind – beispielsweise Lautstärke, Play/Pause, Quellen oder
Presets – und welcher Zugriff nötig ist, hängt von der jeweiligen API ab.

Für jedes weitere System muss eine passende Anbindung umgesetzt und am Gerät
getestet werden. Dafür fehlen derzeit vor allem geeignete Testgeräte.
**Aktuell verfügbar sind Roon, BluOS, WiiM und Infrarot.** Die Erweiterbarkeit bedeutet
keine bereits vorhandene Unterstützung beliebiger Netzwerkgeräte.

## Stand der Projektseiten

Die [deutschen](https://mermayer.github.io/DialCaptain/de/) und
[englischen](https://mermayer.github.io/DialCaptain/) Projektseiten sind öffentlich
erreichbar. Dieses Repository ist öffentlich und enthält nur Benutzeranleitungen und Medien. Es gibt noch keinen
öffentlichen DialCaptain-Firmware-Release oder freigegebenen Online-Installer.
Dieses Repository enthält ausschließlich Projektseiten, Benutzeranleitungen,
Bilder und Gehäuse-STL-Dateien. Keine Firmwarequellen, Firmwaredownloads,
Tests, Entwicklungswerkzeuge oder Programminterna.

## Gehäuse

Die STL-Entwürfe enthalten Gehäuse, Deckel und zwei Fußvarianten. Ein Gehäuse,
einen Deckel und vier Füße der gewählten Variante drucken; Passform prüfen und
im eigenen Slicer vorbereiten. Es wird kein druckerspezifischer G-Code verteilt.

## Lizenz

Copyright © 2026 Senior Coder. Für die eigenen Bestandteile gilt die
**DialCaptain-Lizenz für private Binärnutzung 1.0**, nach derselben Grundlage wie
bei RoonPilot. Sie erlaubt die kostenlose private, nicht kommerzielle Nutzung
der offiziellen unveränderten Firmware auf unterstützter Hardware.
Konfigurationssicherungen und der private Gehäusedruck sind ausdrücklich erlaubt.
Weitergabe, Änderungen und kommerzielle Nutzung benötigen eine gesonderte
schriftliche Erlaubnis, soweit keine eigenständigen Drittanbieterrechte oder
zwingenden gesetzlichen Rechte gelten.

Die [Lizenzseite mit vollständigen Bedingungen](https://mermayer.github.io/DialCaptain/de/license/)
erklärt Nutzung, Gehäusedruck und Rechte Dritter.

## Fragen und Unterstützung

Fragen und Fehler bitte unter [GitHub Issues](https://github.com/mermayer/DialCaptain/issues)
mit Version, Betriebsart und genauem Fehlertext melden. Sicherungsdateien und
WLAN-Zugangsdaten privat aufbewahren.

Ein Hobbyprojekt von Senior Coder. Freiwillige Unterstützung:
[Send Me a Coffee](https://buy.stripe.com/6oU3cw0eV0hC5nbdlX2Fa00) · [Buy Me a Coffee](https://buymeacoffee.com/mermayer).
