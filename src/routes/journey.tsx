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
    <div class="flex w-full shrink-0 snap-x snap-mandatory snap-center flex-col-reverse overscroll-contain bg-light-primary/10 text-center">
      <div class="flex h-36 flex-col-reverse justify-between">
        <p>{label}</p>
        <p>{destination}</p>
      </div>
      <div class="flex snap-x snap-mandatory snap-always gap-4 overflow-x-auto overscroll-contain">
        <For each={connections}>{Connection}</For>
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <>
      <div class="row-span-2 flex w-full snap-x snap-mandatory snap-always gap-4 overflow-x-auto overscroll-contain bg-light-primary/10 p-4">
        <p>Test</p>
        <For each={connections}>{Connection}</For>
      </div>
      <p class="p-4 text-center">Start station</p>
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
