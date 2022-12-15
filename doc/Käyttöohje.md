Jonathan Methuen  
Julia Köykkä  
Sylvester Salo  
Vilhelm Niemi

15.12.2022

## Kuvaus

Tavoitteena oli luoda vankka ja siloiteltu peli, joka olisi vaivaton käyttää ja ulkoasultaan tyylikäs. Moninpelin toimintaidea on antaa pelaajien kilpailla sudokujen ratkaisemisessa, joista sudoku numeroita nopeimmin ratkaiseva pelaaja voittaa. Pelin edetessä ratkaistavien numeroiden määrä kasvaa, jotta kokonaisten sudokujen vaikeusaste nousee. Peli alkaa kun pelihuoneeseen on liittynyt kolme pelaajaa ja tietyn ajan kuluttua peli tiputtaa vähiten sudoku numeroita ratkaisseen pelaaja. Aikarajan loputtua viimeiseksi selvinnyt pelaaja julistetaan voittajaksi.



## Käyttöönotto

Pelin avaaminen nettiselaimessa: 

1.  Varmista, että olet kirjautunut Metropolia-VPN palveluun. 
    

![Kuva, joka sisältää kohteen teksti
Kuvaus luotu automaattisesti](https://lh3.googleusercontent.com/lhQ3By8M3gn_fMfE6my3I8pL5izCAA0wNzec9HeNVG_O5ToYd5ZLIJ0sF_tedbf1ptECB9beS6XiTKwivhUC34U9CXkMwOU-kruIAQjwAH7T2u8U7Q42hdU9BjJDMphZSzCtEx43a_r_FF067WBV57Yg4ZtWM7BybD3cPaWpVv06I5wZxXDvUm_9dVhCeQ)

2.  Syötä selaimesi osoitekenttään seuraava osoite: [http://10.114.32.14/play](http://10.114.32.14/play) 
    

3.  Saavut sivulle, jossa on WebGL-kehys, jonka pitäisi avautua automaattisesti sivun avattua. Voit aloittaa pelin pelaamisen, kun kehys on suorittanut latauksen. 
    

![Kuva, joka sisältää kohteen teksti, elektroniikka
Kuvaus luotu automaattisesti](https://lh4.googleusercontent.com/Q8Tqt8A9A6vgriVrA-cbOUkSkp7fqeUFbjVyw7IjvGYSAWpZ-e5ZYDQmOnBLoNeBCKclsJpR9m_Lp2Gyt6LKxoFqLqNAxfVgrnGJtmLEf8moOMAcDq_L0rCd0Wd4LuAgVLJj99r6u-MOq88_Publ1vSC_CWJKYpGVO9pN640LdRORxUCga9acFULHTXyCg)

  

## Käyttöliittymä

Pelissä on käytössä kolme eri “kohtausta” (skeneä): Menu, Singleplayer ja Multiplayer.

### Menu

Käyttäjä voi navigoida eri käyttöliittymä elementtien ja toimintojen välillä. Käyttäjä voi kirjautua ja rekisteröityä, sekä katsella profiiliaan kirjautuneena. Menusta löytyy pohja tulostaululle, johon voidaan tulevaisuudessa lisätä kysely tietojen hakemiseen tietokannasta, sillä tietokannasta löytyy tälle rakenteet ja tietoa voidaan hakea tietokannasta muissa käyttöliittymän elementeissä.

![](https://lh4.googleusercontent.com/Czrsegg-xVosN6gc5u12ApXMrllweM_uTE2iJz7SSvc13lxF11MnSw75pulWUqZtmCTBmIrGBO0-U7b6s5Wk7aT2BD9u1GqhZfXE8IgJfCtBRzXbNF6s73b_CBR2FYofX6xxbraNoCVwk1RIZ76fXh4atTp3KrtVVM2M1U0f8VTudoGqAaXZOa0TtmmEdg)![](https://lh3.googleusercontent.com/MJsSD0TqV1t0pN3KZDXsb6bhAZiV8W-_KrVMQKIm0Rx8ZW5LIX5IRlARbVm_um4la4TQDDQSOy5v_9ynM98tBIYKriYHuNURlc1u5zFOL809WV13-Trlke4J7fhD31AF_YCmlyFmoTuoi7nMnvpVIVVyeCW38Kt5v_Ulq4pqp7rTbYdXpGvkeNoQO17Mhw)

( Menu päänäkymä & Login -näkymä )

![](https://lh3.googleusercontent.com/XZOAdgIdvz6f2j8azEPc04tVrBS36cJ7_bR34hGCh8YoGnfGtgm-bvOKfiXfOijPfiLDUm-hAhdmfVAAVXcuOVwR0JlYx3-xGzIjD36n-ws2NcFrRqOe72bOSbvDUSOGUPnMRBjdr-AgQodHiDEAC-7zywhDkV73iciKZBV_VLLHAn-GVH7e_17U9LcdZA)![](https://lh6.googleusercontent.com/BiEMcGz-dl5QFZOfBGJ3vPFAe6frk84_aBaUEyAfxa5-PNGcbuuJhRM55CTV0wyx3ifpR8NP9yBu7igwRYy0msMNpC0tHdlUhSmBOK0ifpVzkKkzdZXFN8N2rgMhhfHstwBBOvO2NvS12_VwYMdDgeUkCnzqZg2PPDCjpU_0ccwElM9TtLJyayugeUQIZw)

( Register -näkymä & Statistics -näkymä )

![](https://lh6.googleusercontent.com/wYBbkE4p_wkfiLS_w5UEXTYkvzcxRtrl9-VRWN4tp-Cr2e4ezs8ti8w2x-tDL-c2lYafn6273beFmMw0nIrA_CPCFduFJ38bPAgjfbo-lBAV39RJDsPSQt-QEDPq8UlA8jUBVH9OJs62Gpj3eyslsfBizbHIQCgz16uljhY8DaeHSj7t7erqz2zIwvY4zg)![](https://lh3.googleusercontent.com/NfmOFfzPGEao94XnP4nLxlApnnGvy6YQeUrBh7B-YUESMOL3xo7OX4X1z_oXD4c1swpiB8lDwSAIc6rYsMOHsKz9GmBgOLmFBwgsgdmsLu_kVg_lOJ-onmYADkjjVU4dTzkGN7oqTbXzAKTTnoNkhY-2lIWef61i-qlCvzlPtpcy9GvXlaGzKlHb82xOzw)

( Profile -näkymä ennen kirjautumista ja kirjautuneena )

![](https://lh4.googleusercontent.com/HEMmSgf-MStCvMQCEUa8sViuPY8oBnA8zoR7Rkl4-2M0rHzs9tU9YU0CdO6qHLkck8tRbaU26u3mffjjpoUAhi3djLY12QyRYQL3jySoRHRxojhI7xzsbua8S8Et3OrS67W1JjKyowSXY2Pc6ztEPNZHIr5JgqOx7G2QwdiIQ2mZZUNkHcJK5tJ4eRZ4AQ)![](https://lh6.googleusercontent.com/R1AiOjOGoELAzN9t9bAoU3Zv40JaPxH3-MOgo1f9uBOWysk8xey_u0YhCjHkVnc2ibuxb09-yaiVxxCPWGpKfvIqbXegEIFpF686ayGzCm5oGrO-2CGpizlrWo5mhzBC9mgAFksAQSrCFKO3yO-crMsjIhmr-3OaK-TY2gijx3M0mhtL-u3SZ5KfXKxGHg)

( Leaderboard -näkymä  & Äänenvoimakkuussäädin-näkymä)

Äänenvoimakkuussäädin-näkymä toimii, mutta pelissä ei ole ääniä vielä.

  
  
  

### Singleplayer

![](https://lh5.googleusercontent.com/6jliOrdVcwQ5FWRqvYZjkgurBoPv9sGgM_GC5Wg3oE-_Q4W-y0JfphIZJozp8HReSgnFbdKEpMjsLv2vJ6dmYIG8_0EXz9AjiKdJx9-odoBJYpsdlaZvOb9xB2DRg2L9QhPxq3X7an-QKlnhoM16qFmhBTl-h7w5XYbvkd-DcA86JdE7Ktr0PaJ1TYbOlQ)

( Käynnissäolevan yksinpelisession näkymä )

  

Yksinpeliä voi pelata kirjautui tai ei. Näkymä koostuu ajastimesta, pisteluvusta, sudoku numeroista ja kontrolleri nappuloista. Numeroita voi vaihtaa myös näppäimistöllä. Validate -painikkeella taulu lähetetään tarkastettavaksi saadakseen pisteitä. Pelaaja ei tässä pelimuodossa voi voittaa ilman että saa kaikki numerot oikein. Pelistä voi myös poistua. Tietoja yksinpeleistä ei vielä lähetetä tietokantaan, mutta se olisi yksinkertaista toteuttaa, koska sen toiminnallisuus löytyy jo tietokannasta. Pelinaikana pisteet näkyvät ylänurkasta. 

  

![](https://lh6.googleusercontent.com/hhqW-24U5_ex41sT8ZtsVSviEuW7dnN7RCb1wWXqxOlwFYgxEMehsXLLIH-yeaK3z8H9he50O8XCoX_CXvVN6-5VU_MutcVUw2l8lvEQES0_67vfsSgStGwOXP9PNMyAnZ2uN7N_E30ssGEt-e8CR8H2ETAMWpOpyH5Nsxju6xt60UUcSzXhIg7SahKliA)  
( Häviäjän näkymä )

  

Hävitessään pelaaja näkee saamansa pisteet ja kulutetun ajan. Pelaaja voi näkymästä aloittaa uuden yksinpelin tai poistua päävalikkoon. Voittaessa näkymässä lukee “Victory Royale”.

  

### Multiplayer

![](https://lh6.googleusercontent.com/QlXRK42nOznEc_Rfp1A_GXE3tId3CXns4E3v1CJeuzZUP__okmql-CkhmbhBZpPc2lhXERyKhBV7_dxRqgwbSB6ct55pNklTEGyzGBbljq6HLuF_JblwzPvahC55beZFAwJ3c0COfjFJCNaQz9tpHFtdm84WMk5lX2UKK3sUTmD3IEfm83Hc-VR8gDc_3A)

( Käynnissäolevan moninpelisession näkymä )

  

Moninpeliä voi testata ilman että serveri on päällä, mutta tällöin pelissä ei voi hävitä. Häviämis toiminnallisuus riippuu muiden pelaajien pistemääristä. Näkymä koostuu ajastimesta, pisteluvusta, sudoku numeroista ja kontrolleri nappuloista, kuten yksinpeli. Toiminnallisuus on sama kuin yksinpelissä, mutta koko taulua ei tarvitse saada oikein, vaan ajan päätyttyä peli tarkistaa myös oikein täytetyt numerot, vaikkei tarkistusnappulaa ehtisi painamaan. Pelistä voi myös poistua. Kun serveri on käytössä ja pelaaja on kirjautuneena, pelien tiedot lähettyvät tietokantaan. 

  

![](https://lh5.googleusercontent.com/032ZudF1-nhTmMdgT9rFjsMXYB7KsM9VXCVS9N-TRSyhvWYLYl60OBRTmlTAvaKqh3DCfQeW1aH_Bq-_aoVL6f0SGrje5v8hq_2hcbQwb6Z8JO_U19O5uKFcYkwGUhWDy_oeN7xCQpUdCuGLFX8VRIB8ZRB5DaEupyuf_Gh_XY5QRQDRVymNpNZsz4PPNA)

( Loppunäkymä kun serveri ei ole päällä ja moninpeliä testaa yksin )

  

Loppunäkymän otsikkoteksti toimii kuten yksinpelissä, sekä pelin voi alottaa uudestaan tai pelistä voi poistua. Käyttäjänimen asetusta ei ole vielä implementoitu, mutta se toimii päävalikon profiilinäkymässä, joten se voidaan lisätä tulevaisuudessa myös tähän.