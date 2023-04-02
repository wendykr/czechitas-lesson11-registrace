# Cykly - Lekce 11

Domácí úkol pro kurz JavaScript 1 od Czechitas.

## 1. Registrace 

Stáhněte si [připravenou stránku](https://github.com/Czechitas-podklady-WEB/cviceni-registrace/archive/refs/heads/main.zip) s registračním formulářem pro nového uživatele. Doplňte do stránky JavaScriptový kód tak, aby byly splněny následující požadavky.

- Pokud uživatel zadá uživatelské jméno, které je již obsaženo v poli `users`, vypište do prvku s třídou `reg-form__error` chybovou hlášku ve smyslu, že zadané uživatelské jméno je již zabráno.
- Zkontrolujte, že heslo zadané do prvního políčka je dostatečně bezpečné. Heslo považujeme za bezpečné, pokud má alespoň 10 znaků nebo obsahuje alespoň jeden ze znaků pomlčka `-`, podtržítko `_` nebo dvojtečka `:`.