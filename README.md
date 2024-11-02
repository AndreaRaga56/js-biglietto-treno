## Esercizio
Chiediamo all'utente 2 numeri in successione, prima l'età e poi i Km.
Moltiplichiamo i Km per il prezzo al Km.
Verifichiamo se l'età del cliente gli permette di accedere ad uno sconto.
In caso affermativo, modifichiamo il totale applicando lo sconto.
Terminiamo comunicando al cliente il prezzo che dovrà pagare, considerando anche l'eventuale sconto.

## Dati
Chiedo all'utente l'età e lo salvo.
Chiedo all'utente i km che vuole fare e lo salvo.
Indico il prezzo al km.

## Esecuzione Logica
Moltiplico i km per la costante del prezzo al km, trovando il prezzo totale, privo di sconti.

Se l'utente ha 65 o più anni
    applico uno sconto del 40% al prezzo totale
Altrimenti, se l'utente ha meno di 18 anni
    applico uno sconto del 20% al prezzo totale
Altrimenti non modicico il prezzo totale

Stampo il prezzo totale