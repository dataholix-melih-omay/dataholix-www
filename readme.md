# Neue Webseite

## Vorteile der neuen Webseite

- Aufbau über Jekyll
- Responsive Darstellung

### Voraussetzungen

- ruby größer 3.x, oder im .ruby-version betrachten
- wenn chruby + autoLoad installiert ist wird es automatisch die ruby version nehmen die im .ruby-version eingetragen ist, umschalten

### VScode hat recommended plugins

- Bitte im extension @recommended aufrufen und die benötigten extension installieren (EditorConfig for VS Code, Ruby language support, Shopify Liquid)
- für das EditorConfig wird auch das passende Modul gebraucht das erreichen wir mit   vorausgesetzt nodejs ist installiert

    ```bash
    npm install
    ```


### Erstbetrieb

- bundle install

### starten des Projektes

> eventuell bundler version 2.3.7 anheben

### start für lokale Umgebung (oder Github Pages)

```bash
bundle exec jekyll serve --livereload
```

### _config-production.yml enthält Konfigurationen für die Produktivumgebung

```bash
bundle exec jekyll build --config _config.yml,_config-production.yml
```

## Lokal auf dem browser und nach dem push

- [lokal link](http://0.0.0.0:4000/dataholix-www/)
