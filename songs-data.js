/**
 * songs-data.js — the 14-song "September" jam-session setlist.
 *
 * Same shape/spirit as the chord-guide-v2 setlist: each song is written-key
 * chords stacked over lyrics, grouped into labeled sections. `transpose.js`
 * operates directly on these raw lines (see transposeLine / classifyLine),
 * so this file is the single source of truth for both the Markdown chart
 * (build-markdown.js) and the interactive HTML page (chord_guide_september.html).
 *
 * A line that starts with "// " is a performance note/directive (e.g.
 * "(same chords like Verse 1)") — it's rendered in italics and is never
 * treated as a chord or lyric line.
 *
 * Source chords: extracted from the Ultimate-Guitar-style .docx sheets in
 * `September/`, except Saksi Ang Langit which is carried over verbatim from
 * chord-guide-v2.md (song 15 there).
 *
 * BPM notes: values marked `bpmApprox: true` are best-known estimates (the
 * source sheets didn't give a trustworthy tempo) — treat them as a starting
 * point and adjust by ear. Multo, Summer of '69, and Saksi Ang Langit have
 * source-confirmed tempos.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.SEPTEMBER_SONGS = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var SONGS = [
    {
      number: 1,
      title: "Bulong",
      artist: "Kitchie Nadal",
      key: "D",
      bpm: 84,
      bpmApprox: true,
      note: "Segues directly into Same Ground — same tempo, no break",
      sections: [
        { label: "Intro", lines: [
          "D (Dsus D) E G D (x2)"
        ] },
        { label: "Verse 1", lines: [
          "D                     E",
          "Ikaw ba'y nalulungkot nababalot pa ng poot",
          "G                         D",
          "Maraming hinanakit sa mundo",
          "D",
          "Di alam anung gagawin",
          "      E",
          "Kundi ubusin ang oras sa gin",
          "  G                         D",
          "Akala mo'y iya'y may mararating"
        ] },
        { label: "Chorus", lines: [
          "D         C   G      Cadd9       G          D",
          "Hoy kaibigan ko pakinggan mong mga bulong sayo",
          "D           C           G    Cadd9      G           D",
          "Ito'y 'di galing sa mundo patungo sa pangakong paraiso"
        ] },
        { label: "Instrumental", lines: [
          "D (Dsus D) E G D (x2)"
        ] },
        { label: "Verse 2", lines: [
          "// (same as Verse 1 chord pattern)",
          "Nasan nang talino mo diskarte kamo ng kano",
          "Tapakan ang lahat kahit kapwa mo",
          "",
          "Minsan ang kagitingan ay wala sa bigat ng pinanapasan",
          "Sa pagsuko't pagharap ng kabiguan"
        ] },
        { label: "Chorus", lines: [
          "D         C   G      Cadd9       G          D",
          "Hoy kaibigan ko pakinggan mong mga bulong sayo",
          "D           C           G    Cadd9      G           D",
          "Ito'y 'di galing sa mundo patungo sa pangakong paraiso"
        ] },
        { label: "Bridge", lines: [
          "Bm             G        Em      D/F#",
          "Tumatakbo'ng oras gumising ka't bumangon na",
          "   G                      A",
          "Pagka't hindi na ikaw ang biktima"
        ] },
        { label: "Instrumental", lines: [
          "D (Dsus D) E G D (x2)"
        ] },
        { label: "Interlude", lines: [
          "D E G D"
        ] },
        { label: "Chorus", lines: [
          "D         C   G      Cadd9       G          D",
          "Hoy kaibigan ko pakinggan mong mga bulong sayo",
          "D           C           G    Cadd9      G           D",
          "Ito'y 'di galing sa mundo patungo sa pangakong paraiso",
          "",
          "D         C   G      Cadd9       G          D",
          "Hoy kaibigan ko pakinggan mong mga bulong sayo",
          "D           C           G    Cadd9      G           D",
          "Ito'y 'di galing sa mundo patungo sa pangakong paraiso",
          "D           C           G    Cadd9      G           D",
          "Ito'y 'di galing sa mundo patungo sa pangakong paraiso",
          "D           C           G    Cadd9      G",
          "Ito'y 'di galing sa mundo patungo sa pangakong"
        ] },
        { label: "Transition", lines: [
          "// Prepare to transition into Same Ground",
          "A  G"
        ] }
      ]
    },

    {
      number: 2,
      title: "Same Ground",
      artist: "Kitchie Nadal",
      key: "A",
      bpm: 84,
      bpmApprox: true,
      note: "Segues directly from Bulong — same tempo, no break",
      sections: [
        { label: "Intro", lines: [
          "A       G   A       G"
        ] },
        { label: "Verse 1", lines: [
          "A                      G",
          "  My love, it's been a long time",
          "                           A               G",
          "Since I cried and left you out of the blue",
          "A                    G                             A   G",
          "  It's hard leaving you the way when I never wanted to",
          "A                 G",
          "Self-denial is a game, a stranger",
          "                        A              G",
          "I never would want until there was you",
          "              A",
          "'Cause I have learned that love is beyond",
          "                            G                                        A G",
          "What human can imagine, the more it clears the more I gotta let you go"
        ] },
        { label: "Chorus", lines: [
          "A                              E                         F#m",
          "   'Cause what I don't understand is why I'm feeling so bad now",
          "          D",
          "When I know it was my idea",
          "A                                          E",
          "   I could have just denied the truth and lied",
          "                   F#m",
          "Now why am I the only one standing",
          "Dm                      A",
          "Stranded on the same ground"
        ] },
        { label: "Interlude", lines: [
          "(A)   G     A   G"
        ] },
        { label: "Verse 2", lines: [
          "A                       G",
          "  My love, it's been a long time",
          "                           A              G",
          "Since I cried and left you out of the blue",
          "A                    G                             A   G",
          "  It's hard leaving you the way when I never wanted to",
          "A                 G",
          "Self-denial is a game, a stranger",
          "                         A             G",
          "I never would want until there was you",
          "              A                                                        G",
          "'Cause I have learned that love is a word gets thrown a little bit too much",
          "                                     A",
          "The best excuse to fill this infinite abyss",
          "                      G",
          "I never ever have to be"
        ] },
        { label: "Chorus", lines: [
          "A                              E                         F#m",
          "   'Cause what I don't understand is why I'm feeling so bad now",
          "          D",
          "When I know it was my idea",
          "A                                          E",
          "   I could have just denied the truth and lied",
          "                   F#m",
          "Now why am I the only one standing",
          "Dm                      A",
          "Stranded on the same ground"
        ] },
        { label: "Solo", lines: [
          "(A)   G     A   G",
          "A    G     A   G"
        ] },
        { label: "Chorus", lines: [
          "A                             E (BREAK)                F#m",
          "  'Cause what I don't understand is why I'm feeling so bad now",
          "         D",
          "When I know it was my idea",
          "A                                         E",
          "  I could have just denied the truth and lied",
          "",
          "                  F#m",
          "Now why am I the only one standing",
          "Dm                     A",
          "Stranded on the same ground"
        ] },
        { label: "Interlude", lines: [
          "(A)   G   A   G"
        ] },
        { label: "Outro", lines: [
          "   A               G                     A       G",
          "If all else fails, would you be there to love me?",
          "     A               G",
          "When all else fails, would you be brave",
          "   A                     G   A",
          "To see right through me?"
        ] }
      ]
    },

    {
      number: 3,
      title: "I'll Never Go",
      subtitle: "ver. 4",
      artist: "Erik Santos",
      key: "D",
      bpm: 70,
      bpmApprox: true,
      sections: [
        { label: "Verse 1", lines: [
          "D",
          "You always ask me",
          "        F#m",
          "Those words I say",
          "        Bm                       G",
          "And telling me what it means to me",
          "Em             A",
          "Every single day",
          "      F#m            Bm",
          "You always act this way",
          "      G",
          "For how many times I told you",
          "   Em",
          "I love you",
          "      A           D         G",
          "For this is all I know"
        ] },
        { label: "Verse 2", lines: [
          "// (same chords as Verse 1)",
          "D",
          "Come to me and hold me",
          "      F#m",
          "And you will see",
          "      Bm",
          "The love I give",
          "                        G",
          "For you still hold the key",
          "Em            A",
          "Every single day",
          "     F#m              Bm",
          "You always act this way",
          "     Em",
          "For how many times I told you",
          "   G",
          "I love you",
          "          A         D",
          "For this is all I know"
        ] },
        { label: "Chorus", lines: [
          "     D          G",
          "I'll never go far away from you",
          "Bm                 Em",
          "Even the sky will tell you",
          "                 G",
          "That I need you so",
          "    Bm",
          "For this is all I know",
          "       Em     A             D     G",
          "I'll never go far away from you"
        ] },
        { label: "Verse 3", lines: [
          "// (same chords as Verse 1)",
          "D",
          "Come to me and hold me",
          "      F#m",
          "And you will see",
          "      Bm",
          "The love I give",
          "                        G",
          "For you still hold the key",
          "Em            A",
          "Every single day",
          "     F#m              Bm",
          "You always act this way",
          "     Em",
          "For how many times I told you",
          "   G",
          "I love you",
          "          A         D",
          "For this is all I know"
        ] },
        { label: "Chorus", lines: [
          "     D          G",
          "I'll never go far away from you",
          "Bm                 Em",
          "Even the sky will tell you",
          "                 G",
          "That I need you so",
          "    Bm",
          "For this is all I know",
          "       Em     A             D     G",
          "I'll never go far away from you"
        ] },
        { label: "Outro", lines: [
          "     D          G",
          "I'll never go far away from you",
          "Bm                 Em",
          "Even the sky will tell you",
          "                 G",
          "That I need you so",
          "    Bm",
          "For this is all I know",
          "       Em     A             D     G",
          "I'll never go far away from you"
        ] }
      ]
    },

    {
      number: 4,
      title: "Multo",
      subtitle: "ver. 2",
      artist: "Cup of Joe",
      key: "B",
      note: "Capo 4 — chords below are shown as capo shapes (Cadd9 shape sounds as D, etc.)",
      bpm: 104,
      sections: [
        { label: "Verse", lines: [
          "     Cadd9                     G",
          "Humingang malalim, pumikit na muna",
          "    Cadd9                      G",
          "At baka sakaling namamalikmata lang",
          "        Cadd9                       G",
          "Ba't nababahala? 'Di ba't ako'y mag-isa?",
          "         Cadd9    G              D",
          "Kala ko'y payapa, boses mo'y tumatawag pa"
        ] },
        { label: "Pre-Chorus", lines: [
          "   Cadd9       G",
          "Binaon naman na ang lahat",
          "     Em           D",
          "Tinakpan naman na 'king sugat",
          "       Cadd9        G",
          "Ngunit ba't ba andito pa rin?",
          "Em                    D",
          "Hirap na 'kong intindihin"
        ] },
        { label: "Verse", lines: [
          "         Cadd9                  G",
          "Tanging panalangin, lubayan na sana",
          "          Cadd9                        G",
          "Dahil sa bawat tingin, mukha mo'y nakikita",
          "       Cadd9         G               Em                   D",
          "Kahit sa'n man mapunta ay anino mo'y kumakapit sa 'king kamay",
          "       Cadd9       G                  D",
          "Ako ay dahan-dahang nililibing nang buhay pa"
        ] },
        { label: "Chorus", lines: [
          "     Cadd9      G",
          "Hindi na makalaya",
          "     Em                  D",
          "Dinadalaw mo 'ko bawat gabi",
          "     Cadd9     G",
          "Wala mang nakikita",
          "       Em                      D",
          "Haplos mo'y ramdam pa rin sa dilim",
          "      Cadd9        G",
          "Hindi na na-nanaginip",
          "      Em          D",
          "Hindi na ma-makagising",
          "         Cadd9 G",
          "Pasindi na ng ilaw",
          "       Em                    D",
          "Minumulto na 'ko ng damdamin ko",
          "            Cadd9",
          "Ng damdamin ko"
        ] },
        { label: "Post-Chorus", lines: [
          "Cadd9      G",
          "'Di mo ba ako lilisanin?",
          "Em            D",
          "Hindi pa ba sapat pagpapahirap sa 'kin? (Damdamin ko)",
          "Cadd9           G",
          "Hindi na ba ma-mamamayapa?",
          "Em              D",
          "Hindi na ba ma-mamamayapa?"
        ] },
        { label: "Chorus", lines: [
          "       Cadd9     G",
          "Hindi na makalaya",
          "    Em                  D",
          "Dinadalaw mo 'ko bawat gabi",
          "      Cadd9      G",
          "Wala mang nakikita",
          "         Em                   D",
          "Haplos mo'y ramdam pa rin sa dilim",
          "      Cadd9      G",
          "Hindi na na-nanaginip",
          "      Em         D",
          "Hindi na ma-makagising",
          "       Cadd9   G",
          "Pasindi na ng ilaw",
          "         Em                  D",
          "Minumulto na 'ko ng damdamin ko",
          "            Cadd9",
          "Ng damdamin ko"
        ] },
        { label: "Post-Chorus", lines: [
          "           Cadd9          G",
          "Makalaya (hindi mo ba ako lilisanin?)",
          "                             Em              D",
          "Dinadalaw mo 'ko bawat gabi (hindi pa ba sapat pagpapahirap sa 'kin?)",
          "                    Cadd9             G",
          "Wala mang nakikita (hindi na ba ma-mamamayapa?)",
          "                                   Em                D",
          "Haplos mo'y ramdam pa rin sa dilim (hindi na ba ma-mamamayapa?)"
        ] }
      ]
    },

    {
      number: 5,
      title: "Saksi Ang Langit",
      artist: "December Avenue",
      key: "G",
      bpm: 85,
      sections: [
        { label: "Intro", lines: [
          "Dmaj7 Gmaj7",
          "Dmaj7 Gmaj7"
        ] },
        { label: "Verse 1", lines: [
          "            D",
          "Nangangarap lang",
          "                  Gmaj7",
          "Habang ika'y pinagmamasdan",
          "                D",
          "Nagbibilang ng iyong hakbang",
          "                     Gmaj7",
          "Hanggang ika'y aking mahagkan"
        ] },
        { label: "Pre-Chorus", lines: [
          "                   Em",
          "'Di sasayangin ang oras sa pag-ibig mo",
          "                G",
          "Mas pipiliin ko",
          "                                    D",
          "Ibigay lahat pati itong aking mundo"
        ] },
        { label: "Chorus", lines: [
          "                     Gmaj7",
          "Halika't sumayaw sa ilalim ng bituin",
          "                       D/F#",
          "Habang ako'y nakatingin sa'yo",
          "                      Em       G",
          "Wala ng 'kong ibang mahihiling",
          "                          D G",
          "Saksi ang langit sa'tin"
        ] },
        { label: "Verse 2", lines: [
          "               D",
          "'Wag kang magtaka",
          "                       G",
          "Kung bakit tayo pinag-isa",
          "                D",
          "'Wag kanang kabahan",
          "                G",
          "Ito'y hindi panaginip lang"
        ] },
        { label: "Pre-Chorus", lines: [
          "                  Em",
          "'Di gumagalaw ang oras sa paligid ko",
          "                   G",
          "Pati itong mundo'y",
          "                                    D",
          "Tumitigil habang ako'y nasa tabi mo"
        ] },
        { label: "Chorus", lines: [
          "                     Gmaj7",
          "Halika't sumayaw sa ilalim ng bituin",
          "                       D/F#",
          "Habang ako'y nakatingin sa'yo",
          "                      Em       G",
          "Wala ng 'kong ibang mahihiling",
          "Saksi ang langit sa'tin"
        ] },
        { label: "Refrain", lines: [
          "D              G",
          "  Oh-oh, oh-oh-oh",
          "                Em",
          "Oh-oh, oh-oh-oh",
          "                G",
          "Oh-oh, oh-oh-oh",
          "                D",
          "Oh-oh, oh-oh-oh",
          "Saksi ang langit",
          "Saksi ang langit sa'tin",
          "G",
          "  Saksi ang langit",
          "Saksi ang langit sa'tin",
          "Em",
          "   Saksi ang langit",
          "Saksi ang langit sa'tin",
          "G",
          "    Saksi ang langit"
        ] },
        { label: "Pre-Chorus", lines: [
          "                  Em",
          "'Di gumagalaw ang oras sa paligid ko",
          "                   G",
          "Pati itong mundo'y",
          "                                    D",
          "Tumitigil habang ako'y nasa tabi mo"
        ] },
        { label: "Chorus", lines: [
          "                     Gmaj7",
          "Halika't sumayaw sa ilalim ng bituin",
          "                        D/F#",
          "Habang ako'y nakatingin sa'yo",
          "                      Em        G",
          "Wala ng 'kong ibang mahihiling",
          "                        D",
          "Saksi ang langit sa'tin (Saksi ang langit)",
          "                     Gmaj7",
          "Halika't sumayaw sa ilalim ng bituin",
          "                      D/F#",
          "Habang ako'y nakadikit sa'yo",
          "                     Em       G",
          "Wala na'kong ibang mahihiling",
          "                 D",
          "Saksi ang langit"
        ] }
      ]
    },

    {
      number: 6,
      title: "Ulan",
      artist: "Cueshé",
      subtitle: "Half Empty, Half Full",
      key: "B",
      bpm: 72,
      bpmApprox: true,
      sections: [
        { label: "Intro", lines: [
          "B D# x2",
          "B D# G#m E"
        ] },
        { label: "Verse 1", lines: [
          "B                F#",
          "Lagi na lang umuulan",
          "B                   F#",
          "Parang walang katapusan",
          "          C#        E",
          "Tulad ng paghihirap ko ngayon",
          "      B          D#",
          "Parang walang humpay",
          "        G#m",
          "Sa kabila ng lahat",
          "          G",
          "Ng aking pagsisikap",
          "      B",
          "Na limutin ka",
          "   F#             B D# G#m E",
          "Ay di pa rin magawa"
        ] },
        { label: "Verse 2", lines: [
          "B                  F#",
          "Hindi naman ako tanga",
          "B                  F#",
          "Alam ko na wala ka na",
          "       C#            E",
          "Pero mahirap lang na tanggapin",
          "   B         D#",
          "Di na kita kapiling",
          "       G#m",
          "Iniwan mo akong",
          "     G",
          "Nag iisa",
          "      B",
          "Sa gitna ng dilim",
          "     F#                 B     F#   E",
          "At basang basa pa sa ulan"
        ] },
        { label: "Chorus", lines: [
          "B                D#",
          "Pero wag mag alala",
          "       G#m          C#7",
          "Di na kita gagambalain",
          "           C#m",
          "Alam ko namang ngayong",
          "      E                 B  F#  E",
          "May kapiling ka ng iba",
          "B                       D#",
          "Tanging hiling ko sa 'yo",
          "     G#m        C#7",
          "Na tuwing umuulan",
          "            C#m",
          "Maalala mo sanang may",
          "   E             B D# G#m C# C#m F# B (Ad Lib)",
          "Nagmamahal sa 'yo, oh, oh, oh....."
        ] },
        { label: "Verse 3", lines: [
          "B                 F#",
          "Lagi na lang umuulan",
          "B                  F#",
          "Parang walang katapusan",
          "           C#           E",
          "Tulad ng paghihirap ko ngayon",
          "      B         D#",
          "Parang walang humpay",
          "       G#m",
          "Iniwan mo akong",
          "    G",
          "Nag iisa",
          "      B",
          "Sa gitna ng dilim",
          "     F#                   B  F#    E",
          "At basang basa pa sa ulan"
        ] },
        { label: "Chorus", lines: [
          "B                D#",
          "Pero wag mag alala",
          "       G#m         C#",
          "Di na kita gagambalain",
          "           C#m",
          "Alam ko namang ngayong",
          "      E               B  F#   E",
          "May kapiling ka ng iba",
          "B                     D#",
          "Tanging hiling ko sa 'yo",
          "     G#m        C#",
          "Na tuwing umuulan",
          "            C#m",
          "Maalala mo sanang may",
          "   E            B   F#   E",
          "Nagmamahal sa 'yo ako"
        ] },
        { label: "Outro", lines: [
          "B     F#",
          "La la la la la",
          "G#m   F#",
          "La la la la la",
          "A     E     B",
          "La la la la la...."
        ] }
      ]
    },

    {
      number: 7,
      title: "Umaaraw, Umuulan",
      artist: "Rivermaya",
      subtitle: "Tuloy ang Ligaya",
      key: "A",
      bpm: 160,
      bpmApprox: true,
      sections: [
        { label: "Verse 1", lines: [
          "A                   E",
          "  Hindi mo maintindihan",
          "                               F#m",
          "Kung bakit ikaw ang napapagtripan",
          "      DM7               D",
          "Ng halik ng kamalasan",
          "A                              E",
          "  ginapang mong marahan ang hagdanan",
          "                    F#m",
          "para lamang makidlatan",
          "       DM7    D",
          "sa kaitaas-taasan, ngunit"
        ] },
        { label: "Refrain", lines: [
          "E      F#m",
          "  kaibigan,",
          "DM7               D",
          "  huwag kang magpapasindak",
          "E     F#m",
          "  kaibigan",
          "          DM7        D DM7 D",
          "Easy ka lang sa iyak",
          "         A",
          "Dahil wala ring mangyayari",
          "          E",
          "Tayoy walang mapapala",
          "              F#m                 DM7 D",
          "wag mong pigilan ang pagbuhos ng ulan",
          "              A",
          "May panahon para maging hari",
          "              E",
          "May panahon para madapa",
          "           F#m                   DM7 D",
          "Dahil ang buhay natin ay sadyang ganyan"
        ] },
        { label: "Chorus", lines: [
          "DM7 D              A",
          "  Umaaraw, umuulan",
          "E               F#m",
          "  Umaaraw, umuulan",
          "DM7 D                    A",
          "  Ang buhay ay sadyang ganyan",
          "    E   F#m    DM7 D",
          "Umaaraw, umuulan"
        ] },
        { label: "Instrumental Interlude", lines: [
          "A E F#m DM7 D"
        ] },
        { label: "Verse 2", lines: [
          "A                       E",
          "Wag kang maawa sa iyong sarili",
          "                        F#m",
          "isipin na wala ka ng silbi",
          "          DM7       D",
          "San' dambuhalang kalokohan",
          "A                           E",
          "Bukas sisikat ding muli ang araw",
          "                       F#m",
          "Ngunit para lang sa may tiyagang",
          "      DM7   D",
          "Maghintay..... (maghintay)"
        ] },
        { label: "Refrain", lines: [
          "E     F#m",
          "kaibigan",
          "DM7              D",
          "wag kang magpapatalo",
          "E    F#m",
          "kaibigan,",
          "       DM7 D DM7 D",
          "Itaas ang noo",
          "         A",
          "Dahil wala ring mangyayari",
          "          E",
          "Tayoy walang mapapala",
          "             F#m                    DM7 D",
          "Wag mong pigilan ang pagbuhos nang ulan",
          "             A",
          "May panahon para maging hari",
          "             E",
          "May panahon para madapa",
          "           F#m                   DM7 D",
          "Dahil ang buhay natin ay sadyang ganyan"
        ] },
        { label: "Chorus", lines: [
          "DM7 D          A",
          "  Umaaraw, umuulan",
          "E               F#m",
          "  Umaaraw, umuulan",
          "DM7 D                   A",
          " Ang buhay ay sadyang ganyan",
          "   E   F#m    DM7 D",
          "Umaaraw, umuulan"
        ] },
        { label: "Instrumental Interlude", lines: [
          "A E F#m DM7 D",
          "A E F#m DM7 D"
        ] },
        { label: "Refrain", lines: [
          "        A",
          "Dahil wala ring mangyayari",
          "         E",
          "Tayoy walang mapapala",
          "            F#m                   DM7 D",
          "Wag mong pigilan ang pagbuhos ng ulan",
          "            A",
          "May panahon para maging hari",
          "            E",
          "May panahon para madapa",
          "          F#m                    DM7 D",
          "Dahil ang buhay natin ay sadyang ganyan."
        ] },
        { label: "Chorus", lines: [
          "DM7 D A",
          "Umaaraw, umuulan",
          "E               F#m",
          "  Umaaraw, umuulan",
          "DM7 D                     A",
          "  Ang buhay ay sadyang ganyan",
          "    E    F#m            DM7 D A E      F#m             DM7 D",
          "Umaaaaaaraaaw, umuulaaaaaaaaaaaaaaaaaaaaaaaan, wooo hoooah"
        ] },
        { label: "Outro", lines: [
          "A E F#m DM7 D",
          "Woooh hoooh",
          "A E F#m DM7 D",
          "Woooh hoooh",
          "A E F#m DM7 D",
          "Tuloy ang Ligaya!",
          "// [Instrumental to end]",
          "A E F#m DM7 D"
        ] }
      ]
    },

    {
      number: 8,
      title: "Head Over Feet",
      artist: "Alanis Morissette",
      key: "C",
      bpm: 107,
      bpmApprox: true,
      sections: [
        { label: "Verse 1", lines: [
          "C G       Am7",
          "I had no choice",
          "               F",
          "But to hear you",
          "C     G           Am7",
          "You stated your case",
          "F                C",
          "Time and again",
          "                      G       Am7",
          "And I thought about it",
          "C G           Am7",
          "You treat me like",
          "  F",
          "  I'm a princess",
          "C     G           Am7       F",
          "I'm not used to liking that",
          "C         G             Am7",
          "You ask how my day was"
        ] },
        { label: "Chorus", lines: [
          "                D      Bm",
          "You've already won me over",
          "G           A",
          "In spite of me",
          "              D            Bm",
          "And don't be alarmed if I fall",
          "G         A",
          "Head over feet",
          "             D                Bm",
          "And don't be surprised if I love you",
          "G                 A",
          "For all that you are",
          "F                       C",
          "I couldn't help it",
          "G                    D (optional)",
          "It's all your fault"
        ] },
        { label: "Verse 2", lines: [
          "C G      Am7",
          "Your love is thick and",
          "              F",
          "it swallowed me whole",
          "C    G          Am7",
          "You're so much braver",
          "F               C",
          "than I give you credit for",
          "                    G        Am7",
          "That's not lip service"
        ] },
        { label: "Chorus", lines: [
          "                D      Bm",
          "You've already won me over",
          "G           A",
          "In spite of me",
          "              D            Bm",
          "And don't be alarmed if I fall",
          "G         A",
          "Head over feet",
          "             D                Bm",
          "And don't be surprised if I love you",
          "G                 A",
          "For all that you are",
          "F                       C",
          "I couldn't help it",
          "G                    D (optional)",
          "It's all your fault"
        ] },
        { label: "Verse 3", lines: [
          "C G      Am7",
          "You are the bearer",
          "         F",
          "of unconditional things",
          "C     G         Am7",
          "You held your breath -",
          "F               C",
          "and the door for me",
          "                    G        Am7",
          "Thanks for your patience."
        ] },
        { label: "Harmonica Solo", lines: [
          "// (guitar chords for background)",
          "D Bm G A D Bm G A D Bm G A G"
        ] },
        { label: "Verse 4", lines: [
          "// one strum each until next chorus",
          "C G       Am7",
          "You're the best listener",
          "          F",
          "  that I've ever met",
          "C     G          Am7",
          "You're my best friend,",
          "F",
          "best friend with benefits",
          "C    G          Am7",
          "What took me so long?",
          "C G       Am7",
          "I've never felt",
          "         F",
          "this healthy before",
          "C    G          Am7",
          "I've never wanted",
          "F               C",
          "something rational",
          "        G         Am7     C                G      Am7",
          "I am aware now...ohhh....I am aware now"
        ] },
        { label: "Chorus", lines: [
          "                D      Bm",
          "You've already won me over",
          "G           A",
          "In spite of me",
          "              D            Bm",
          "And don't be alarmed if I fall",
          "G         A",
          "Head over feet",
          "             D                Bm",
          "And don't be surprised if I love you",
          "G                 A",
          "For all that you are",
          "F                       C",
          "I couldn't help it",
          "G                    D (optional)",
          "It's all your fault",
          "// fade out with chorus and ooohhhs"
        ] }
      ]
    },

    {
      number: 9,
      title: "Cruisin'",
      artist: "Huey Lewis & Gwyneth Paltrow / Smokey Robinson",
      key: "E",
      bpm: 71,
      bpmApprox: true,
      sections: [
        { label: "Intro", lines: [
          "E         F#m7      E         F#m7"
        ] },
        { label: "Verse 1", lines: [
          "          E            F#m7                   E    F#m7",
          "          Baby let's cruise       away from here",
          "          E                 F#m7                E   F#m7",
          "          Don't be confused,      the way is clear",
          "                     E                      F#m7",
          "          And if you want it, you got it forever,",
          "                                  E      F#m7",
          "          This is not a one night stand",
          "             E                       F#m7",
          "          So let the music take your mind,",
          "          E                         F#m7",
          "          Just release and you will find"
        ] },
        { label: "Chorus", lines: [
          "             E                      A",
          "             You're gonna fly away, glad you're goin' my way",
          "             D B                  E",
          "             I love it when we're cruisin' together",
          "             E                         A",
          "             Music is played for love, cruisin' is made for love",
          "             D B                  E",
          "             I love it when we're cruisin' together"
        ] },
        { label: "Verse 2", lines: [
          "          E                    F#m7               E   F#m7",
          "          Baby tonight                belongs to us",
          "          E                F#m7                E     F#m7",
          "          Everything's right,     do what you must",
          "                      E                       F#m7",
          "          And inch by inch we grow closer and closer",
          "                         E                  F#m7",
          "          To every li'l part of each other",
          "              E                      F#m7",
          "          So let the music take your mind,",
          "            E                       F#m7",
          "          Just release and you will find"
        ] },
        { label: "Chorus", lines: [
          "             E                      A",
          "             You're gonna fly away, glad you're goin' my way",
          "             D B                  E",
          "             I love it when we're cruisin' together",
          "             E                         A",
          "             Music is played for love, cruisin' is made for love",
          "             D B                  E",
          "             I love it when we're cruisin' together"
        ] },
        { label: "Instrumental (with vocal phrases)", lines: [
          "E F#m7 E F#m7"
        ] },
        { label: "Verse 3", lines: [
          "          E                F#m7                         E   F#m7",
          "          Baby let's cruise,       let's float let's glide",
          "          E         F#m7                    E       F#m7",
          "          Let's open up            and go inside",
          "                     E                       F#m7",
          "          And if you want it, you got it forever,",
          "                                 E                             F#m7",
          "          I could just stay here beside you and love you baby",
          "          E                        F#m7",
          "          Let the music take your mind,",
          "          E                          F#m7",
          "          Just release and you will find"
        ] },
        { label: "Chorus", lines: [
          "             E                       A",
          "             You're gonna fly away, glad you're goin' my way",
          "             D B                   E",
          "             I love it when we're cruisin' together",
          "             E                         A",
          "             Music is played for love, cruisin' is made for love",
          "             D B                 E",
          "             I love it when we're cruisin' together"
        ] },
        { label: "Outro", lines: [
          "             E                      A",
          "             You're gonna fly away, glad you're goin' my way",
          "D B                  E",
          "I love it when we're cruisin' together",
          "E                         A",
          "Music is played for love, cruisin' is made for love",
          "D B                  E",
          "I love it when we're cruisin' together"
        ] }
      ]
    },

    {
      number: 10,
      title: "Summer of '69",
      artist: "Bryan Adams",
      key: "D",
      bpm: 138,
      sections: [
        { label: "Intro", lines: [
          "D"
        ] },
        { label: "Verse 1", lines: [
          "D",
          "   I got my first real six-string",
          "A",
          "    Bought it at the five-and-dime",
          "D",
          "    Played it 'til my fingers bled",
          "A",
          "    It was the summer of '69"
        ] },
        { label: "Verse 2", lines: [
          "D",
          "   Me and some guys from school",
          "A",
          "   Had a band and we tried real hard",
          "D",
          "   Jimmy quit, Jody got married",
          "A",
          "   I shoulda known we'd never get far"
        ] },
        { label: "Chorus 1", lines: [
          "Bm             A",
          "    Oh, when I look back now",
          "D                         G",
          "    That summer seemed to last forever",
          "Bm           A",
          "    And if I had the choice",
          "D                    G",
          "    Yeah, I'd always wanna be there",
          "Bm                 A               D",
          "    Those were the best days of my life"
        ] },
        { label: "Instrumental", lines: [
          "(D)   A"
        ] },
        { label: "Verse 3", lines: [
          "D",
          "    Ain't no use in complainin'",
          "A",
          "    When you got a job to do",
          "D",
          "    Spent my evenin's down at the drive in",
          "A",
          "    And that's when I met you, yeah"
        ] },
        { label: "Chorus 2", lines: [
          "Bm                   A",
          "    Standin' on your mama's porch",
          "D                           G",
          "    You told me that you'd wait forever",
          "Bm                   A",
          "    Oh, and when you held my hand",
          "D                      G",
          "    I knew that it was now or never",
          "Bm                 A                D",
          "    Those were the best days of my life",
          "(D)            A                                D     A",
          "         Oh yeah         Back in the summer of '69   Ohhh"
        ] },
        { label: "Bridge", lines: [
          "F               Bb",
          "   Man, we were killin' time",
          "         C",
          "We were young and restless",
          "   Bb/D",
          "We needed to unwind",
          "F          Bb                  C",
          "   I guess nothin' can last forever, forever no"
        ] },
        { label: "Instrumental", lines: [
          "D    A    x2"
        ] },
        { label: "Verse 4", lines: [
          "D",
          "   And now the times are changin'",
          "A",
          "   Look at everything that's come and gone",
          "D",
          "   Sometimes when I play that old six-string",
          "A",
          "   I think about you, wonder what went wrong"
        ] },
        { label: "Chorus 3", lines: [
          "Bm                   A",
          "    Standin' on your mama's porch",
          "D                         G",
          "    You told me that it'd last forever",
          "Bm                   A",
          "    Oh, and when you held my hand",
          "D                      G",
          "    I knew that it was now or never",
          "Bm                 A               D",
          "    Those were the best days of my life"
        ] },
        { label: "Outro", lines: [
          "(D)             A                                D       A",
          "          Oh yeah         Back in the summer of '69   Uh-huh",
          "                       D          A",
          "It was the summer of '69.      Oh yeah",
          "                   D            A",
          "Me and my baby in '69.         Ohhhhh, oh",
          "D                    A                           D",
          "         It was the summer, summer, summer of '69",
          "  A      D      A        D      A",
          "Yeah",
          "// (fade out)"
        ] }
      ]
    },

    {
      number: 11,
      title: "Mamma Mia",
      artist: "ABBA",
      key: "D",
      bpm: 118,
      bpmApprox: true,
      bpmNote: "the source sheet's \"138 bpm\" is a generic strumming-pattern placeholder, not the recording's actual tempo",
      sections: [
        { label: "Intro", lines: [
          "D             Daug"
        ] },
        { label: "Verse 1", lines: [
          "D         A/D        D                       G",
          "I've been cheated by you, since I don't know when",
          "D    A/D        D                        G",
          "So I made up my mind, it must come to an end",
          "D             Daug",
          "Look at me now, will I ever learn?",
          "D               Daug             G",
          "I don't know how, but I suddenly lose control",
          "                   A",
          "There's a fire within my soul"
        ] },
        { label: "Pre-Chorus", lines: [
          "G    D/F# A",
          "Just one look and I can hear a bell ring",
          "G   D/F# A",
          "One more look and I forget everything, whoa oh"
        ] },
        { label: "Chorus", lines: [
          "D",
          "Mamma mia, here I go again",
          "C/G G               D/G",
          "My my, how can I resist you?",
          "D",
          "Mamma mia, does it show again?",
          "C/G G                      D/G",
          "My my, just how much I've missed you",
          "D              A/C#",
          "Yes, I've been broken-hearted",
          "Bm             F#m/A",
          "Blue since the day we parted",
          "C/G G    Em          A",
          "Why, why did I ever let you go?",
          "D         Bm",
          "Mamma mia, now I really know,",
          "C/G G   Em             A",
          "My my, I could never let you go"
        ] },
        { label: "Instrumental", lines: [
          "D Daug x2"
        ] },
        { label: "Verse 2", lines: [
          "D         A/D       D                         G",
          "I've been angry and sad about things that you do",
          "D       A/D           D                              G",
          "I can't count all the times that I've told you we're through",
          "D              Daug",
          "And when you go, when you slam the door",
          "D               Daug                 G",
          "I think you know, that you won't be away too long",
          "                  A",
          "You know that I'm not that strong"
        ] },
        { label: "Pre-Chorus", lines: [
          "G    D/F# A",
          "Just one look and I can hear a bell ring",
          "G   D/F# A",
          "One more look and I forget everything, whoa oh"
        ] },
        { label: "Chorus", lines: [
          "D",
          "Mamma mia, here I go again",
          "C/G G               D/G",
          "My my, how can I resist you?",
          "D",
          "Mamma mia, does it show again?",
          "C/G G                      D/G",
          "My my, just how much I've missed you",
          "D              A/C#",
          "Yes, I've been broken-hearted",
          "Bm             F#m/A",
          "Blue since the day we parted",
          "C/G G    Em          A",
          "Why, why did I ever let you go?",
          "D",
          "Mamma mia, even if I say",
          "C/G G                    D/G",
          "Bye bye, leave me now or never",
          "D",
          "Mamma mia, it's a game we play",
          "C/G G                   D/G",
          "Bye bye doesn't mean forever",
          "D",
          "Mamma mia, here I go again",
          "C/G G               D/G",
          "My my, how can I resist you?",
          "D",
          "Mamma mia, does it show again?",
          "C/G G                      D/G",
          "My my, just how much I've missed you",
          "D              A/C#",
          "Yes, I've been broken-hearted",
          "Bm             F#m/A",
          "Blue since the day we parted",
          "C/G G    Em          A",
          "Why, why did I ever let you go?",
          "D         Bm",
          "Mamma mia, now I really know,",
          "C/G G   Em             A",
          "My my, I could never let you go"
        ] },
        { label: "Outro", lines: [
          "D Daug x5",
          "// (fade out)"
        ] }
      ]
    },

    {
      number: 12,
      title: "Dancing Queen",
      artist: "ABBA",
      subtitle: "Luka Bloom acoustic cover arrangement",
      key: "A",
      bpm: 78,
      bpmApprox: true,
      bpmNote: "Luka Bloom's slower fingerstyle cover — not the original ABBA disco tempo (~101 bpm)",
      sections: [
        { label: "Intro", lines: [
          "A - D - A - D"
        ] },
        { label: "Intro", lines: [
          "E              C#",
          "You can dance, you can jive",
          "F#m        F#m/E           B/D#",
          "Having the time of your life.",
          "    D              Bm",
          "Oh, see that girl, watch that scene,",
          "E           A              D - A - D",
          "Diggin' the dancing queen."
        ] },
        { label: "Verse 1", lines: [
          "A                                 D",
          "Friday night and the lights are low.",
          "A                            F#m",
          "Looking out for a place to go.",
          "E                         F#m",
          "Where they play the right music",
          "E                F#m",
          "Getting in the swing.",
          "                   C#m     F#m        C#m - F#m",
          "You've come to look for a king.",
          "A                     D",
          "Anybody could be that guy.",
          "A                              F#m",
          "Night is young and the music's high.",
          "E                  F#m",
          "With a bit of rock music",
          "E             F#m",
          "Everything is fine,",
          "              E    F#m             E - F#m",
          "You're in the mood for a dance.",
          "                D               E",
          "And when you get the chance..."
        ] },
        { label: "Chorus", lines: [
          "            A               D                    A            D - E",
          "You are the dancing queen, young and sweet, only seventeen.",
          "A              D                      A         D",
          "Dancing queen, feel the beat from the tambourine.",
          "E              C#",
          "You can dance, you can jive",
          "F#m         F#m/E            B/D#",
          "Having the time of your life.",
          "    D              Bm",
          "Oh, see that girl, watch that scene,",
          "E          A           D - A - D",
          "Diggin' the dancing queen."
        ] },
        { label: "Verse 2", lines: [
          "A                              D",
          "You're a tease, you turn 'em on.",
          "A                                 F#m",
          "Leave 'em burning and then you're gone",
          "E                F#m      E           F#m",
          "Looking out for another, anyone will do,",
          "              E         F#m            E - F#m",
          "You're in the mood for a dance.",
          "                     D          E",
          "And when you get the chance"
        ] },
        { label: "Chorus", lines: [
          "            A               D                    A            D - E",
          "You are the dancing queen, young and sweet, only seventeen.",
          "A              D                      A         D",
          "Dancing queen, feel the beat from the tambourine.",
          "E              C#",
          "You can dance, you can jive",
          "F#m         F#m/E            B/D#",
          "Having the time of your life.",
          "    D              Bm",
          "Oh, see that girl, watch that scene,",
          "E          A           D - A - D",
          "Diggin' the dancing queen."
        ] },
        { label: "Outro", lines: [
          "// fade out on",
          "A - D"
        ] }
      ]
    },

    {
      number: 13,
      title: "Babe",
      artist: "Styx",
      key: "D",
      bpm: 71,
      bpmApprox: true,
      sections: [
        { label: "Intro", lines: [
          "D  Em  D  G  A"
        ] },
        { label: "Verse 1", lines: [
          "D",
          "Babe, I'm leaving, I must be on my way",
          "Em                  A",
          "the time is drawing near",
          "D",
          "my train is going, I see it in your eyes",
          "Em                       A",
          "the love, the need, your tears",
          "",
          "Bm                 G       A",
          "But I'll be lonely without you",
          "G                                 A       G           A",
          "and I'll need your love to see me through",
          "D",
          "please believe me, my heart is in your hands",
          "    Em      G        D    A",
          "and I'll be missing you"
        ] },
        { label: "Chorus", lines: [
          "                  D   A",
          "    You know it's you babe",
          "        G                         Bm A",
          "    whenever I get weary and I've had enough",
          "              Bm     A",
          "    feel like giving up",
          "                  D   A",
          "    you know it's you babe",
          "    G                             Bm         A",
          "    giving me the courage and the strength I need",
          "    Bm     A                 G   A              D",
          "    please believe that it's true, babe, I love you"
        ] },
        { label: "Instrumental", lines: [
          "A# C A# C D G D G",
          "A# C A# C G A G A"
        ] },
        { label: "Chorus", lines: [
          "                  D   A",
          "    You know it's you babe",
          "        G                         Bm A",
          "    whenever I get weary and I've had enough",
          "              Bm     A",
          "    feel like giving up",
          "                  D   A",
          "    you know it's you babe",
          "    G                             Bm         A",
          "    giving me the courage and the strength I need",
          "    Bm     A                 G",
          "    please believe that it's true,",
          "",
          "A                D",
          "    babe, I love you."
        ] },
        { label: "Verse 2", lines: [
          "D",
          "babe, I'm leaving, I'll say it once again",
          "Em             G     A",
          "somehow try to smile",
          "D",
          "I know the feelings we're trying to forget",
          "Em            G    A",
          "if only for a while",
          "Bm                 G       A",
          "but I'll be lonely without you",
          "G                                 A       G    A",
          "and I'll need your love to see me through",
          "D",
          "please believe me, my heart is in your hands",
          "    Em      G        D",
          "and I'll be missing you"
        ] },
        { label: "Outro", lines: [
          "Em           D",
          "babe, I love you",
          "Em           D",
          "babe, I love you",
          "G    Em          D",
          "Ooh, babe love you.."
        ] }
      ]
    },

    {
      number: 14,
      title: "Palagi",
      subtitle: "ver. 2",
      artist: "TJ Monterde",
      key: "F#",
      bpm: 76,
      bpmApprox: true,
      sections: [
        { label: "Intro", lines: [
          "G#m7          A#m7",
          "Kahit saan man makarating",
          "",
          "       B          A#m7      D#m",
          "Hanap pa rin ay iyong lambing",
          "",
          "       G#m7         A#m7         D#m",
          "At kahit ano man ang mangyari",
          "",
          "       C#m7   F#     B    A#m",
          "Sa 'yo pa rin uuwi...",
          "",
          "  F#     G#m7   F#/A#    B   G#m7   F#/A#    C#",
          "Palagi..."
        ] },
        { label: "Verse 1", lines: [
          "          F#                   Badd9",
          "Hindi man araw-araw na nakangiti",
          "       F#                         Badd9",
          "Ilang beses na rin tayong humihindi",
          "            D#m                      Badd9",
          "'Di na mabilang ang ating mga tampuhan",
          "          D#m                    Badd9",
          "Away-bati natin, 'di na namamalayan"
        ] },
        { label: "Pre-Chorus", lines: [
          " G#m     C#",
          "Heto tayo"
        ] },
        { label: "Chorus", lines: [
          "             Badd9     F#/A#",
          "Ngunit sa huli palagi",
          "D#m                      C#",
          "Babalik pa rin sa yakap mo",
          "             Badd9     F#/A#",
          "Hanggang sa huli palagi",
          "D#m                       C#",
          "Pipiliin kong maging sa'yo",
          "             G#m                 F#",
          "Ulit-ulitin man, nais kong malaman mong",
          "Badd9       F#    Badd9",
          "Iyo ako palagi,",
          "F#     Badd9",
          "palagi"
        ] },
        { label: "Verse 2", lines: [
          "       F#                               Badd9",
          "Kung balikan man ang hirap, luha't lahat",
          "          F#                        Badd9",
          "Ikaw ang paborito kong desisyon at",
          "             D#m                  Badd9",
          "'Pag napaligiran ng ingay at ng gulo",
          "             D#m                  Badd9",
          "'Di ko 'pagpapalit ngiti mo sa mundo"
        ] },
        { label: "Pre-Chorus", lines: [
          " G#m     C#",
          "Heto tayo"
        ] },
        { label: "Chorus", lines: [
          "      Badd9     F#/A#",
          "Sa huli palagi",
          "D#m                      C#",
          "Babalik pa rin sa yakap mo",
          "            Badd9      F#/A#",
          "Hanggang sa huli palagi",
          "D#m                       C#",
          "Pipiliin kong maging sa'yo",
          "            G#m                   F#",
          "Ulit-ulitin man, nais kong malaman mong",
          "Badd9",
          "Iyo ako"
        ] },
        { label: "Bridge", lines: [
          "D#m           C#                 Badd9",
          "Sa pagdating ng ating pilak at ginto",
          "                Bm",
          "Dyamante ma'y abutin",
          "             A#m",
          "Ikaw pa rin aking bituin",
          "                D#m                      Badd9 C#",
          "Natatangi kong dalangin 'gang sa huling siglo"
        ] },
        { label: "Chorus", lines: [
          "      Badd9      F#/A#",
          "Sa huli palagi",
          "D#m                       C#",
          "Babalik pa rin sa yakap mo",
          "          Badd9      F#/A#",
          "Mahal sa huli palagi",
          "D#m                        C#",
          "Pipiliin kong maging sa'yo",
          "             G#m                  F#",
          "Ulit-ulitin man, nais kong malaman mong",
          "Badd9    F#    Badd9",
          "Iyo ako palagi"
        ] }
      ]
    }
  ];

  return SONGS;
}));
