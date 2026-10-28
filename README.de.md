<div align="center">

# DialCaptain

### Dein Drehring für Roon, BluOS und WiiM

<img src="docs/assets/tap-dial.webp" alt="Philips Hue Tap Dial" width="300">

**Deutsch** · [English](README.md)

**[Projektseite](docs/de/index.html)** · **[Vollständige Anleitung](docs/de/guide/index.html)** · **[Gehäuse-STL](docs/downloads/enclosure/)**

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

Der Tap Dial bleibt batteriebetrieben. Der ESP benötigt dauerhaft USB-Strom.
Eine Hue Bridge, RoonPilot oder ein zusätzlicher Computer-Dienst sind nicht
nötig. Roon benötigt einen Roon Server; BluOS und WiiM werden direkt gesteuert.
DialCaptain überträgt Steuerbefehle und spielt selbst keine Musik ab.

## Einrichtung

Die vollständige Anleitung erklärt die USB-Installation, WLAN-Einrichtung,
Roon-Serverwahl, Erstkopplung des Tap Dial, die drei Betriebsarten sowie
Dateisicherung und Wiederherstellung. Die Webkonfiguration wird bei Bedarf
aktiviert: standardmäßig Taste 4 acht Sekunden halten und loslassen,
alternativ BOOT am laufenden ESP drei Sekunden halten. Bernsteinfarbenes
Blinken zeigt den aktiven Webserver; nach zehn Minuten ohne Bedienung
schließt er. Die Audiosteuerung läuft weiter.

## Stand der Projektseiten

Die deutsch-/englischen Projektseiten befinden sich im Aufbau. Es gibt noch
keinen öffentlichen DialCaptain-Release oder freigegebenen Online-Installer.
Dieses Repository enthält ausschließlich Projektseiten, Benutzeranleitungen,
Bilder und Gehäuse-STL-Dateien. Keine Firmwarequellen, Firmwaredownloads,
Tests, Entwicklungswerkzeuge oder Programminterna.

## Gehäuse

Die STL-Entwürfe enthalten Gehäuse, Deckel und zwei Fußvarianten. Ein Gehäuse,
einen Deckel und vier Füße der gewählten Variante drucken; Passform prüfen und
im eigenen Slicer vorbereiten. Es wird kein druckerspezifischer G-Code verteilt.

## Fragen und Unterstützung

Fragen und Fehler bitte unter [GitHub Issues](https://github.com/mermayer/DialCaptain/issues)
mit Version, Betriebsart und genauem Fehlertext melden. Sicherungsdateien und
WLAN-Zugangsdaten privat aufbewahren.

Ein Hobbyprojekt von Senior Coder. Freiwillige Unterstützung:
[Send Me a Coffee](https://buy.stripe.com/6oU3cw0eV0hC5nbdlX2Fa00) · [Buy Me a Coffee](https://buymeacoffee.com/mermayer).
