# Introduktion till webbutveckling

## Mjukvara

### Visual Studio Code

- Installerad sen tidigare.

### Node.js

- Ladda ner och installera [Node](https://nodejs.org/en/) (LTS).
- Ni kan testa att ni lyckats installera Node korrekt genom att köra en .js-fil i vs code (som när ni kör en pythonfil)

```javascript
var test = "Hello world!";
console.log(test);
```


### GitHub

- Skapa ett [GitHub](https://github.com/) konto med din @edu.umea.se mail.

### Git

- Du kommer bli tvungen att ställa in så att din dator kan läsa och skriva till GitHub. För att göra detta behöver du generera en ssh-nyckel i PowerShell. Skriv din mailaddress som du använde till kontot på GitHub. Klicka sedan enter hela vägen.

```bash
ssh-keygen -t rsa -b 4096 -C "uname@edu.umea.se"
cat ~/.ssh/id_rsa.pub
```

Den publika nyckeln kommer se ut på följande format:

```bash
ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSU
GPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3
Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XA
t3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/En
mZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbx
NrRFi9wrf+M7Q== schacon@mylaptop.local
```

Nyckeln läggs till under settings > SSH and GPG keys på din användare på GitHub.




Ladda sedan ned Git till din dator. [Ladda ned här!](https://git-scm.com/downloads)

## Fork av Github Repo

- [Gå till denna länk](https://github.com/williamviktorsson/maja_one_2023_webdev) och klicka på fork repository. Döp det nya repot till **USERNAME.github.io** där USERNAME är ert användarnamn på GitHub.

- Gå till Actions och klicka enable actions.

- Gå till valfri fil. t.ex README.md och gör en ändring, t.ex. att lägga till en blankrad någonstans. Spara ändringarna.

- Vänta ett tag och gå sedan och slå på GitHub pages under Settings/Pages genom att välja _deploy from a branch_ och välj **gh-pages** som branch (det kan vara så att main är förvald).

- Vänta ett tag till sen går ni till https://USERNAME.github.io så ser ni er nya hemsida.

## Ladda ned GitHub Repo

- Klicka på Code på ert Repo.
- Klicka  Code igen (den gröna knappen)
- Klicka SSH
- Kopiera texten
- Gå till PowerShell
- skriv in `git clone` följt av det ni kopierade
- Exempel: `git clone git@github.com:williamviktorsson/maja_three_2022.git`

## Köra projektet

- Öppna mappen i visual studio code från kommandoraden där du precis klonade repot. Skriv `code USERNAME.github.io`
- Öppna terminalen i visual studio code och skriv `npm install`
- När installationen är klar skriver ni `npm run dev`
- Ladda ned alla extensions som VS Code föreslår, framförallt Svelte.

## Er uppgift

- Gör förbättringar till spelet, er clicker! Navigera till `src/routes/page.svelte` för att hitta koden.
- I slutet av varje lektion i två veckors tid kommer ni få skriva ett inlägg i er devblog för att dokumentera vilka förbättringar ni gjort och hur ni gick tillväga för att lösa problem som uppstod.

## Att blogga

- Leta rätt på mappen src/lib/posts
- Gör en fil där i som heter VAD_NI_VILL.svx
- I denna fil kan ni skriva html, javascript, markdown, css.

## Vad ni gör när ni fastnar

- Fråga din undervisande lärare, eller en vän! :-)

##
