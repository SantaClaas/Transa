export type Line = {
  type: "STR" | "Bus" | "RE" | "RB";
  color: string;
  number: string;
};
export type Changes = {
  /** Optional because this could be the last connection and destination is set. */
  changes?: Connection[];
};

type Time = {
  label: string;
  time: Date;
};

export function getTime(time: Time): string {
  if (typeof time === "string") return time;
  return time.label;
}

export type Transport = {
  type: "transport";
  /** Start and at the same time destination of the parent connection before this if this is not the first connection */
  start: string;
  line: Line;
  headsign: string;
  /** Only set if this is the last connection/leaf in the connection tree. If this is the last connection, then changes should not exist */
  destination: string;
  time: {
    /** Time to change from the connection before this (parent connection). Optional because this could be the first connection */
    change?: string;
    arrive: Time;
    depart: Time;
    duration: string;
    delay?: {
      arrive: Time;
      depart: Time;
    };
  };
  platform?: string;
};

export type Walk = {
  type: "walk";
  timeAvailable: string;
  distance: string;
  time: string;
  start: string;
  destination: string;
};
export type Connection = (Transport | Walk) & Changes;

export const WALK_BONN_HBF: Walk = {
  type: "walk",
  timeAvailable: "8min",
  distance: "84m",
  time: "6min",
  start: "Hauptbahnhof, Bonn",
  destination: "Bonn Hbf",
};

export const WALK_BARBAROSSAPLATZ: Walk = {
  type: "walk",
  timeAvailable: "9min",
  distance: "334m",
  time: "8min",
  start: "Köln Süd",
  destination: "Barbarossaplatz, Köln",
};

export function createTime(hour: number, minute: number): Time {
  const date = new Date(0, 0, 0, hour, minute);
  return {
    label: date.toLocaleTimeString(undefined, {
      hourCycle: "h23",
      timeStyle: "short",
    }),
    time: date,
  };
}
export const RE_WESEL_1628: Connection = {
  type: "transport",
  start: "Bonn Hbf",
  line: {
    type: "RE",
    color: "bg-[#7C818B]",
    number: "5 (28524)",
  },
  headsign: "Wesel",
  time: {
    // arrive: "16:21",
    arrive: createTime(16, 21),
    depart: createTime(16, 4),
    // depart: "16:04",
    duration: "17min",
    delay: {
      //   arrive: "16:45",
      arrive: createTime(16, 45),
      //   depart: "16:28",
      depart: createTime(16, 28),
    },
  },
  platform: "1",
  destination: "Köln Süd",
  changes: [
    {
      ...WALK_BARBAROSSAPLATZ,
      timeAvailable: "9min",
      changes: [
        {
          type: "transport",
          start: "Barbarossaplatz, Köln",
          line: {
            type: "STR",
            color: "bg-[#9f3d53]",
            number: "18",
          },
          headsign: "Riehl Slabystr., Köln",
          destination: "Neumarkt, Köln",
          time: {
            // arrive: "16:57",
            arrive: createTime(16, 57),
            // depart: "16:54",
            depart: createTime(16, 54),
            duration: "3min",
            delay: {
              //   arrive: "16:57",
              arrive: createTime(16, 57),
              //   depart: "16:54",
              depart: createTime(16, 54),
            },
          },
        },
      ],
    },
  ],
};

export const STR_NIEHL_1622: Connection = {
  type: "transport",
  start: "Hauptbahnhof, Bonn",
  // line: "STR 16",
  line: {
    type: "STR",
    color: "bg-[#9f3d53]",
    number: "16",
  },
  headsign: "Niehl Sebastianstr., Köln",
  destination: "Neumarkt, Köln",
  time: {
    // arrive: "17:15",
    arrive: createTime(17, 15),
    // depart: "16:22",
    depart: createTime(16, 22),
    duration: "53min",
    delay: {
      //   arrive: "16:22",
      arrive: createTime(16, 22),
      //   depart: "17:15",
      depart: createTime(17, 15),
    },
  },
};

export const RB_MESSE_1633: Connection = {
  type: "transport",
  start: "Bonn Hbf",
  line: {
    type: "RB",
    color: "bg-[#7C818B]",
    number: "26 (25430)",
  },
  headsign: "Köln Messe/Deutz",
  destination: "Köln Süd",
  time: {
    // arrive: "16:53",
    arrive: createTime(16, 53),
    // depart: "16:33",
    depart: createTime(16, 33),
    duration: "20min",
    delay: {
      //   arrive: "16:54",
      arrive: createTime(16, 54),
      //   depart: "16:34",
      depart: createTime(16, 34),
    },
  },
  changes: [
    {
      ...WALK_BARBAROSSAPLATZ,
      timeAvailable: "8min",
      changes: [
        {
          type: "transport",
          start: "Barbarossaplatz, Köln",
          line: {
            type: "STR",
            color: "bg-[#9f3d53]",
            number: "16",
          },
          headsign: "Niehl Sebastianstr., Köln",
          destination: "Neumarkt, Köln",
          time: {
            // arrive: "17:05",
            arrive: createTime(17, 5),
            // depart: "17:02",
            depart: createTime(17, 2),
            duration: "3min",
            delay: {
              //   arrive: "17:05",
              arrive: createTime(17, 5),
              //   depart: "17:02",
              depart: createTime(17, 2),
            },
          },
        },
      ],
    },
  ],
};

export function withChange(
  connection: Transport,
  change: string | undefined,
): Connection {
  return {
    ...connection,
    time: {
      ...connection.time,
      change,
    },
  };
}

export const connections: Connection[] = [
  {
    type: "transport",
    start: "Beuel Konrad-Adenauer-Platz, Bonn",
    // line: "STR 62",
    line: {
      type: "STR",
      color: "bg-[#9f3d53]",
      number: "62",
    },
    headsign: "Dottendorf Quirinusplatz, Bonn",
    time: {
      //   arrive: "16:07",
      arrive: createTime(16, 7),
      //   depart: "15:58",
      depart: createTime(15, 58),
      duration: "9min",
    },
    destination: "Hauptbahnhof, Bonn",
    changes: [
      {
        type: "transport",
        start: "Hauptbahnhof, Bonn",
        // line: "STR 16",
        line: {
          type: "STR",
          color: "bg-[#9f3d53]",
          number: "16",
        },
        headsign: "Niehl Sebastianstr., Köln",
        destination: "Neumarkt, Köln",
        time: {
          change: "5min",
          //   arrive: "17:05",
          arrive: createTime(17, 5),
          //   depart: "16:12",
          depart: createTime(16, 12),
          duration: "53min",
          delay: {
            // arrive: "16:12",
            arrive: createTime(16, 12),
            // depart: "17:05",
            depart: createTime(17, 5),
          },
        },
      },
      withChange(STR_NIEHL_1622, "15min"),
      {
        ...WALK_BONN_HBF,
        timeAvailable: "21min",
        changes: [withChange(RE_WESEL_1628, undefined)],
      },
    ],
  },
  {
    type: "transport",
    start: "Beuel Konrad-Adenauer-Platz, Bonn",
    // line: "STR 62",
    line: {
      type: "STR",
      color: "bg-[#9f3d53]",
      number: "62",
    },
    headsign: "Dottendorf Quirinusplatz, Bonn",
    destination: "Hauptbahnhof, Bonn",
    time: {
      //   arrive: "16:17",
      arrive: createTime(16, 17),
      //   depart: "16:08",
      depart: createTime(16, 8),
      duration: "9min",
      delay: {
        // arrive: "16:08",
        arrive: createTime(16, 8),
        // depart: "16:17",
        depart: createTime(16, 17),
      },
    },
    changes: [
      withChange(STR_NIEHL_1622, "5min"),
      withChange(RE_WESEL_1628, "9min"),
    ],
  },
  {
    type: "transport",
    start: "Beuel Konrad-Adenauer-Platz, Bonn",
    line: {
      type: "Bus",
      color: "bg-[#76408C]",
      number: "117",
    },
    headsign: "Hauptbahnhof, Bonn",
    destination: "Hauptbahnhof, Bonn",
    time: {
      //   arrive: "16:15",
      arrive: createTime(16, 15),
      //   depart: "16:05",
      depart: createTime(16, 5),
      duration: "10min",
    },
    changes: [
      withChange(STR_NIEHL_1622, "4min"),
      withChange(RE_WESEL_1628, "13min"),
    ],
  },

  // Bus -> Walk -> RE
  {
    type: "transport",
    start: "Beuel Konrad-Adenauer-Platz, Bonn",
    line: {
      type: "Bus",
      color: "bg-[#76408C]",
      number: "603",
    },
    headsign: "Hauptbahnhof, Bonn",
    destination: "Hauptbahnhof, Bonn",
    time: {
      //   arrive: "16:20",
      arrive: createTime(16, 20),
      //   depart: "16:09",
      depart: createTime(16, 9),
      duration: "10min",
    },
    changes: [
      {
        ...WALK_BONN_HBF,
        timeAvailable: "8min",
        changes: [RE_WESEL_1628],
      },
    ],
  },
  {
    type: "transport",
    start: "Beuel Konrad-Adenauer-Platz, Bonn",
    line: {
      type: "STR",
      color: "bg-[#9f3d53]",
      number: "62",
    },
    headsign: "Dottendorf Quirinusplatz, Bonn",
    destination: "Hauptbahnhof, Bonn",
    time: {
      //   arrive: "16:27",
      arrive: createTime(16, 27),
      //   depart: "16:18",
      depart: createTime(16, 18),
      duration: "9min",
    },
    changes: [
      {
        ...WALK_BONN_HBF,
        timeAvailable: "7min",
        changes: [RB_MESSE_1633],
      },
    ],
  },
  // 640 -> RB 26
  {
    type: "transport",
    start: "Beuel Konrad-Adenauer-Platz, Bonn",
    line: {
      type: "Bus",
      color: "bg-[#76408C]",
      number: "640",
    },
    headsign: "Hauptbahnhof, Bonn",
    destination: "Hauptbahnhof, Bonn",
    time: {
      //   arrive: "16:23",
      arrive: createTime(16, 23),
      //   depart: "16:13",
      depart: createTime(16, 13),
      duration: "10min",
      delay: {
        // arrive: "16:28",
        arrive: createTime(16, 28),
        // depart: "16:18",
        depart: createTime(16, 18),
      },
    },
    changes: [
      {
        ...WALK_BONN_HBF,
        timeAvailable: "6min",
        changes: [RB_MESSE_1633],
      },
    ],
  },
];
