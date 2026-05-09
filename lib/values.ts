export type ValueIcon =
  | "scroll"
  | "hands"
  | "wheat"
  | "anchor"
  | "hourglass"
  | "chalice"
  | "dove"
  | "sun"
  | "shield"
  | "crown";

export type Value = {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  verse: { ref: string; text: string };
  icon: ValueIcon;
};

/**
 * Cele 10 Valori Fundamentale ale Școlii Edictum.
 * Sursă: documentul "CELE 10 VALORI FUNDAMENTALE ALE SCOLII EDICTUM —
 * Zece rădăcini pentru formarea inimii și minții după chipul lui Hristos."
 */
export const VALUES: Value[] = [
  {
    number: "01",
    title: "Adevărul",
    description:
      "Cuvântul lui Dumnezeu este temelia noastră — măsura după care învățăm să cunoaștem, să gândim, să vorbim și să judecăm.",
    verse: { ref: "Ioan 17:17", text: "Cuvântul Tău este adevărul." },
    icon: "scroll",
  },
  {
    number: "02",
    title: "Respectul",
    description:
      "În cinste, fiecare să dea întâietate altuia. Cinstim pe Dumnezeu, pe părinți, pe profesori și pe semeni — în smerenie și prețuire.",
    verse: { ref: "Romani 12:10", text: "În cinste, fiecare să dea întâietate altuia." },
    icon: "hands",
  },
  {
    number: "03",
    title: "Hărnicia",
    subtitle: "Sârguința",
    description:
      "Orice facem, facem din toată inima, ca pentru Domnul. Lucrul bun cere efort statornic și bucuria cu care îl dăruim.",
    verse: { ref: "Coloseni 3:23", text: "Orice faceți, să faceți din toată inima, ca pentru Domnul." },
    icon: "wheat",
  },
  {
    number: "04",
    title: "Stăpânirea de sine",
    subtitle: "Cumpătarea",
    description:
      "Mai prețios decât cuceritorul de cetăți este cel ce-și stăpânește propria inimă. Disciplinăm gândul, vorba și fapta spre slujire.",
    verse: {
      ref: "Proverbe 16:32",
      text: "Cine este stăpân pe sine prețuiește mai mult decât cine cucerește cetăți.",
    },
    icon: "anchor",
  },
  {
    number: "05",
    title: "Răbdarea",
    description:
      "Răbdarea își face desăvârșit lucrarea. Învățăm să așteptăm, să ducem la capăt și să rămânem credincioși până la sfârșit.",
    verse: { ref: "Iacov 1:4", text: "Răbdarea trebuie să-și facă desăvârșit lucrarea." },
    icon: "hourglass",
  },
  {
    number: "06",
    title: "Mulțumirea",
    description:
      "Evlavia însoțită de mulțumire este un mare câștig. Recunoaștem darurile lui Dumnezeu și ne ferim de nemulțumirea care otrăvește inima.",
    verse: { ref: "1 Timotei 6:6", text: "Evlavia însoțită de mulțumire este un mare câștig." },
    icon: "chalice",
  },
  {
    number: "07",
    title: "Bunătatea",
    description:
      "Suntem buni unii cu alții, miloși, gata să iertăm. Bunătatea credinciosului este oglinda bunătății lui Hristos.",
    verse: {
      ref: "Efeseni 4:32",
      text: "Fiți buni unii cu alții, miloși, iertați-vă unul pe altul.",
    },
    icon: "dove",
  },
  {
    number: "08",
    title: "Bucuria",
    description:
      '„Bucurați-vă întotdeauna." Bucuria în Dumnezeu este leacul inimii și puterea celor ce slujesc.',
    verse: {
      ref: "Filipeni 4:4",
      text: "Bucurați-vă întotdeauna; iarăși zic: bucurați-vă!",
    },
    icon: "sun",
  },
  {
    number: "09",
    title: "Curajul",
    description:
      '„Vegheați, fiți tari în credință, fiți oameni." Curajul creștin nu este lipsa de teamă — este teama de Dumnezeu mai mare decât teama de om.',
    verse: { ref: "1 Corinteni 16:13", text: "Vegheați, fiți tari în credință, fiți oameni, întăriți-vă." },
    icon: "shield",
  },
  {
    number: "10",
    title: "Gloria lui Dumnezeu",
    description:
      "Țelul ultim al educației Edictum. Din El, prin El și pentru El sunt toate. Tot ce facem — fie că mâncăm, fie că bem — facem spre slava Lui.",
    verse: { ref: "1 Corinteni 10:31", text: "Fie că mâncați, fie că beți, să faceți totul spre slava lui Dumnezeu." },
    icon: "crown",
  },
];
