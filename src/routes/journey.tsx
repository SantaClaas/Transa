import { For, type JSX } from "solid-js";

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

export function Journey1() {
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
};
const TRAM_COLOR = "bg-[#9f3d53]";
function Connection2(properties: Connection2Properties): JSX.Element {
  return (
    <div
      data-type="connection"
      class="col-span-3 grid grid-cols-subgrid grid-rows-[auto_1fr_auto] rounded-extra-large pl-2"
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

      <div id="line" class="relative col-start-2 row-start-2 h-full w-8">
        <div class="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-light-outline" />
      </div>
      <time class="col-start-1 content-end pb-4 text-center text-label-lg text-light-on-surface-variant">
        {properties.time.duration}
      </time>
      <time
        datetime={properties.time.depart}
        class="col-start-1 content-start text-center"
      >
        {properties.time.depart}
      </time>
      <div id="line-head" class="relative col-start-2 size-8">
        <div class="absolute left-1/2 top-0 h-4 w-1 -translate-x-1/2 place-self-start bg-light-outline align-top"></div>
        <div class="absolute inset-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-light-outline"></div>
      </div>

      <div data-type="line-pill" class="bg-[#333]">
        Pill
      </div>
    </div>
  );
}

export default function Journey2() {
  return (
    <>
      <main class="grid h-dvh grid-cols-[auto_auto_1fr] grid-rows-[auto_1fr_auto] bg-light-surface">
        <div
          id="destination-station"
          class="col-span-3 grid grid-cols-subgrid content-center bg-light-surface-container pl-2"
        >
          <p class="col-start-3 content-center">Neumarkt, Köln</p>
        </div>

        <div
          id="connections"
          class="col-span-3 grid grid-cols-subgrid grid-rows-[1fr_auto_1fr]"
        >
          <Connection2
            time={{ arrive: "17:05", depart: "16:12", duration: "53min" }}
          />
          <div class="col-span-3 grid h-8 grid-cols-subgrid bg-light-surface-container pl-2">
            <time class="content-center text-center text-label-lg text-light-on-surface-variant">
              5min
            </time>
            <p class="col-start-3 h-8 content-center ">Hauptbahnhof, Bonn</p>
          </div>
          {/* <div id="connection-1" class="col-span-3 grid grid-cols-subgrid pl-2">
            <div id="times" class="grid grid-rows-[auto_1fr_auto] pt-1">
              <time class="text-center">16:07</time>
              <time class="content-end pb-4 text-center text-label-lg text-light-on-surface-variant">
                9min
              </time>
              <time datetime="15:58" class="content-center">
                15:58
              </time>
            </div>
            <div id="line" class="relative h-full w-8">
              <div class="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-light-outline" />
            </div>
          </div> */}
          <Connection2
            time={{ arrive: "16:07", depart: "15:58", duration: "9min" }}
          />
          <div></div>
        </div>

        <div
          id="start-station"
          class="col-span-3 grid grid-cols-subgrid content-center bg-light-surface-container pl-2"
        >
          <p id="start-station-name" class="col-start-3 content-center">
            Beuel Konrad-Adenauer-Platz, Bonn
          </p>
        </div>
      </main>
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
