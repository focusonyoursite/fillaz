# ( IN AANBOUW )

# Fillaz

## Beschrijving:

Dit is een website voor een medische injector. De website is ontworpen om eenvoudig en gebruiksvriendelijk te zijn.

## Installatie

Kopieer eerst het bestand `.env.example` naar `.env` en vul de juiste waarden in voordat je `pnpm run dev` of `pnpm run build` uitvoert.

Zorg er daarbij voor dat `PUBLIC_BOOKING_LINK` is ingevuld. Als deze variabele ontbreekt krijg je bij het opstarten de foutmelding:

```
SyntaxError: The requested module '/@id/__x00__virtual:$env/static/public' does not provide an export named 'PUBLIC_BOOKING_LINK'
```

Door de variabele `PUBLIC_BOOKING_LINK` in `.env` te plaatsen verdwijnt deze fout.
