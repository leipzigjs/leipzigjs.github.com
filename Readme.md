# LeipzigJS Usergroup Webseite
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/leipzigjs/leipzigjs.github.com?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Erreichbar unter [http://leipzigjs.github.io](http://leipzigjs.github.io)

## Beiträge posten

* [node.js](http://nodejs.org/) installieren
* `git clone https://github.com/leipzigjs/leipzigjs.github.com.git leipzigjs && cd leipzigjs`
* `npm i wintersmith@1.2.4 -g` um [Wintersmith](https://github.com/jnordberg/wintersmith) global zu installieren
* Ggf. Shell neustarten, damit das Wintersmith-Binary verfügbar ist: `exec $SHELL -l`
* `make server` um den Dev-Server zu starten
* Aufruf unter `localhost:8080`
* Beitrag schreiben als Markdown innerhalb von `src/contents/artikel/[jahr]/[monat]/[tag]/[name]/index.md`
* Autor anlegen nicht vergessen (`src/contents/autoren/[Name mit Leerzeichen].json`)
* `make build` um die Seiten zu generieren
* Git commit und push
    * Falls kein Schreibzugang vorhanden Pull Request stellen
    * Falls Schreibzugang vorhanden direkt pushen und [Ergebnis prüfen](http://leipzigjs.github.io)
