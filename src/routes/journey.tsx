import {
  Accessor,
  For,
  Match,
  Setter,
  Show,
  Switch,
  VoidProps,
  createEffect,
  createSignal,
  type JSX,
} from "solid-js";
import {
  Changes,
  Connection,
  Transport,
  Walk,
  connections,
  getTime,
} from "~/data";
import {
  CONNECTIONS_FROM_HAUPTBAHNHOF,
  CONNECTIONS_TO_HAUPTBAHNHOF,
} from "~/data2";

function TransportConnectionInterim({ connection }: { connection: Transport }) {
  return (
    <>
      <article
        data-connection
        class="grid h-56 grid-cols-[3rem_auto_1fr] grid-rows-[auto_1fr_auto] rounded-medium bg-light-surface p-2"
      >
        <time
          datetime={getTime(connection.time.arrive)}
          class="col-start-1 content-center text-center"
        >
          {getTime(connection.time.arrive)}
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
          datetime={getTime(connection.time.depart)}
          class="col-start-1 content-center text-center"
        >
          {getTime(connection.time.depart)}
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
function TransportConnection({
  connection,
}: {
  connection: Transport & Changes;
}): JSX.Element {
  return (
    <>
      <article
        data-connection
        class="grid h-56 grid-cols-[3rem_auto_1fr] grid-rows-[auto_1fr_auto] rounded-large bg-light-surface p-2"
      >
        <time
          datetime={getTime(connection.time.arrive)}
          class="col-start-1 content-center text-center"
        >
          {getTime(connection.time.arrive)}
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
          datetime={getTime(connection.time.depart)}
          class="col-start-1 content-center text-center"
        >
          {getTime(connection.time.depart)}
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
      {/* <p class="flex content-center items-center px-2">
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
      </p> */}
      {/* Hide destination if it is the last connection because destination will already be shown at the top */}
      <Show when={connection.changes !== undefined}>
        <p class="flex content-center items-center p-2 pl-20 text-title-lg">
          {connection.destination}
        </p>
      </Show>
    </>
  );
}

function WalkConnection({ connection }: { connection: Walk }): JSX.Element {
  return (
    <>
      <p class="flex content-center items-center px-2">
        {/* Setting pl-20 to align with grid. TODO find better solution */}
        <span class="flex-grow py-2 pl-20 text-title-lg">
          {connection.destination}
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

function Connection3(connection: Connection): JSX.Element {
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
          {/* TODO remove grid-flow-col */}
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
            class="content-center py-2 pl-[5rem] text-title-lg"
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
        {/* TODO find better solution than pl-[5rem] to align with grid */}
        <p
          data-start-station
          class="content-center py-2 pl-[5rem] text-title-lg"
        >
          Beuel Konrad-Adenauer-Platz, Bonn
        </p>
        {/* overscroll-x-contain: we need to be able to scroll on the y-axis */}
        {/* TODO remove grid-flow-col */}
        <div
          data-row
          class="flex snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto overflow-y-scroll overscroll-x-contain *:flex-none"
        >
          <For each={connections}>{Connection3}</For>
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

function useObserver(callback: IntersectionObserverCallback) {
  let observer: IntersectionObserver | undefined;

  function setScroller(element: Element) {
    observer = new IntersectionObserver(callback, {
      root: element,
      // This ensures that the element is only triggered once it is past the snap point
      threshold: 0.5,
    });
  }

  function observe(element: Element) {
    observer?.observe(element);
  }

  //TODO on cleanup

  return {
    setScroller,
    observe,
  };
}

// Temporary to give rows a different color
let debugOnlyRowIndex = 0;

type RowProperties = {
  scrollLeft?: Accessor<number>;
  setScrollLeft?: Setter<number>;
};

function Row({ scrollLeft, setScrollLeft }: VoidProps<RowProperties>) {
  const debugIndex = debugOnlyRowIndex;
  debugOnlyRowIndex++;
  const { setScroller, observe } = useObserver(() => {
    throw new Error("todo");
  });

  const [row, setRow] = createSignal<HTMLDivElement | undefined>();

  // Set scroller to row when row is set
  createEffect(() => {
    //TODO cleanup
    const value = row();
    if (value === undefined) return;
    setScroller(value);
  });

  if (scrollLeft !== undefined) {
    // Update row scrollLeft when scrollLeft changes
    createEffect(() => {
      const value = scrollLeft();
      const scroller = row();
      if (value === undefined || scroller === undefined) return;

      console.debug("Before", scroller.scrollLeft, value);
      scroller.scrollLeft = value;
    });
  }

  function handleScroll(event: Event) {
    if (!(event.target instanceof HTMLDivElement))
      throw new Error("Expected div");

    if (setScrollLeft === undefined) return;

    // console.debug("Scroll", event.target.scrollLeft);
    setScrollLeft(event.target.scrollLeft);
  }

  return (
    <div
      ref={setScroller}
      onScroll={setScrollLeft ? handleScroll : undefined}
      data-row
      class="flex w-screen snap-x snap-mandatory gap-4 overflow-y-scroll overscroll-x-contain *:flex-none"
    >
      <For each={Array(10)}>
        {(_, index) => (
          <div
            ref={setRow}
            id={`element-${index()}`}
            class="h-56 w-screen snap-center snap-always content-center text-center text-white"
            classList={{
              "bg-orange-500": debugOnlyRowIndex === 1,
              "bg-green-500": debugOnlyRowIndex === 2,
            }}
          >
            Connection {index()}
          </div>
        )}
      </For>
    </div>
  );
}

export default function Journeys() {
  const [isWalkSnapped, setIsWalkSnapped] = createSignal(false);

  // To not trigger animation on initial render
  let dirtyFlag = false;
  const wasWalkSnapped = () => {
    if (dirtyFlag) {
      dirtyFlag = false;
      return true;
    }

    return false;
  };
  createEffect(() => {
    if (isWalkSnapped()) {
      dirtyFlag = true;
    }
  });

  function observeCallback([first]: IntersectionObserverEntry[]) {
    //TODO avoid initial call with all elements
    const target = first.target;

    const isWalkFocused =
      target instanceof HTMLElement &&
      first.isIntersecting &&
      target.dataset.type === "walk";

    console.debug("Intersection", isWalkFocused);
    setIsWalkSnapped(isWalkFocused);
  }
  const { setScroller, observe } = useObserver(observeCallback);

  const [row1, setRow1] = createSignal<HTMLDivElement | undefined>();

  const [isScrolling, setIsScrolling] = createSignal(false);
  function handleScroll({ target }: { target: Element }) {
    // This should not trigger an update even if we set it to true rapidly again and again
    setIsScrolling(true);

    const otherRow = row1();
    if (otherRow === undefined) return;

    otherRow.scrollLeft = target.scrollLeft;
  }

  return (
    <main class="flex h-dvh flex-col-reverse bg-light-surface-container">
      <p data-start-station class="content-center py-2 pl-[5rem] text-title-lg">
        Beuel Konrad-Adenauer-Platz, Bonn
      </p>
      <div
        onScroll={handleScroll}
        class="grid snap-x snap-mandatory grid-flow-col gap-4 overflow-y-scroll rounded-large"
        onScrollEnd={() => setIsScrolling(false)}
      >
        {/* <For each={Array(10)}>
          {(_, index) => (
            <div
              id={`element-${index}`}
              class="h-56 w-screen snap-center snap-always bg-green-500"
            >
              Content {index()}
            </div>
          )}
        </For> */}
        <For each={CONNECTIONS_TO_HAUPTBAHNHOF}>
          {(connection) => (
            <div
              data-type={connection.type}
              class="h-56 w-screen snap-center snap-always"
            >
              <Switch>
                <Match when={connection.type === "transport"}>
                  <TransportConnectionInterim
                    connection={connection as Transport}
                  />
                </Match>
                <Match when={connection.type === "walk"}>
                  <WalkConnection connection={connection as Walk} />
                </Match>
              </Switch>
            </div>
          )}
        </For>
      </div>
      <p class="flex content-center items-center p-2 pl-20 text-title-lg">
        Hauptbahnhof, Bonn
      </p>
      {/* Can't detect intersection/snap with CSS. Therefore we need to use JS */}
      <div
        ref={(element) => {
          setRow1(element);
          setScroller(element);
        }}
        class="grid snap-mandatory grid-flow-col content-end gap-4 overflow-y-scroll"
        classList={{
          "snap-x": !isScrolling(),
          "animate-grow-walk": !isWalkSnapped() && wasWalkSnapped(),
          "h-24 animate-shrink-walk": isWalkSnapped(),
        }}
      >
        {/* <For each={Array(10)}>
          {(_, index) => (
            <div
              id={`element-${index}`}
              class="h-56 w-screen snap-center snap-always bg-orange-500"
            >
              Content {index()}
            </div>
          )}
        </For> */}
        <For each={CONNECTIONS_FROM_HAUPTBAHNHOF}>
          {(connection) => (
            <div
              ref={observe}
              data-type={connection.type}
              class="h-56 w-screen snap-center snap-always content-end self-end data-[type=walk]:h-24"
            >
              <Switch>
                <Match when={connection.type === "transport"}>
                  <TransportConnectionInterim
                    connection={connection as Transport}
                  />
                </Match>
                <Match when={connection.type === "walk"}>
                  <WalkConnection connection={connection as Walk} />
                </Match>
              </Switch>
            </div>
          )}
        </For>
      </div>
    </main>
  );
}
