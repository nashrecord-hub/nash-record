# 🎧 Guide d'utilisation — Nash Mix

**Nash Mix** est le logiciel de mixage audio de **Nash Record**, conçu pour macOS.
Il te permet de mixer plusieurs pistes audio ensemble, de régler leurs volumes et
leur spatialisation, puis d'exporter le morceau final prêt à être diffusé.

Ce guide t'accompagne pas à pas, de l'installation jusqu'à l'export de ton mix.

> 💡 *Ce guide est un modèle. N'hésite pas à l'ajuster pour qu'il corresponde
> exactement aux menus et fonctions présents dans ta version de Nash Mix.*

---

## Sommaire

1. [Configuration requise](#1-configuration-requise)
2. [Installation](#2-installation)
3. [Premier lancement](#3-premier-lancement)
4. [Découvrir l'interface](#4-découvrir-linterface)
5. [Créer un nouveau projet](#5-créer-un-nouveau-projet)
6. [Importer tes pistes audio](#6-importer-tes-pistes-audio)
7. [Mixer tes pistes](#7-mixer-tes-pistes)
8. [Lecture et navigation](#8-lecture-et-navigation)
9. [Exporter ton mix](#9-exporter-ton-mix)
10. [Raccourcis clavier](#10-raccourcis-clavier)
11. [Conseils de mixage](#11-conseils-de-mixage)
12. [Questions fréquentes](#12-questions-fréquentes)

---

## 1. Configuration requise

| Élément | Recommandé |
|---|---|
| Système | macOS 12 (Monterey) ou plus récent |
| Processeur | Apple Silicon (M1/M2/M3) ou Intel |
| Mémoire (RAM) | 8 Go minimum, 16 Go recommandé |
| Espace disque | 500 Mo pour l'application + espace pour tes projets |
| Audio | Casque ou enceintes de monitoring conseillés |

---

## 2. Installation

1. Télécharge le fichier **`Nash Mix.dmg`**.
2. Double-clique sur le fichier `.dmg` pour l'ouvrir.
3. Glisse l'icône **Nash Mix** dans le dossier **Applications**.
4. Éjecte l'image disque (clic droit → *Éjecter*).

> ⚠️ **Première ouverture bloquée par macOS ?**
> Si macOS affiche *« Nash Mix ne peut pas être ouvert car son
> développeur n'a pas pu être vérifié »*, fais un **clic droit** sur
> l'application → **Ouvrir**, puis confirme avec **Ouvrir**. Tu n'auras à le
> faire qu'une seule fois. Tu peux aussi l'autoriser dans
> **Réglages Système → Confidentialité et sécurité**.

---

## 3. Premier lancement

Au premier démarrage, Nash Mix peut te demander l'autorisation d'accéder à
certains dossiers (par exemple **Musique** ou **Téléchargements**) pour lire tes
fichiers audio. Accepte pour pouvoir importer tes pistes.

Vérifie ensuite que la **sortie audio** est bien réglée sur ton casque ou tes
enceintes (voir *Réglages → Audio*).

---

## 4. Découvrir l'interface

L'écran principal de Nash Mix se compose généralement de quatre zones :

- **La liste des pistes** — chaque piste importée apparaît sur une ligne.
- **La table de mixage** — les curseurs de volume, panoramique et boutons
  *Mute / Solo* de chaque piste.
- **La barre de transport** — les boutons Lecture ▶️, Pause ⏸️, Stop ⏹️ et
  la position de lecture.
- **Le master** — le volume général du mix, juste avant l'export.

---

## 5. Créer un nouveau projet

1. Ouvre le menu **Fichier → Nouveau projet** (ou `⌘ + N`).
2. Donne un nom à ton projet (ex. *« Sultan Nash - Nouveau titre »*).
3. Choisis un emplacement de sauvegarde.
4. Ton projet vide s'ouvre, prêt à recevoir des pistes.

> 💾 Pense à enregistrer régulièrement avec `⌘ + S`.

---

## 6. Importer tes pistes audio

1. Menu **Fichier → Importer** (ou glisse-dépose tes fichiers directement dans
   la fenêtre).
2. Sélectionne un ou plusieurs fichiers audio.
3. Chaque fichier devient une **piste** distincte.

**Formats pris en charge :** WAV, AIFF, MP3, M4A (AAC).

> 🎚️ Pour un mixage de qualité, privilégie des fichiers **WAV** ou **AIFF**
> non compressés.

---

## 7. Mixer tes pistes

C'est le cœur de Nash Mix. Pour chaque piste, tu peux régler :

### Volume
Fais glisser le **curseur de volume** vers le haut ou le bas pour équilibrer
la piste par rapport aux autres. Surveille le niveau pour éviter la saturation
(le rouge dans le VU-mètre).

### Panoramique (Pan)
Le **potentiomètre de panoramique** place le son à gauche, au centre ou à
droite dans l'image stéréo. Utile pour aérer un mix (ex. guitare à gauche,
clavier à droite).

### Mute et Solo
- **Mute (M)** — coupe le son de la piste.
- **Solo (S)** — n'écoute que cette piste (coupe toutes les autres).

### Le master
Le **fader master** contrôle le volume global. Vise un niveau qui reste
sous 0 dB pour éviter la distorsion à l'export.

---

## 8. Lecture et navigation

- **Barre d'espace** — lecture / pause.
- Clique dans la timeline pour **déplacer la tête de lecture**.
- Écoute en boucle une portion pour affiner un réglage précis.

---

## 9. Exporter ton mix

Quand ton mixage te convient :

1. Menu **Fichier → Exporter** (ou `⌘ + E`).
2. Choisis le **format** de sortie :
   - **WAV** — qualité maximale (pour master / distribution).
   - **MP3** — fichier léger (pour partage / écoute rapide).
3. Sélectionne la **qualité** (ex. 44,1 kHz / 16 bits pour un standard CD).
4. Choisis le dossier de destination et clique sur **Exporter**.

> ✅ Écoute toujours le fichier exporté avant de le diffuser, pour vérifier
> qu'il n'y a ni saturation ni silence en trop.

---

## 10. Raccourcis clavier

| Action | Raccourci |
|---|---|
| Nouveau projet | `⌘ + N` |
| Ouvrir un projet | `⌘ + O` |
| Enregistrer | `⌘ + S` |
| Importer un fichier | `⌘ + I` |
| Exporter le mix | `⌘ + E` |
| Lecture / Pause | `Espace` |
| Annuler | `⌘ + Z` |
| Rétablir | `⌘ + ⇧ + Z` |

> *Les raccourcis peuvent varier selon ta version — ajuste ce tableau si besoin.*

---

## 11. Conseils de mixage

- 🔊 **Mixe à volume modéré.** Ton oreille se fatigue vite ; un volume trop
  fort fausse ton jugement.
- 🎚️ **Commence par les niveaux.** Équilibre d'abord le volume de chaque piste
  avant de toucher au panoramique.
- 🎧 **Écoute sur plusieurs supports.** Casque, enceintes, téléphone : un bon
  mix doit sonner correctement partout.
- 📉 **Garde de la marge (headroom).** Laisse le master sous 0 dB pour un
  master propre.
- 💾 **Enregistre souvent** et garde des versions (`mix_v1`, `mix_v2`…).

---

## 12. Questions fréquentes

**Nash Mix ne s'ouvre pas au premier lancement.**
C'est une sécurité de macOS. Fais un clic droit sur l'app → *Ouvrir*
(voir la section [Installation](#2-installation)).

**Je n'entends aucun son.**
Vérifie : le volume master n'est pas à zéro, aucune piste importante n'est en
*Mute*, et la sortie audio pointe vers le bon appareil.

**Mon export sature (grésille).**
Baisse le fader master et les pistes les plus fortes, puis ré-exporte.

**Quels fichiers importer pour la meilleure qualité ?**
Des **WAV** ou **AIFF** non compressés plutôt que des MP3.

---

*Nash Mix — un outil signé **Nash Record**.* 🎵
