# September Jam Session — Chord Guide

> 14 songs · designed to match the transpose-toolbar experience in `chord-guide-v2.md` (see `chord_guide_september.html`)
> Source chords: `September/` folder (Ultimate-Guitar-style chord sheets), except Saksi Ang Langit (carried over from `chord-guide-v2.md`)

---

## About — Key Transposition

`chord_guide_september.html` adds a per-song **Key** toolbar (below each song title), same as chord-guide-v2:

- Shows the key the chart is written in (e.g. `D`).
- **− / +** buttons step the whole song up or down one semitone at a time.
- The key dropdown jumps straight to any of the 12 keys (key-to-key transposition, e.g. D → G).
- **Reset** returns to the original written key.
- Transposing only rewrites the chords (roots, slash-chord bass notes, and all extensions/qualities like `maj7`, `add9`, `sus4`, `m7b5` are preserved) — lyrics, section labels, and chord-to-lyric spacing are untouched.
- Sharp/flat spelling automatically follows the target key's convention (flat keys: F, Bb, Eb, Ab, Db, Gb — sharp keys: C, G, D, A, E, B, F#).

The transpose engine lives in `transpose.js` (also usable from Node) with its test suite in `test_transpose.js` (`node test_transpose.js`). Both files are shared with chord-guide-v2's design.

BPM notes: values marked with `~` are best-known estimates (the source chord sheets didn't give a trustworthy tempo) — treat them as a starting point and adjust by ear. Multo, Summer of '69, and Saksi Ang Langit have source-confirmed tempos.

---

## Setlist

1. [Bulong](#1-bulong) — Kitchie Nadal · ♩ ~84 BPM · Key of D
2. [Same Ground](#2-same-ground) — Kitchie Nadal · ♩ ~84 BPM · Key of A
3. [I'll Never Go](#3-ill-never-go) — Erik Santos · ver. 4 · ♩ ~70 BPM · Key of D
4. [Multo](#4-multo) — Cup of Joe · ver. 2 · ♩ 104 BPM · Key of B
5. [Saksi Ang Langit](#5-saksi-ang-langit) — December Avenue · ♩ 85 BPM · Key of G
6. [Ulan](#6-ulan) — Cueshé · Half Empty, Half Full · ♩ ~72 BPM · Key of B
7. [Umaaraw, Umuulan](#7-umaaraw-umuulan) — Rivermaya · Tuloy ang Ligaya · ♩ ~160 BPM · Key of A
8. [Head Over Feet](#8-head-over-feet) — Alanis Morissette · ♩ ~107 BPM · Key of C
9. [Cruisin'](#9-cruisin) — Huey Lewis & Gwyneth Paltrow / Smokey Robinson · ♩ ~71 BPM · Key of E
10. [Summer of '69](#10-summer-of-69) — Bryan Adams · ♩ 138 BPM · Key of D
11. [Mamma Mia](#11-mamma-mia) — ABBA · ♩ ~118 BPM · Key of D
12. [Dancing Queen](#12-dancing-queen) — ABBA · Luka Bloom acoustic cover arrangement · ♩ ~78 BPM · Key of A
13. [Babe](#13-babe) — Styx · ♩ ~71 BPM · Key of D
14. [Palagi](#14-palagi) — TJ Monterde · ver. 2 · ♩ ~76 BPM · Key of F#

---

## 1. Bulong — Kitchie Nadal
♩ **~84 BPM** · Key of **D**

> Segues directly into Same Ground — same tempo, no break

**[Intro]**

```
D (Dsus D) E G D (x2)
```

**[Verse 1]**

```
D                     E
Ikaw ba'y nalulungkot nababalot pa ng poot
G                         D
Maraming hinanakit sa mundo
D
Di alam anung gagawin
      E
Kundi ubusin ang oras sa gin
  G                         D
Akala mo'y iya'y may mararating
```

**[Chorus]**

```
D         C   G      Cadd9       G          D
Hoy kaibigan ko pakinggan mong mga bulong sayo
D           C           G    Cadd9      G           D
Ito'y 'di galing sa mundo patungo sa pangakong paraiso
```

**[Instrumental]**

```
D (Dsus D) E G D (x2)
```

**[Verse 2]**

*((same as Verse 1 chord pattern))*

```
Nasan nang talino mo diskarte kamo ng kano
Tapakan ang lahat kahit kapwa mo

Minsan ang kagitingan ay wala sa bigat ng pinanapasan
Sa pagsuko't pagharap ng kabiguan
```

**[Chorus]**

```
D         C   G      Cadd9       G          D
Hoy kaibigan ko pakinggan mong mga bulong sayo
D           C           G    Cadd9      G           D
Ito'y 'di galing sa mundo patungo sa pangakong paraiso
```

**[Bridge]**

```
E             G         Cadd9    G
Tumatakbo'ng oras gumising ka't bumangon na
        Cadd9               G     D
Pagka't hindi na ikaw ang biktima
```

**[Instrumental]**

```
D (Dsus D) E G D (x2)
```

**[Interlude]**

```
D E G D
```

**[Chorus]**

```
D         C   G      Cadd9       G          D
Hoy kaibigan ko pakinggan mong mga bulong sayo
D           C           G    Cadd9      G           D
Ito'y 'di galing sa mundo patungo sa pangakong paraiso

D         C   G      Cadd9       G          D
Hoy kaibigan ko pakinggan mong mga bulong sayo
D           C           G    Cadd9      G           D
Ito'y 'di galing sa mundo patungo sa pangakong paraiso
D           C           G    Cadd9      G           D
Ito'y 'di galing sa mundo patungo sa pangakong paraiso
D           C           G    Cadd9      G
Ito'y 'di galing sa mundo patungo sa pangakong
```

**[Transition]**

*(Prepare to transition into Same Ground)*

```
A  G
```

---

## 2. Same Ground — Kitchie Nadal
♩ **~84 BPM** · Key of **A**

> Segues directly from Bulong — same tempo, no break

**[Intro]**

```
A       G   A       G
```

**[Verse 1]**

```
A                      G
  My love, it's been a long time
                           A               G
Since I cried and left you out of the blue
A                    G                             A   G
  It's hard leaving you the way when I never wanted to
A                 G
Self-denial is a game, a stranger
                        A              G
I never would want until there was you
              A
'Cause I have learned that love is beyond
                            G                                        A G
What human can imagine, the more it clears the more I gotta let you go
```

**[Chorus]**

```
A                              E                         F#m
   'Cause what I don't understand is why I'm feeling so bad now
          D
When I know it was my idea
A                                          E
   I could have just denied the truth and lied
                   F#m
Now why am I the only one standing
Dm                      A
Stranded on the same ground
```

**[Interlude]**

```
(A)   G     A   G
```

**[Verse 2]**

```
A                       G
  My love, it's been a long time
                           A              G
Since I cried and left you out of the blue
A                    G                             A   G
  It's hard leaving you the way when I never wanted to
A                 G
Self-denial is a game, a stranger
                         A             G
I never would want until there was you
              A                                                        G
'Cause I have learned that love is a word gets thrown a little bit too much
                                     A
The best excuse to fill this infinite abyss
                      G
I never ever have to be
```

**[Chorus]**

```
A                              E                         F#m
   'Cause what I don't understand is why I'm feeling so bad now
          D
When I know it was my idea
A                                          E
   I could have just denied the truth and lied
                   F#m
Now why am I the only one standing
Dm                      A
Stranded on the same ground
```

**[Solo]**

```
(A)   G     A   G
A    G     A   G
```

**[Chorus]**

```
A                             E (BREAK)                F#m
  'Cause what I don't understand is why I'm feeling so bad now
         D
When I know it was my idea
A                                         E
  I could have just denied the truth and lied

                  F#m
Now why am I the only one standing
Dm                     A
Stranded on the same ground
```

**[Interlude]**

```
(A)   G   A   G
```

**[Outro]**

```
   A               G                     A       G
If all else fails, would you be there to love me?
     A               G
When all else fails, would you be brave
   A                     G   A
To see right through me?
```

---

## 3. I'll Never Go — Erik Santos
*ver. 4*
♩ **~70 BPM** · Key of **D**

**[Verse 1]**

```
D
You always ask me
        F#m
Those words I say
        Bm                       G
And telling me what it means to me
Em             A
Every single day
      F#m            Bm
You always act this way
      G
For how many times I told you
   Em
I love you
      A           D         G
For this is all I know
```

**[Verse 2]**

*((same chords as Verse 1))*

```
D
Come to me and hold me
      F#m
And you will see
      Bm
The love I give
                        G
For you still hold the key
Em            A
Every single day
     F#m              Bm
You always act this way
     Em
For how many times I told you
   G
I love you
          A         D
For this is all I know
```

**[Chorus]**

```
     D          G
I'll never go far away from you
Bm                 Em
Even the sky will tell you
                 G
That I need you so
    Bm
For this is all I know
       Em     A             D     G
I'll never go far away from you
```

**[Verse 3]**

*((same chords as Verse 1))*

```
D
Come to me and hold me
      F#m
And you will see
      Bm
The love I give
                        G
For you still hold the key
Em            A
Every single day
     F#m              Bm
You always act this way
     Em
For how many times I told you
   G
I love you
          A         D
For this is all I know
```

**[Chorus]**

```
     D          G
I'll never go far away from you
Bm                 Em
Even the sky will tell you
                 G
That I need you so
    Bm
For this is all I know
       Em     A             D     G
I'll never go far away from you
```

**[Outro]**

```
     D          G
I'll never go far away from you
Bm                 Em
Even the sky will tell you
                 G
That I need you so
    Bm
For this is all I know
       Em     A             D     G
I'll never go far away from you
```

---

## 4. Multo — Cup of Joe
*ver. 2*
♩ **104 BPM** · Key of **B**

> Capo 4 — chords below are shown as capo shapes (Cadd9 shape sounds as D, etc.)

**[Verse]**

```
     Cadd9                     G
Humingang malalim, pumikit na muna
    Cadd9                      G
At baka sakaling namamalikmata lang
        Cadd9                       G
Ba't nababahala? 'Di ba't ako'y mag-isa?
         Cadd9    G              D
Kala ko'y payapa, boses mo'y tumatawag pa
```

**[Pre-Chorus]**

```
   Cadd9       G
Binaon naman na ang lahat
     Em           D
Tinakpan naman na 'king sugat
       Cadd9        G
Ngunit ba't ba andito pa rin?
Em                    D
Hirap na 'kong intindihin
```

**[Verse]**

```
         Cadd9                  G
Tanging panalangin, lubayan na sana
          Cadd9                        G
Dahil sa bawat tingin, mukha mo'y nakikita
       Cadd9         G               Em                   D
Kahit sa'n man mapunta ay anino mo'y kumakapit sa 'king kamay
       Cadd9       G                  D
Ako ay dahan-dahang nililibing nang buhay pa
```

**[Chorus]**

```
     Cadd9      G
Hindi na makalaya
     Em                  D
Dinadalaw mo 'ko bawat gabi
     Cadd9     G
Wala mang nakikita
       Em                      D
Haplos mo'y ramdam pa rin sa dilim
      Cadd9        G
Hindi na na-nanaginip
      Em          D
Hindi na ma-makagising
         Cadd9 G
Pasindi na ng ilaw
       Em                    D
Minumulto na 'ko ng damdamin ko
            Cadd9
Ng damdamin ko
```

**[Post-Chorus]**

```
Cadd9      G
'Di mo ba ako lilisanin?
Em            D
Hindi pa ba sapat pagpapahirap sa 'kin? (Damdamin ko)
Cadd9           G
Hindi na ba ma-mamamayapa?
Em              D
Hindi na ba ma-mamamayapa?
```

**[Chorus]**

```
       Cadd9     G
Hindi na makalaya
    Em                  D
Dinadalaw mo 'ko bawat gabi
      Cadd9      G
Wala mang nakikita
         Em                   D
Haplos mo'y ramdam pa rin sa dilim
      Cadd9      G
Hindi na na-nanaginip
      Em         D
Hindi na ma-makagising
       Cadd9   G
Pasindi na ng ilaw
         Em                  D
Minumulto na 'ko ng damdamin ko
            Cadd9
Ng damdamin ko
```

**[Post-Chorus]**

```
           Cadd9          G
Makalaya (hindi mo ba ako lilisanin?)
                             Em              D
Dinadalaw mo 'ko bawat gabi (hindi pa ba sapat pagpapahirap sa 'kin?)
                    Cadd9             G
Wala mang nakikita (hindi na ba ma-mamamayapa?)
                                   Em                D
Haplos mo'y ramdam pa rin sa dilim (hindi na ba ma-mamamayapa?)
```

---

## 5. Saksi Ang Langit — December Avenue
♩ **85 BPM** · Key of **G**

**[Intro]**

```
Dmaj7 Gmaj7
Dmaj7 Gmaj7
```

**[Verse 1]**

```
            D
Nangangarap lang
                  Gmaj7
Habang ika'y pinagmamasdan
                D
Nagbibilang ng iyong hakbang
                     Gmaj7
Hanggang ika'y aking mahagkan
```

**[Pre-Chorus]**

```
                   Em
'Di sasayangin ang oras sa pag-ibig mo
                G
Mas pipiliin ko
                                    D
Ibigay lahat pati itong aking mundo
```

**[Chorus]**

```
                     Gmaj7
Halika't sumayaw sa ilalim ng bituin
                       D/F#
Habang ako'y nakatingin sa'yo
                      Em       G
Wala ng 'kong ibang mahihiling
                          D G
Saksi ang langit sa'tin
```

**[Verse 2]**

```
               D
'Wag kang magtaka
                       G
Kung bakit tayo pinag-isa
                D
'Wag kanang kabahan
                G
Ito'y hindi panaginip lang
```

**[Pre-Chorus]**

```
                  Em
'Di gumagalaw ang oras sa paligid ko
                   G
Pati itong mundo'y
                                    D
Tumitigil habang ako'y nasa tabi mo
```

**[Chorus]**

```
                     Gmaj7
Halika't sumayaw sa ilalim ng bituin
                       D/F#
Habang ako'y nakatingin sa'yo
                      Em       G
Wala ng 'kong ibang mahihiling
Saksi ang langit sa'tin
```

**[Refrain]**

```
D              G
  Oh-oh, oh-oh-oh
                Em
Oh-oh, oh-oh-oh
                G
Oh-oh, oh-oh-oh
                D
Oh-oh, oh-oh-oh
Saksi ang langit
Saksi ang langit sa'tin
G
  Saksi ang langit
Saksi ang langit sa'tin
Em
   Saksi ang langit
Saksi ang langit sa'tin
G
    Saksi ang langit
```

**[Pre-Chorus]**

```
                  Em
'Di gumagalaw ang oras sa paligid ko
                   G
Pati itong mundo'y
                                    D
Tumitigil habang ako'y nasa tabi mo
```

**[Chorus]**

```
                     Gmaj7
Halika't sumayaw sa ilalim ng bituin
                        D/F#
Habang ako'y nakatingin sa'yo
                      Em        G
Wala ng 'kong ibang mahihiling
                        D
Saksi ang langit sa'tin (Saksi ang langit)
                     Gmaj7
Halika't sumayaw sa ilalim ng bituin
                      D/F#
Habang ako'y nakadikit sa'yo
                     Em       G
Wala na'kong ibang mahihiling
                 D
Saksi ang langit
```

---

## 6. Ulan — Cueshé
*Half Empty, Half Full*
♩ **~72 BPM** · Key of **B**

**[Intro]**

```
B D# x2
B D# G#m E
```

**[Verse 1]**

```
B                F#
Lagi na lang umuulan
B                   F#
Parang walang katapusan
          C#        E
Tulad ng paghihirap ko ngayon
      B          D#
Parang walang humpay
        G#m
Sa kabila ng lahat
          G
Ng aking pagsisikap
      B
Na limutin ka
   F#             B D# G#m E
Ay di pa rin magawa
```

**[Verse 2]**

```
B                  F#
Hindi naman ako tanga
B                  F#
Alam ko na wala ka na
       C#            E
Pero mahirap lang na tanggapin
   B         D#
Di na kita kapiling
       G#m
Iniwan mo akong
     G
Nag iisa
      B
Sa gitna ng dilim
     F#                 B     F#   E
At basang basa pa sa ulan
```

**[Chorus]**

```
B                D#
Pero wag mag alala
       G#m          C#7
Di na kita gagambalain
           C#m
Alam ko namang ngayong
      E                 B  F#  E
May kapiling ka ng iba
B                       D#
Tanging hiling ko sa 'yo
     G#m        C#7
Na tuwing umuulan
            C#m
Maalala mo sanang may
   E             B D# G#m C# C#m F# B (Ad Lib)
Nagmamahal sa 'yo, oh, oh, oh.....
```

**[Verse 3]**

```
B                 F#
Lagi na lang umuulan
B                  F#
Parang walang katapusan
           C#           E
Tulad ng paghihirap ko ngayon
      B         D#
Parang walang humpay
       G#m
Iniwan mo akong
    G
Nag iisa
      B
Sa gitna ng dilim
     F#                   B  F#    E
At basang basa pa sa ulan
```

**[Chorus]**

```
B                D#
Pero wag mag alala
       G#m         C#
Di na kita gagambalain
           C#m
Alam ko namang ngayong
      E               B  F#   E
May kapiling ka ng iba
B                     D#
Tanging hiling ko sa 'yo
     G#m        C#
Na tuwing umuulan
            C#m
Maalala mo sanang may
   E            B   F#   E
Nagmamahal sa 'yo ako
```

**[Outro]**

```
B     F#
La la la la la
G#m   F#
La la la la la
A     E     B
La la la la la....
```

---

## 7. Umaaraw, Umuulan — Rivermaya
*Tuloy ang Ligaya*
♩ **~160 BPM** · Key of **A**

**[Verse 1]**

```
A                   E
  Hindi mo maintindihan
                               F#m
Kung bakit ikaw ang napapagtripan
      DM7               D
Ng halik ng kamalasan
A                              E
  ginapang mong marahan ang hagdanan
                    F#m
para lamang makidlatan
       DM7    D
sa kaitaas-taasan, ngunit
```

**[Refrain]**

```
E      F#m
  kaibigan,
DM7               D
  huwag kang magpapasindak
E     F#m
  kaibigan
          DM7        D DM7 D
Easy ka lang sa iyak
         A
Dahil wala ring mangyayari
          E
Tayoy walang mapapala
              F#m                 DM7 D
wag mong pigilan ang pagbuhos ng ulan
              A
May panahon para maging hari
              E
May panahon para madapa
           F#m                   DM7 D
Dahil ang buhay natin ay sadyang ganyan
```

**[Chorus]**

```
DM7 D              A
  Umaaraw, umuulan
E               F#m
  Umaaraw, umuulan
DM7 D                    A
  Ang buhay ay sadyang ganyan
    E   F#m    DM7 D
Umaaraw, umuulan
```

**[Instrumental Interlude]**

```
A E F#m DM7 D
```

**[Verse 2]**

```
A                       E
Wag kang maawa sa iyong sarili
                        F#m
isipin na wala ka ng silbi
          DM7       D
San' dambuhalang kalokohan
A                           E
Bukas sisikat ding muli ang araw
                       F#m
Ngunit para lang sa may tiyagang
      DM7   D
Maghintay..... (maghintay)
```

**[Refrain]**

```
E     F#m
kaibigan
DM7              D
wag kang magpapatalo
E    F#m
kaibigan,
       DM7 D DM7 D
Itaas ang noo
         A
Dahil wala ring mangyayari
          E
Tayoy walang mapapala
             F#m                    DM7 D
Wag mong pigilan ang pagbuhos nang ulan
             A
May panahon para maging hari
             E
May panahon para madapa
           F#m                   DM7 D
Dahil ang buhay natin ay sadyang ganyan
```

**[Chorus]**

```
DM7 D          A
  Umaaraw, umuulan
E               F#m
  Umaaraw, umuulan
DM7 D                   A
 Ang buhay ay sadyang ganyan
   E   F#m    DM7 D
Umaaraw, umuulan
```

**[Instrumental Interlude]**

```
A E F#m DM7 D
A E F#m DM7 D
```

**[Refrain]**

```
        A
Dahil wala ring mangyayari
         E
Tayoy walang mapapala
            F#m                   DM7 D
Wag mong pigilan ang pagbuhos ng ulan
            A
May panahon para maging hari
            E
May panahon para madapa
          F#m                    DM7 D
Dahil ang buhay natin ay sadyang ganyan.
```

**[Chorus]**

```
DM7 D A
Umaaraw, umuulan
E               F#m
  Umaaraw, umuulan
DM7 D                     A
  Ang buhay ay sadyang ganyan
    E    F#m            DM7 D A E      F#m             DM7 D
Umaaaaaaraaaw, umuulaaaaaaaaaaaaaaaaaaaaaaaan, wooo hoooah
```

**[Outro]**

```
A E F#m DM7 D
Woooh hoooh
A E F#m DM7 D
Woooh hoooh
A E F#m DM7 D
Tuloy ang Ligaya!
```

*([Instrumental to end])*

```
A E F#m DM7 D
```

---

## 8. Head Over Feet — Alanis Morissette
♩ **~107 BPM** · Key of **C**

**[Verse 1]**

```
C G       Am7
I had no choice
               F
But to hear you
C     G           Am7
You stated your case
F                C
Time and again
                      G       Am7
And I thought about it
C G           Am7
You treat me like
  F
  I'm a princess
C     G           Am7       F
I'm not used to liking that
C         G             Am7
You ask how my day was
```

**[Chorus]**

```
                D      Bm
You've already won me over
G           A
In spite of me
              D            Bm
And don't be alarmed if I fall
G         A
Head over feet
             D                Bm
And don't be surprised if I love you
G                 A
For all that you are
F                       C
I couldn't help it
G                    D (optional)
It's all your fault
```

**[Verse 2]**

```
C G      Am7
Your love is thick and
              F
it swallowed me whole
C    G          Am7
You're so much braver
F               C
than I give you credit for
                    G        Am7
That's not lip service
```

**[Chorus]**

```
                D      Bm
You've already won me over
G           A
In spite of me
              D            Bm
And don't be alarmed if I fall
G         A
Head over feet
             D                Bm
And don't be surprised if I love you
G                 A
For all that you are
F                       C
I couldn't help it
G                    D (optional)
It's all your fault
```

**[Verse 3]**

```
C G      Am7
You are the bearer
         F
of unconditional things
C     G         Am7
You held your breath -
F               C
and the door for me
                    G        Am7
Thanks for your patience.
```

**[Harmonica Solo]**

*((guitar chords for background))*

```
D Bm G A D Bm G A D Bm G A G
```

**[Verse 4]**

*(one strum each until next chorus)*

```
C G       Am7
You're the best listener
          F
  that I've ever met
C     G          Am7
You're my best friend,
F
best friend with benefits
C    G          Am7
What took me so long?
C G       Am7
I've never felt
         F
this healthy before
C    G          Am7
I've never wanted
F               C
something rational
        G         Am7     C                G      Am7
I am aware now...ohhh....I am aware now
```

**[Chorus]**

```
                D      Bm
You've already won me over
G           A
In spite of me
              D            Bm
And don't be alarmed if I fall
G         A
Head over feet
             D                Bm
And don't be surprised if I love you
G                 A
For all that you are
F                       C
I couldn't help it
G                    D (optional)
It's all your fault
```

*(fade out with chorus and ooohhhs)*

---

## 9. Cruisin' — Huey Lewis & Gwyneth Paltrow / Smokey Robinson
♩ **~71 BPM** · Key of **E**

**[Intro]**

```
E         F#m7      E         F#m7
```

**[Verse 1]**

```
          E            F#m7                   E    F#m7
          Baby let's cruise       away from here
          E                 F#m7                E   F#m7
          Don't be confused,      the way is clear
                     E                      F#m7
          And if you want it, you got it forever,
                                  E      F#m7
          This is not a one night stand
             E                       F#m7
          So let the music take your mind,
          E                         F#m7
          Just release and you will find
```

**[Chorus]**

```
             E                      A
             You're gonna fly away, glad you're goin' my way
             D B                  E
             I love it when we're cruisin' together
             E                         A
             Music is played for love, cruisin' is made for love
             D B                  E
             I love it when we're cruisin' together
```

**[Verse 2]**

```
          E                    F#m7               E   F#m7
          Baby tonight                belongs to us
          E                F#m7                E     F#m7
          Everything's right,     do what you must
                      E                       F#m7
          And inch by inch we grow closer and closer
                         E                  F#m7
          To every li'l part of each other
              E                      F#m7
          So let the music take your mind,
            E                       F#m7
          Just release and you will find
```

**[Chorus]**

```
             E                      A
             You're gonna fly away, glad you're goin' my way
             D B                  E
             I love it when we're cruisin' together
             E                         A
             Music is played for love, cruisin' is made for love
             D B                  E
             I love it when we're cruisin' together
```

**[Instrumental (with vocal phrases)]**

```
E F#m7 E F#m7
```

**[Verse 3]**

```
          E                F#m7                         E   F#m7
          Baby let's cruise,       let's float let's glide
          E         F#m7                    E       F#m7
          Let's open up            and go inside
                     E                       F#m7
          And if you want it, you got it forever,
                                 E                             F#m7
          I could just stay here beside you and love you baby
          E                        F#m7
          Let the music take your mind,
          E                          F#m7
          Just release and you will find
```

**[Chorus]**

```
             E                       A
             You're gonna fly away, glad you're goin' my way
             D B                   E
             I love it when we're cruisin' together
             E                         A
             Music is played for love, cruisin' is made for love
             D B                 E
             I love it when we're cruisin' together
```

**[Outro]**

```
             E                      A
             You're gonna fly away, glad you're goin' my way
D B                  E
I love it when we're cruisin' together
E                         A
Music is played for love, cruisin' is made for love
D B                  E
I love it when we're cruisin' together
```

---

## 10. Summer of '69 — Bryan Adams
♩ **138 BPM** · Key of **D**

**[Intro]**

```
D
```

**[Verse 1]**

```
D
   I got my first real six-string
A
    Bought it at the five-and-dime
D
    Played it 'til my fingers bled
A
    It was the summer of '69
```

**[Verse 2]**

```
D
   Me and some guys from school
A
   Had a band and we tried real hard
D
   Jimmy quit, Jody got married
A
   I shoulda known we'd never get far
```

**[Chorus 1]**

```
Bm             A
    Oh, when I look back now
D                         G
    That summer seemed to last forever
Bm           A
    And if I had the choice
D                    G
    Yeah, I'd always wanna be there
Bm                 A               D
    Those were the best days of my life
```

**[Instrumental]**

```
(D)   A
```

**[Verse 3]**

```
D
    Ain't no use in complainin'
A
    When you got a job to do
D
    Spent my evenin's down at the drive in
A
    And that's when I met you, yeah
```

**[Chorus 2]**

```
Bm                   A
    Standin' on your mama's porch
D                           G
    You told me that you'd wait forever
Bm                   A
    Oh, and when you held my hand
D                      G
    I knew that it was now or never
Bm                 A                D
    Those were the best days of my life
(D)            A                                D     A
         Oh yeah         Back in the summer of '69   Ohhh
```

**[Bridge]**

```
F               Bb
   Man, we were killin' time
         C
We were young and restless
   Bb/D
We needed to unwind
F          Bb                  C
   I guess nothin' can last forever, forever no
```

**[Instrumental]**

```
D    A    x2
```

**[Verse 4]**

```
D
   And now the times are changin'
A
   Look at everything that's come and gone
D
   Sometimes when I play that old six-string
A
   I think about you, wonder what went wrong
```

**[Chorus 3]**

```
Bm                   A
    Standin' on your mama's porch
D                         G
    You told me that it'd last forever
Bm                   A
    Oh, and when you held my hand
D                      G
    I knew that it was now or never
Bm                 A               D
    Those were the best days of my life
```

**[Outro]**

```
(D)             A                                D       A
          Oh yeah         Back in the summer of '69   Uh-huh
                       D          A
It was the summer of '69.      Oh yeah
                   D            A
Me and my baby in '69.         Ohhhhh, oh
D                    A                           D
         It was the summer, summer, summer of '69
  A      D      A        D      A
Yeah
```

*((fade out))*

---

## 11. Mamma Mia — ABBA
♩ **~118 BPM** · Key of **D**

> the source sheet's "138 bpm" is a generic strumming-pattern placeholder, not the recording's actual tempo

**[Intro]**

```
D             Daug
```

**[Verse 1]**

```
D         A/D        D                       G
I've been cheated by you, since I don't know when
D    A/D        D                        G
So I made up my mind, it must come to an end
D             Daug
Look at me now, will I ever learn?
D               Daug             G
I don't know how, but I suddenly lose control
                   A
There's a fire within my soul
```

**[Pre-Chorus]**

```
G    D/F# A
Just one look and I can hear a bell ring
G   D/F# A
One more look and I forget everything, whoa oh
```

**[Chorus]**

```
D
Mamma mia, here I go again
C/G G               D/G
My my, how can I resist you?
D
Mamma mia, does it show again?
C/G G                      D/G
My my, just how much I've missed you
D              A/C#
Yes, I've been broken-hearted
Bm             F#m/A
Blue since the day we parted
C/G G    Em          A
Why, why did I ever let you go?
D         Bm
Mamma mia, now I really know,
C/G G   Em             A
My my, I could never let you go
```

**[Instrumental]**

```
D Daug x2
```

**[Verse 2]**

```
D         A/D       D                         G
I've been angry and sad about things that you do
D       A/D           D                              G
I can't count all the times that I've told you we're through
D              Daug
And when you go, when you slam the door
D               Daug                 G
I think you know, that you won't be away too long
                  A
You know that I'm not that strong
```

**[Pre-Chorus]**

```
G    D/F# A
Just one look and I can hear a bell ring
G   D/F# A
One more look and I forget everything, whoa oh
```

**[Chorus]**

```
D
Mamma mia, here I go again
C/G G               D/G
My my, how can I resist you?
D
Mamma mia, does it show again?
C/G G                      D/G
My my, just how much I've missed you
D              A/C#
Yes, I've been broken-hearted
Bm             F#m/A
Blue since the day we parted
C/G G    Em          A
Why, why did I ever let you go?
D
Mamma mia, even if I say
C/G G                    D/G
Bye bye, leave me now or never
D
Mamma mia, it's a game we play
C/G G                   D/G
Bye bye doesn't mean forever
D
Mamma mia, here I go again
C/G G               D/G
My my, how can I resist you?
D
Mamma mia, does it show again?
C/G G                      D/G
My my, just how much I've missed you
D              A/C#
Yes, I've been broken-hearted
Bm             F#m/A
Blue since the day we parted
C/G G    Em          A
Why, why did I ever let you go?
D         Bm
Mamma mia, now I really know,
C/G G   Em             A
My my, I could never let you go
```

**[Outro]**

```
D Daug x5
```

*((fade out))*

---

## 12. Dancing Queen — ABBA
*Luka Bloom acoustic cover arrangement*
♩ **~78 BPM** · Key of **A**

> Luka Bloom's slower fingerstyle cover — not the original ABBA disco tempo (~101 bpm)

**[Intro]**

```
A - D - A - D
```

**[Intro]**

```
E              C#
You can dance, you can jive
F#m        F#m/E           B/D#
Having the time of your life.
    D              Bm
Oh, see that girl, watch that scene,
E           A              D - A - D
Diggin' the dancing queen.
```

**[Verse 1]**

```
A                                 D
Friday night and the lights are low.
A                            F#m
Looking out for a place to go.
E                         F#m
Where they play the right music
E                F#m
Getting in the swing.
                   C#m     F#m        C#m - F#m
You've come to look for a king.
A                     D
Anybody could be that guy.
A                              F#m
Night is young and the music's high.
E                  F#m
With a bit of rock music
E             F#m
Everything is fine,
              E    F#m             E - F#m
You're in the mood for a dance.
                D               E
And when you get the chance...
```

**[Chorus]**

```
            A               D                    A            D - E
You are the dancing queen, young and sweet, only seventeen.
A              D                      A         D
Dancing queen, feel the beat from the tambourine.
E              C#
You can dance, you can jive
F#m         F#m/E            B/D#
Having the time of your life.
    D              Bm
Oh, see that girl, watch that scene,
E          A           D - A - D
Diggin' the dancing queen.
```

**[Verse 2]**

```
A                              D
You're a tease, you turn 'em on.
A                                 F#m
Leave 'em burning and then you're gone
E                F#m      E           F#m
Looking out for another, anyone will do,
              E         F#m            E - F#m
You're in the mood for a dance.
                     D          E
And when you get the chance
```

**[Chorus]**

```
            A               D                    A            D - E
You are the dancing queen, young and sweet, only seventeen.
A              D                      A         D
Dancing queen, feel the beat from the tambourine.
E              C#
You can dance, you can jive
F#m         F#m/E            B/D#
Having the time of your life.
    D              Bm
Oh, see that girl, watch that scene,
E          A           D - A - D
Diggin' the dancing queen.
```

**[Outro]**

*(fade out on)*

```
A - D
```

---

## 13. Babe — Styx
♩ **~71 BPM** · Key of **D**

**[Intro]**

```
D  Em  D  G  A
```

**[Verse 1]**

```
D
Babe, I'm leaving, I must be on my way
Em                  A
the time is drawing near
D
my train is going, I see it in your eyes
Em                       A
the love, the need, your tears

Bm                 G       A
But I'll be lonely without you
G                                 A       G           A
and I'll need your love to see me through
D
please believe me, my heart is in your hands
    Em      G        D    A
and I'll be missing you
```

**[Chorus]**

```
                  D   A
    You know it's you babe
        G                         Bm A
    whenever I get weary and I've had enough
              Bm     A
    feel like giving up
                  D   A
    you know it's you babe
    G                             Bm         A
    giving me the courage and the strength I need
    Bm     A                 G   A              D
    please believe that it's true, babe, I love you
```

**[Instrumental]**

```
A# C A# C D G D G
A# C A# C G A G A
```

**[Chorus]**

```
                  D   A
    You know it's you babe
        G                         Bm A
    whenever I get weary and I've had enough
              Bm     A
    feel like giving up
                  D   A
    you know it's you babe
    G                             Bm         A
    giving me the courage and the strength I need
    Bm     A                 G
    please believe that it's true,

A                D
    babe, I love you.
```

**[Verse 2]**

```
D
babe, I'm leaving, I'll say it once again
Em             G     A
somehow try to smile
D
I know the feelings we're trying to forget
Em            G    A
if only for a while
Bm                 G       A
but I'll be lonely without you
G                                 A       G    A
and I'll need your love to see me through
D
please believe me, my heart is in your hands
    Em      G        D
and I'll be missing you
```

**[Outro]**

```
Em           D
babe, I love you
Em           D
babe, I love you
G    Em          D
Ooh, babe love you..
```

---

## 14. Palagi — TJ Monterde
*ver. 2*
♩ **~76 BPM** · Key of **F#**

**[Intro]**

```
G#m7          A#m7
Kahit saan man makarating

       B          A#m7      D#m
Hanap pa rin ay iyong lambing

       G#m7         A#m7         D#m
At kahit ano man ang mangyari

       C#m7   F#     B    A#m
Sa 'yo pa rin uuwi...

  F#     G#m7   F#/A#    B   G#m7   F#/A#    C#
Palagi...
```

**[Verse 1]**

```
          F#                   Badd9
Hindi man araw-araw na nakangiti
       F#                         Badd9
Ilang beses na rin tayong humihindi
            D#m                      Badd9
'Di na mabilang ang ating mga tampuhan
          D#m                    Badd9
Away-bati natin, 'di na namamalayan
```

**[Pre-Chorus]**

```
 G#m     C#
Heto tayo
```

**[Chorus]**

```
             Badd9     F#/A#
Ngunit sa huli palagi
D#m                      C#
Babalik pa rin sa yakap mo
             Badd9     F#/A#
Hanggang sa huli palagi
D#m                       C#
Pipiliin kong maging sa'yo
             G#m                 F#
Ulit-ulitin man, nais kong malaman mong
Badd9       F#    Badd9
Iyo ako palagi,
F#     Badd9
palagi
```

**[Verse 2]**

```
       F#                               Badd9
Kung balikan man ang hirap, luha't lahat
          F#                        Badd9
Ikaw ang paborito kong desisyon at
             D#m                  Badd9
'Pag napaligiran ng ingay at ng gulo
             D#m                  Badd9
'Di ko 'pagpapalit ngiti mo sa mundo
```

**[Pre-Chorus]**

```
 G#m     C#
Heto tayo
```

**[Chorus]**

```
      Badd9     F#/A#
Sa huli palagi
D#m                      C#
Babalik pa rin sa yakap mo
            Badd9      F#/A#
Hanggang sa huli palagi
D#m                       C#
Pipiliin kong maging sa'yo
            G#m                   F#
Ulit-ulitin man, nais kong malaman mong
Badd9
Iyo ako
```

**[Bridge]**

```
D#m           C#                 Badd9
Sa pagdating ng ating pilak at ginto
                Bm
Dyamante ma'y abutin
             A#m
Ikaw pa rin aking bituin
                D#m                      Badd9 C#
Natatangi kong dalangin 'gang sa huling siglo
```

**[Chorus]**

```
      Badd9      F#/A#
Sa huli palagi
D#m                       C#
Babalik pa rin sa yakap mo
          Badd9      F#/A#
Mahal sa huli palagi
D#m                        C#
Pipiliin kong maging sa'yo
             G#m                  F#
Ulit-ulitin man, nais kong malaman mong
Badd9    F#    Badd9
Iyo ako palagi
```

---
