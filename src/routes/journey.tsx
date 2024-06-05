import { For, type JSX } from "solid-js";

/**
 * A recursive component building the tree of connections
 * @param {Connection} connection
 * @returns {JSX.Element}
 */
function Connection({ label, connections }: Connection): JSX.Element {
  return (
    <div class="flex w-full  shrink-0 snap-x snap-mandatory snap-center flex-col-reverse overscroll-contain bg-light-primary/10 text-center">
      <p>{label}</p>
      <div class="flex snap-x snap-mandatory snap-always gap-4 overflow-x-auto overscroll-contain">
        <For each={connections}>{Connection}</For>
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <main class="row-span-2 flex snap-x snap-mandatory snap-always gap-4 overflow-x-auto overscroll-contain bg-light-primary/10 p-4">
      <For each={connections}>{Connection}</For>
    </main>
  );
}

type Connection = {
  label: string;
  connections: Connection[];
};

const connections: Connection[] = [
  {
    label: "Connection 1",
    connections: [
      {
        label: "Connection 1.1",
        connections: [
          {
            label: "Connection 1.1.1",
            connections: [],
          },
          {
            label: "Connection 1.1.2",
            connections: [
              {
                label: "Connection 1.1.2.1",
                connections: [],
              },
              {
                label: "Connection 1.1.2.2",
                connections: [],
              },
            ],
          },
        ],
      },
      {
        label: "Connection 1.2",
        connections: [],
      },
    ],
  },
  {
    label: "Connection 2",
    connections: [
      {
        label: "Connection 2.1",
        connections: [],
      },
      {
        label: "Connection 2.2",
        connections: [],
      },
    ],
  },
  {
    label: "Connection 3",
    connections: [
      {
        label: "Connection 3.1",
        connections: [],
      },
      {
        label: "Connection 3.2",
        connections: [],
      },
    ],
  },
];
