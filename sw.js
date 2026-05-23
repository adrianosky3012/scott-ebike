# Scott eRide Strike 930 — Calcolatore Autonomia

PWA (Progressive Web App) per calcolare il consumo stimato della **Scott eRide Strike 930** in base ai livelli di assistenza.

## 🚴 Livelli supportati

| Livello | Wh/km |
|---------|-------|
| ECO     | 3,4   |
| TOUR    | 5,0   |
| E-BIKE  | 10,0  |
| TURBO   | >10 (configurabile) |

## 📱 Funzionalità

- Inserimento capacità batteria e % di carica attuale
- Km totali del percorso
- Slider per distribuire i km tra i 4 livelli
- Calcolo Wh usati e % batteria per ogni livello
- Riepilogo totale con avvisi (energia sufficiente / attenzione / insufficiente)
- Funziona **offline** (service worker)
- Installabile su Android come app

## 🚀 Deploy su GitHub Pages

1. Crea un repository pubblico su GitHub (es. `scott-ebike`)
2. Carica tutti i file in questo repository
3. Vai su **Settings → Pages → Source: main branch / root**
4. L'app sarà disponibile su `https://tuonome.github.io/scott-ebike/`

## 📲 Installazione su Android

1. Apri il link con **Chrome**
2. Comparirà il banner "Installa l'app" in basso
3. Tap su **Installa** — l'app apparirà nella home screen!

## 🔧 Personalizzazione

- Modifica i valori Wh/km in `index.html` nella variabile `WH_PER_KM`
- La capacità default è 630 Wh (Scott eRide Strike 930)
