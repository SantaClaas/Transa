import { For, Show, createSignal, type JSX } from "solid-js";

/**
 * A recursive component building the tree of connections
 * @param {Connection} connection
 * @returns {JSX.Element}
 */
function Connection({
  label,
  destination,
  line,
  connections,
}: Connection): JSX.Element {
  return (
    <div
      data-connection
      class="flex w-screen  snap-x snap-mandatory snap-center flex-col-reverse overscroll-contain text-center"
    >
      <div class="flex h-36 flex-col-reverse justify-between">
        <p>{label}</p>
        <p>{destination}</p>
      </div>
      <div class="grid snap-x snap-mandatory snap-always grid-flow-col gap-4 overflow-x-auto overscroll-contain">
        <For each={connections}>{Connection}</For>
      </div>
    </div>
  );
}

function Journey1() {
  return (
    <>
      <div class="row-span-2 flex w-full snap-x snap-mandatory snap-always gap-4 overflow-x-auto overscroll-contain bg-light-primary/10 ">
        <p>Test</p>
        <For each={connections}>{Connection}</For>
      </div>
      <p class="p-4 text-center">Start station</p>
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
const TRAM_COLOR = "bg-[#9f3d53]";

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

function Journey2() {
  return (
    <>
      <main class="h-dvh content-end  bg-light-surface-container">
        <div id="destination-station" class="content-center pl-2">
          <p class="col-start-3 content-center py-2 text-title-md">
            Neumarkt, Köln
          </p>
        </div>

        <div id="row" class="overflow-y-sc flex w-screen">
          <div
            id="connections"
            class="col-span-3 flex w-screen flex-shrink-0 flex-col-reverse"
          >
            <Connection2
              time={{ arrive: "17:05", depart: "16:12", duration: "53min" }}
              line="STR 16"
              headsign="Niehl Sebastianstr., Köln"
            />
            <div class="flex gap-2 pl-2">
              <time class="content-center text-center text-label-lg text-light-on-surface-variant">
                5min
              </time>
              <p class="col-start-3 content-center py-2 text-title-md">
                Hauptbahnhof, Bonn
              </p>
            </div>

            <Connection2
              time={{ arrive: "16:07", depart: "15:58", duration: "9min" }}
              line="STR 62"
              headsign="Dottendorf Quiinusplatz, Bonn"
            />
          </div>
          <div
            id="connections"
            class="col-span-3 flex w-screen flex-shrink-0 flex-col-reverse"
          >
            <Connection2
              time={{ arrive: "17:05", depart: "16:12", duration: "53min" }}
              line="STR 16"
              headsign="Niehl Sebastianstr., Köln"
            />
            <div class="flex gap-2 pl-2">
              <time class="content-center text-center text-label-lg text-light-on-surface-variant">
                5min
              </time>
              <p class="col-start-3 content-center py-2 text-title-md">
                Hauptbahnhof, Bonn
              </p>
            </div>

            <Connection2
              time={{ arrive: "16:07", depart: "15:58", duration: "9min" }}
              line="STR 62"
              headsign="Dottendorf Quiinusplatz, Bonn"
            />
          </div>
        </div>

        <div id="start-station" class=" content-center pl-2">
          <p
            id="start-station-name"
            class="col-start-3 content-center py-2 text-title-md"
          >
            Beuel Konrad-Adenauer-Platz, Bonn
          </p>
        </div>
      </main>
    </>
  );
}

export default function Journeys() {
  const [toggle, setToggle] = createSignal(false);
  return (
    <>
      <button
        class="absolute right-0 top-0"
        onClick={() => setToggle((previous) => !previous)}
      >
        Toggle
      </button>
      <Show when={toggle()} fallback={<Journey1 />}>
        <Journey2 />
      </Show>
    </>
  );
}

type Line = {
  label: string;
  headsign: string;
};
type Connection = {
  label: string;
  destination: string;
  line: Line;
  connections: Connection[];
};

const connections: Connection[] = [
  {
    label: "Line/Train/Bus 1",
    destination: "Destination 1",
    line: {
      label: "Line 1",
      headsign: "Headsign 1",
    },
    connections: [
      {
        label: "Line/Train/Bus 1.1",
        destination: "Destination 1",
        line: {
          label: "Line 1",
          headsign: "Headsign 1",
        },
        connections: [
          {
            label: "Line/Train/Bus 1.1.1",
            destination: "Destination 1.1",
            line: {
              label: "Line 1.1",
              headsign: "Headsign 1.1",
            },
            connections: [],
          },
          {
            label: "Line/Train/Bus 1.1.2",
            destination: "Destination 1.1.2",
            line: {
              label: "Line 1.1.2",
              headsign: "Headsign 1.1.2",
            },
            connections: [
              {
                label: "Line/Train/Bus 1.1.2.1",
                destination: "Destination 1.1.2",
                line: {
                  label: "Line 1.1.2",
                  headsign: "Headsign 1.1.2",
                },
                connections: [],
              },
              {
                label: "Line/Train/Bus 1.1.2.2",
                destination: "Destination 1.1.2.2",
                line: {
                  label: "Line 1.1.2.2",
                  headsign: "Headsign 1.1.2.2",
                },
                connections: [],
              },
            ],
          },
        ],
      },
      {
        label: "Line/Train/Bus 1.2",
        destination: "Destination 1.2",
        line: {
          label: "Line 1.2",
          headsign: "Headsign 1.2",
        },
        connections: [],
      },
    ],
  },
  {
    label: "Line/Train/Bus 2",
    destination: "Destination 2",
    line: {
      label: "Line 2",
      headsign: "Headsign 2",
    },
    connections: [
      {
        label: "Line/Train/Bus 2.1",
        destination: "Destination 2.1",
        line: {
          label: "Line 2.1",
          headsign: "Headsign 2.1",
        },
        connections: [],
      },
      {
        label: "Line/Train/Bus 2.2",
        destination: "Destination 2.2",
        line: {
          label: "Line 2.2",
          headsign: "Headsign 2.2",
        },
        connections: [],
      },
    ],
  },
  {
    label: "Line/Train/Bus 3",
    destination: "Destination 3",
    line: {
      label: "Line 3",
      headsign: "Headsign 3",
    },
    connections: [
      {
        label: "Line/Train/Bus 3.1",
        destination: "Destination 3.1",
        line: {
          label: "Line 3.1",
          headsign: "Headsign 3.1",
        },
        connections: [],
      },
      {
        label: "Line/Train/Bus 3.2",
        destination: "Destination 3.2",
        line: {
          label: "Line 3.2",
          headsign: "Headsign 3.2",
        },
        connections: [],
      },
    ],
  },
];
