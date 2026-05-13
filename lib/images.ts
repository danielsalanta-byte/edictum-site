/**
 * Curated premium imagery from Unsplash.
 * Style brief: cinematic · natural light · classical · timeless · warm tones.
 * Each image is hand-picked to fit Edictum's classical-Christian academic brand.
 */

const u = (id: string, w = 1800, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const IMG = {
  // Classical architecture — Oxford / Cambridge / columns
  oxfordCourt: u("photo-1564507592333-c60657eea523"),       // Oxford college court
  classicalColumns: u("photo-1503424886307-b090341d25d1"),  // tall classical columns
  cambridgeFacade: u("photo-1568667256549-094345857637"),   // Cambridge-style staircase / hall
  archGate: u("photo-1542816417-0983c9c9ad53"),             // stone archway, golden light

  // Libraries & books
  oldLibrary: u("photo-1481627834876-b7833e8f5570"),         // Trinity-style library
  darkLibrary: u("photo-1519682337058-a94d519337bc"),        // dark dramatic spiral-staircase library
  bookshelves: u("photo-1521587760476-6c12a4b040da"),        // long shelf perspective
  openBook: u("photo-1507842217343-583bb7270b66"),           // open book on wood, warm light
  manuscriptDesk: u("photo-1532153975070-2e9ab71f1b14"),     // antique manuscripts
  libraryWindow: u("photo-1497633762265-9d179a990aa6"),      // library by window

  // Students / children formation
  girlReading: u("photo-1577896851231-70ef18881754"),        // girl reading by window
  childWriting: u("photo-1503676260728-1c00da094a0b"),       // child with chalkboard
  classroomQuiet: u("photo-1580582932707-520aed937b7b"),     // calm classical classroom
  teacherBoard: u("photo-1544717305-2782549b5136"),           // professor / chalkboard
  studentDesk: u("photo-1517842645767-c639042777db"),        // notebook & desk
  childBook: u("photo-1503454537195-1dcabb73ffb9"),          // child holding a book

  // Family / legacy
  fatherChild: u("photo-1488521787991-ed7bbaae773c"),        // father reading with child
  candlelight: u("photo-1532012197267-da84d127e765"),        // intimate warm books

  // Cluj / Romania architectural
  clujRooftops: u("photo-1602002418082-a4443e081dd1"),       // historic European rooftops
  sfMihailCluj: u("photo-1678736680989-195226823176"),       // St. Michael's Church Cluj-Napoca + Matthias Corvinus statue
  childrenUniform: u("photo-1600792175842-4fa8ae4b36ba"),   // children in white school uniforms

  // Local photos (saved in /public)
  classroomEdictum: "/classroom.png",
  classroomEdictum2: "/classroom2.jpg",
  clujPanorama: "/cluj-panorama.jpg",
  cicluPrimarMare: "/ciclu-primar-mare.jpg",
};

export const IMG_ALT = {
  oxfordCourt: "Curte interioară de stil oxfordian, cu arcade din piatră și lumină naturală caldă",
  classicalColumns: "Coloane clasice grecești sub un cer luminos",
  cambridgeFacade: "Hol academic clasic, în lumină filtrată",
  archGate: "Arcadă clasică din piatră, cu lumină aurie de după-amiază",
  oldLibrary: "Bibliotecă veche cu rafturi de lemn lustruit, pline cu volume legate în piele",
  bookshelves: "Rânduri lungi de cărți clasice pe rafturi de lemn",
  openBook: "Carte deschisă pe un birou de lemn, în lumină caldă",
  manuscriptDesk: "Manuscrise vechi pe un birou academic",
  libraryWindow: "Sală de bibliotecă cu lumină naturală prin ferestre înalte",
  girlReading: "Fetiță citind cu atenție lângă o fereastră",
  childWriting: "Copil scriind, cu privirea concentrată",
  classroomQuiet: "Sală de clasă liniștită, cu lumină naturală",
  teacherBoard: "Profesor la catedră, în fața tablei, într-o sală de clasă clasică",
  studentDesk: "Caiet, carte și un creion pe un birou de lemn",
  childBook: "Copil ținând o carte clasică",
  fatherChild: "Tată citind împreună cu copilul său",
  candlelight: "Cărți și lumină caldă, atmosferă de studiu",
  clujRooftops: "Acoperișuri istorice europene, lumină de seară",
  childrenUniform: "Copii în uniforme școlare albe într-o sală de clasă",
  sfMihailCluj: "Biserica Sfântul Mihail din Cluj-Napoca cu statuia ecvestră a lui Matei Corvin",
  classroomEdictum: "Sală de clasă a unei școli clasice creștine — elevi în uniforme verzi, profesor la tablă albă",
  classroomEdictum2: "Sală de clasă a unei școli clasice creștine — elevi în uniforme, activitate de învățare",
  clujPanorama: "Panoramă Cluj-Napoca — case colorate sub cer senin și luminos",
};
