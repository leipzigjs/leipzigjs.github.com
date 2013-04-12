title: Eine kleine Zusammenfassung zur Vorstellung von Marionette.js
author: Rene Zschoch
date: 2013-04-12 17:00
template: article.jade

Beim letzten Treffen haben wir wieder ausführlich die Umsetzung von Webanwendungen mit JavaScript diskutiert. Während es die letzten Male vor allem um die Backend-Umsetzung mit Node.js ging, lag diesmal der Schwerpunkt auf der Umsetzung im Frontend. Wie kontrovers das Thema ist, hat sich für mich erst heute wieder beim Lesen eines [Blog-Artikels von Localytics](http://www.localytics.com/blog/2013/angularjs-at-localytics) bestätigt.

In diesem Artikel werden die Hauptprobleme komplexerer [Backbone.js](http://backbonejs.org)-Anwendungen beschrieben. Dabei haben sich die Entwickler zu Beginn leider nicht mit der [Philosophie von Backbone.js](http://backbonejs.org/#FAQ-why-backbone) und den daraus resultierenden Anforderungen an den Entwickler befasst. Denn im Vergleich zu JavaScript-Frameworks wie [Angular.js](http://angularjs.org) oder [Ember.js](http://emberjs.com) gibt Backbone.js kaum Konventionen für die Entwicklung vor und überlässt aus Gründen der Flexibilität wichtige Entscheidungen zur Anwendungsarchitektur dem Entwickler.

Hier setzt die Backbone.js-Erweiterung [Marionette.js](http://marionettejs.com) an. Im Zusammenspiel mit Backbone.js bleibt zwar die Flexibilität erhalten, typische Probleme umfangreicherer Anwendungen werden aber schon im Ansatz vermieden.

Mit Marionette.js erhält Backbone.js unter anderem Module, die den visuellen Aufbau einer Anwendung durch Regions und Layouts vereinfachen sowie weitere Module zur Ausgabe von Backbone.js-Models und Collections. Das ist aber nur eine kleine Auswahl aus einer ganzen Reihe nützlicher [Bestandteile von Marionette.js](https://github.com/marionettejs/backbone.marionette#documentation).

In meinem [Vortrag habe ich an einem realen Projekt meinen Einsatz von Marionette.js beschrieben](http://renezschoch.de/talks/marionettejs-perfectprops) und bin froh, zu Beginn die zusätzliche Zeit für den Einstieg investiert zu haben. Ohne die Unterstützung hätte ich bei meinem ersten Backbone.js-Projekt vermutlich einige Fehlentscheidungen getroffen, die ich im späteren Verlauf des Projekts nur sehr aufwändig hätte beheben können.

Für komplexere Backbone.js-Anwendungen kann ich deshalb nur jedem Entwickler die Verwendung eines Frameworks empfehlen. Neben Marionette.js sind das vor allem [Chaplin.js](http://chaplinjs.org) und [Thorax.js](http://thoraxjs.org), von denen jedes [einen etwas anderen Ansatz](http://9elements.com/io/index.php/comparison-of-marionette-and-chaplin) verfolgt – [so sieht das auch Derick Bailey](http://lostechies.com/derickbailey/2012/06/13/why-should-i-use-backbone-marionette-instead-of-%E2%80%A6), der Hauptentwickler von Marionette.js.

Mich überzeugen vor allem die stetige, zuverlässige Weiterentwicklung sowie die sinnvollen [Konzepte und Hintergründe](http://lostechies.com/derickbailey/category/marionette) von Marionette.js. Andere Frameworks wie Angular.js bleiben natürlich trotzdem interessant und sind glücklicherweise auch das geplante Thema unseres nächsten Treffens.
