<div align="center">

# DialCaptain


### A real dial for Roon, BluOS, WiiM and infrared

<img src="docs/assets/tap-dial.webp" alt="Philips Hue Tap Dial" width="300">

**English** · [Deutsch](README.de.md)

**[Project page](https://mermayer.github.io/DialCaptain/)** · **[Complete guide](https://mermayer.github.io/DialCaptain/guide/)** · **[Enclosure & STL files](https://mermayer.github.io/DialCaptain/#enclosure)**


<a href="https://mermayer.github.io/DialCaptain/video/dialcaptain-installation-en.html"><img src="docs/assets/video-guide-en.svg" alt="Watch the installation video – English" width="330"></a>

</div>

DialCaptain connects a **Philips Hue Tap Dial RDM002** to an
**ESP32-C6 Zero with 8 MB**. Turn the ring for volume and configure four
buttons with short and long actions. One control mode is active at a time;
the other profiles keep their settings.

- **Roon:** zone, playback and volume, plus three favourites selected from
  playlists or My Live Radio. Configure through the extension's settings gear.
- **BluOS:** choose a network player, control playback and assign its stored presets.
- **WiiM:** choose your player and WiiM Home presets; explicitly enable its
  own volume control if you want to use the ring.
- **Infrared:** Learn ten original-remote commands and assign the ring and short/long buttons. Requires optional IR modules directly on the ESP.

**IR in development preview 0.3.0-dev.2:** Ten learned commands, dial and short/long buttons using optional IR modules directly on the ESP. [Wiring and IR guide](https://mermayer.github.io/DialCaptain/guide/#infrared). Software checks passed; real IR module testing remains open. The current local USB package performs a clean installation. Current backups use format 2.

**Long battery life:** Philips Hue specifies **at least two years** for the
Tap Dial’s CR2032 battery. This is a [manufacturer specification](https://www.philips-hue.com/en-gb/p/hue-tap-dial-switch/8719514440999);
actual battery life depends on use. No DialCaptain long-term measurement is
available yet.

**Small USB power supply:** The ESP needs continuous power; a small, stable
**5 V USB supply is sufficient**. A high-power fast charger is not required.
Actual power consumption has not been measured yet.

No Hue Bridge, RoonPilot or extra computer service is needed. Roon mode still
needs Roon Server; BluOS and WiiM connect directly to the player.
DialCaptain sends control commands and does not play audio itself.

## Setup

The complete guide explains USB installation, Wi-Fi, Roon Server selection,
first Tap Dial pairing, the four control modes and file backup/restoration.
Activate web configuration when needed: by default, hold button 4 for eight
seconds and release, or hold BOOT on the running ESP for three seconds.
Amber blinking indicates an active web server. It closes after ten minutes
without interaction; audio control continues.

## More devices and future extensions

DialCaptain can in principle be extended to other network players, amplifiers
and audio equipment from additional manufacturers if they provide a **REST API**
with suitable control commands, reachable from the ESP. The API determines the
available functions, such as volume, play/pause, sources or presets, and the
access requirements.

Each additional system needs an integration to be implemented and tested on
the device. Suitable test devices are currently the main missing resource.
**Roon, BluOS, WiiM and infrared are available today.** Extensibility does not mean that
arbitrary network devices are already supported.

## Project-page status

The [English](https://mermayer.github.io/DialCaptain/) and
[German](https://mermayer.github.io/DialCaptain/de/) project pages are publicly
available. This repository is public and contains only user documentation and media. There is no public
DialCaptain firmware release or approved online installer yet. This repository contains
only project pages, user guides, images and enclosure STL files. It contains
no firmware sources/downloads, tests, development tools or program internals.

## Enclosure

The STL drafts contain a case, lid and two foot variants. Print one case,
one lid and four feet of your chosen type, check fit and prepare the files
in your own slicer. Printer-specific G-code is not distributed.

## License

Copyright © 2026 Senior Coder. Senior Coder-authored material uses the
**DialCaptain Personal-Use Binary License 1.0**, following the same licensing
model as RoonPilot. It permits free private, noncommercial use of the official,
unmodified firmware on supported hardware. Settings backups and private
enclosure printing are expressly permitted. Redistribution, modifications and
commercial use need separate written permission, subject to independent
third-party rights and mandatory statutory rights.

The [license page and complete terms](https://mermayer.github.io/DialCaptain/license/)
explain permitted use, enclosure printing and third-party rights.

## Questions and support

Please report questions and problems in [GitHub Issues](https://github.com/mermayer/DialCaptain/issues)
with the version, mode and exact error. Keep backup files and Wi-Fi credentials private.

A hobby project by Senior Coder. Entirely optional support:
[Send Me a Coffee](https://buy.stripe.com/6oU3cw0eV0hC5nbdlX2Fa00) · [Buy Me a Coffee](https://buymeacoffee.com/mermayer).
