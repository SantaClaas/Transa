import { For, Match, Show, Switch, createSignal, type JSX } from "solid-js";

function TransportConnection({
  connection,
}: {
  connection: Transport;
}): JSX.Element {
  return (
    <>
      <p class="flex content-center items-center px-2">
        {/* Setting w-[3rem] and pl-8 to align with grid. TODO find better solution */}
        <Show when={connection.time.change !== undefined}>
          <time
            datetime={connection.time.change}
            class="block w-12 text-center text-label-lg text-light-on-surface-variant"
          >
            {connection.time.change}
          </time>
        </Show>
        <span
          class="flex-grow py-2 text-title-lg"
          classList={{
            [connection.time.change === undefined ? "pl-20" : "pl-8"]: true,
          }}
        >
          {connection.start}
        </span>

        <Show when={connection.platform !== undefined}>
          <span class="justify-self-end">Pl. {connection.platform}</span>
        </Show>
      </p>
      <article
        data-connection
        class="grid h-56 grid-cols-[3rem_auto_1fr] grid-rows-[auto_1fr_auto] rounded-large bg-light-surface p-2"
      >
        <time
          datetime={connection.time.arrive}
          class="col-start-1 content-center text-center"
        >
          {connection.time.arrive}
        </time>
        <div id="line-head" class="relative col-start-2 row-start-1 size-8">
          <div class="absolute bottom-0 left-1/2 h-4 w-1 -translate-x-1/2 place-self-start bg-light-outline align-top"></div>
          <div class="absolute inset-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-light-outline"></div>
        </div>
        <time class="col-start-1 content-end pb-4 text-center text-label-lg text-light-on-surface-variant">
          {connection.time.duration}
        </time>
        <div id="line" class="relative col-start-2 row-start-2 h-full w-8">
          <div class="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-light-outline" />
        </div>
        <p class="col-start-3 row-start-2 content-end pb-4">
          to {connection.headsign}
        </p>
        <time
          datetime={connection.time.depart}
          class="col-start-1 content-center text-center"
        >
          {connection.time.depart}
        </time>
        <div id="line-head" class="relative col-start-2 size-8">
          <div class="absolute left-1/2 top-0 h-4 w-1 -translate-x-1/2 place-self-start bg-light-outline align-top"></div>
          <div class="absolute inset-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-light-outline"></div>
        </div>
        <div
          data-line-pill
          class="flex items-center gap-2 justify-self-start  rounded-full px-3 py-1 text-light-inverse-on-surface"
          classList={{
            [connection.line.color]: true,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="currentColor"
          >
            <Switch>
              <Match when={connection.line.type === "STR"}>
                <path d="M160-260v-380q0-97 85-127t195-33l30-60H280v-60h400v60H550l-30 60q119 3 199.5 32.5T800-640v380q0 59-40.5 99.5T660-120l60 60v20h-80l-80-80H400l-80 80h-80v-20l60-60q-59 0-99.5-40.5T160-260Zm500-140H240h480-60ZM480-240q25 0 42.5-17.5T540-300q0-25-17.5-42.5T480-360q-25 0-42.5 17.5T420-300q0 25 17.5 42.5T480-240Zm-2-440h228-450 222ZM240-480h480v-120H240v120Zm60 280h360q26 0 43-17t17-43v-140H240v140q0 26 17 43t43 17Zm178-520q-134 0-172 14.5T256-680h450q-12-14-52-27t-176-13Z" />
              </Match>
              <Match when={connection.line.type === "Bus"}>
                <path d="M240-120q-17 0-28.5-11.5T200-160v-82q-18-20-29-44.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 29-11 53.5T760-242v82q0 17-11.5 28.5T720-120h-40q-17 0-28.5-11.5T640-160v-40H320v40q0 17-11.5 28.5T280-120h-40Zm242-640h224-448 224Zm158 280H240h480-80Zm-400-80h480v-120H240v120Zm100 240q25 0 42.5-17.5T400-380q0-25-17.5-42.5T340-440q-25 0-42.5 17.5T280-380q0 25 17.5 42.5T340-320Zm280 0q25 0 42.5-17.5T680-380q0-25-17.5-42.5T620-440q-25 0-42.5 17.5T560-380q0 25 17.5 42.5T620-320ZM258-760h448q-15-17-64.5-28.5T482-800q-107 0-156.5 12.5T258-760Zm62 480h320q33 0 56.5-23.5T720-360v-120H240v120q0 33 23.5 56.5T320-280Z" />
              </Match>
              <Match
                when={
                  connection.line.type === "RE" || connection.line.type === "RB"
                }
              >
                <path d="M240-120v-40l60-40q-59 0-99.5-40.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 59-40.5 99.5T660-200l60 40v40H240Zm0-440h480v-120H240v120Zm420 80H240h480-60ZM480-320q25 0 42.5-17.5T540-380q0-25-17.5-42.5T480-440q-25 0-42.5 17.5T420-380q0 25 17.5 42.5T480-320Zm-180 40h360q26 0 43-17t17-43v-140H240v140q0 26 17 43t43 17Zm180-520q-86 0-142.5 10T258-760h448q-18-20-74.5-30T480-800Zm0 40h226-448 222Z" />
              </Match>
            </Switch>
          </svg>
          <span class="text-label-lg font-bold">
            {connection.line.type} {connection.line.number}
          </span>
        </div>
      </article>
    </>
  );
}

function WalkConnection({ connection }: { connection: Walk }): JSX.Element {
  return (
    <>
      <p class="flex content-center items-center px-2">
        {/* Setting pl-20 to align with grid. TODO find better solution */}
        <span class="flex-grow py-2 pl-20 text-title-lg">
          {connection.start}
        </span>
      </p>
      <article
        data-connection
        class="grid grid-cols-[3rem_2rem_1fr] bg-light-surface-container-high px-2 py-1"
      >
        <time class="content-center text-center text-label-lg text-light-on-surface-variant">
          {connection.timeAvailable}
        </time>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="currentColor"
          class="place-self-center"
        >
          <path d="m280-40 112-564-72 28v136h-80v-188l202-86q14-6 29.5-7t29.5 4q14 5 26.5 14t20.5 23l40 64q26 42 70.5 69T760-520v80q-70 0-125-29t-94-74l-25 123 84 80v300h-80v-260l-84-64-72 324h-84Zm260-700q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z" />
        </svg>
        <p class="flex items-center">
          <span>
            {connection.distance} walk (ca. {connection.time})
          </span>
        </p>
      </article>
    </>
  );
}

function Connection3(connection: Connection2): JSX.Element {
  return (
    <div class="flex w-screen flex-shrink-0 snap-center snap-always flex-col-reverse overflow-y-scroll *:flex-none">
      {/* TODO make this aligned through grid to area below */}
      <Switch>
        <Match when={connection.type === "transport"}>
          <TransportConnection connection={connection as Transport} />
        </Match>
        <Match when={connection.type === "walk"}>
          <WalkConnection connection={connection as Walk} />
        </Match>
      </Switch>

      <Switch>
        <Match when={connection.changes !== undefined}>
          <div
            data-row
            class="flex snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto overscroll-x-contain"
          >
            <For each={connection.changes}>{Connection3}</For>
          </div>
        </Match>
        <Match
          when={
            "destination" in connection && connection.destination !== undefined
          }
        >
          {/* TODO find better solution than pl-[5rem] to align with grid */}
          <p
            data-destination-station
            class="content-center py-2 pl-[5rem] text-title-md"
          >
            Neumarkt, Köln
          </p>
        </Match>
      </Switch>
    </div>
  );
}

function Journey1() {
  return (
    <>
      {/* flex-none: diasable elements shrinking to fit the flex container */}
      <div class="flex h-dvh flex-col-reverse overflow-y-scroll bg-light-surface-container *:flex-none">
        {/* overscroll-x-contain: we need to be able to scroll on the y-axis */}
        <div
          data-row
          class="flex snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto overflow-y-scroll overscroll-x-contain *:flex-none"
        >
          <For each={connections2}>{Connection3}</For>
        </div>

      </div>
    </>
  );
}
type Connection2Properties = {
  time: {
    arrive: string;
    depart: string;
    duration: string;
  };
  line: string;
  headsign: string;
};

function Connection2(properties: Connection2Properties): JSX.Element {
  return (
    <article
      data-type="connection"
      class="col-span-3 grid h-56 grid-cols-[auto_auto_1fr] grid-rows-[auto_1fr_auto] rounded-large bg-light-surface pb-2 pl-2"
    >
      <time
        datetime={properties.time.arrive}
        class="col-start-1 content-center text-center"
      >
        {properties.time.arrive}
      </time>
      <div id="line-head" class="relative col-start-2 row-start-1 size-8">
        <div class="absolute bottom-0 left-1/2 h-4 w-1 -translate-x-1/2 place-self-start bg-light-outline align-top"></div>
        <div class="absolute inset-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-light-outline"></div>
      </div>
      <time class="col-start-1 content-end pb-4 text-center text-label-lg text-light-on-surface-variant">
        {properties.time.duration}
      </time>
      <div id="line" class="relative col-start-2 row-start-2 h-full w-8">
        <div class="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-light-outline" />
      </div>
      <p class="col-start-3 row-start-2 content-end pb-4">
        to {properties.headsign}
      </p>

      <time
        datetime={properties.time.depart}
        class="col-start-1 content-center text-center"
      >
        {properties.time.depart}
      </time>
      <div id="line-head" class="relative col-start-2 size-8">
        <div class="absolute left-1/2 top-0 h-4 w-1 -translate-x-1/2 place-self-start bg-light-outline align-top"></div>
        <div class="absolute inset-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-light-outline"></div>
      </div>
      <div
        data-type="line-pill"
        class="flex items-center gap-2 justify-self-start  rounded-full bg-[#9f3d53] px-3 py-1 text-light-inverse-on-surface"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="currentColor"
        >
          <path d="M160-260v-380q0-97 85-127t195-33l30-60H280v-60h400v60H550l-30 60q119 3 199.5 32.5T800-640v380q0 59-40.5 99.5T660-120l60 60v20h-80l-80-80H400l-80 80h-80v-20l60-60q-59 0-99.5-40.5T160-260Zm500-140H240h480-60ZM480-240q25 0 42.5-17.5T540-300q0-25-17.5-42.5T480-360q-25 0-42.5 17.5T420-300q0 25 17.5 42.5T480-240Zm-2-440h228-450 222ZM240-480h480v-120H240v120Zm60 280h360q26 0 43-17t17-43v-140H240v140q0 26 17 43t43 17Zm178-520q-134 0-172 14.5T256-680h450q-12-14-52-27t-176-13Z" />
        </svg>
        <span class="text-label-lg font-bold">{properties.line}</span>
      </div>
    </article>
  );
}

export default function Journeys() {
  return (
    <>
      <Journey1 />
    </>
  );
}

type Line2 = {
  type: "STR" | "Bus" | "RE" | "RB";
  color: string;
  number: string;
};
type Changes = {
  /** Optional because this could be the last connection and destination is set. */
  changes?: Connection2[];
};
type Transport = {
  type: "transport";
  /** Start and at the same time destination of the parent connection before this if this is not the first connection */
  start: string;
  line: Line2;
  headsign: string;
  /** Only set if this is the last connection/leaf in the connection tree. If this is the last connection, then changes should not exist */
  destination?: string;
  time: {
    /** Time to change from the connection before this (parent connection). Optional because this could be the first connection */
    change?: string;
    arrive: string;
    depart: string;
    duration: string;
    delay?: {
      arrive: string;
      depart: string;
    };
  };
  platform?: string;
};

type Walk = {
  type: "walk";
  timeAvailable: string;
  distance: string;
  time: string;
  start: string;

  /** Optional because this could be the last connection and destination is set. */
  changes?: Connection2[];
};
type Connection2 = (Transport | Walk) & Changes;

const WALK_BONN_HBF: Walk = {
  type: "walk",
  timeAvailable: "8min",
  distance: "84m",
  time: "6min",
  start: "Hauptbahnhof, Bonn",
};

const WALK_BARBAROSSAPLATZ: Walk = {
  type: "walk",
  timeAvailable: "9min",
  distance: "334m",
  time: "8min",
  start: "Hauptbahnhof, Bonn",
};

const RE_WESEL_1628: Connection2 = {
  type: "transport",
  start: "Bonn Hbf",
  line: {
    type: "RE",
    color: "bg-[#7C818B]",
    number: "5 (28524)",
  },
  headsign: "Wesel",
  time: {
    arrive: "16:21",
    depart: "16:04",
    duration: "17min",
    delay: {
      arrive: "16:45",
      depart: "16:28",
    },
  },
  platform: "1",
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
            arrive: "16:57",
            depart: "16:54",
            duration: "3min",
            delay: {
              arrive: "16:57",
              depart: "16:54",
            },
          },
        },
      ],
    },
  ],
};

const STR_NIEHL_1622: Connection2 = {
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
    arrive: "17:15",
    depart: "16:22",
    duration: "53min",
    delay: {
      arrive: "16:22",
      depart: "17:15",
    },
  },
};

const RB_MESSE_1633: Connection2 = {
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
    arrive: "16:53",
    depart: "16:33",
    duration: "20min",
    delay: {
      arrive: "16:54",
      depart: "16:34",
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
            arrive: "17:05",
            depart: "17:02",
            duration: "3min",
            delay: {
              arrive: "17:05",
              depart: "17:02",
            },
          },
        },
      ],
    },
  ],
};

function withChange(connection: Transport, change: string): Connection2 {
  return {
    ...connection,
    time: {
      ...connection.time,
      change,
    },
  };
}

const connections2: Connection2[] = [
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
      arrive: "16:07",
      depart: "15:58",
      duration: "9min",
    },
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
          arrive: "17:05",
          depart: "16:12",
          duration: "53min",
          delay: {
            arrive: "16:12",
            depart: "17:05",
          },
        },
      },
      withChange(STR_NIEHL_1622, "15min"),
      withChange(RE_WESEL_1628, "21min"),
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
    time: {
      arrive: "16:17",
      depart: "16:08",
      duration: "9min",
      delay: {
        arrive: "16:08",
        depart: "16:17",
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
    time: {
      arrive: "16:15",
      depart: "16:05",
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
    time: {
      arrive: "16:20",
      depart: "16:09",
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
    time: {
      arrive: "16:27",
      depart: "16:18",
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
    time: {
      arrive: "16:23",
      depart: "16:13",
      duration: "10min",
      delay: {
        arrive: "16:28",
        depart: "16:18",
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
