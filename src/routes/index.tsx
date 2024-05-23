import { For, Show, createSignal } from "solid-js";
import { clientOnly } from "@solidjs/start";
import { isServer } from "solid-js/web";

// Coordinates Konrad-Adenauer-Platz 50.7392935636551, 7.118113222838722
// curl -X 'GET' \
// 'https://v6.db.transport.rest/locations/nearby?results=8&stops=true&poi=false&linesOfStops=false&language=en&latitude=0&longitude=0' \
// -H 'accept: application/json'

const data = [
  {
    name: "Konrad-Adenauer-Platz",
    time: "<1min",
    distance: "<10m",
  },
  {
    name: "Beuel-Rathaus",
    time: "5min",
    distance: "350m",
  },
  {
    name: "Bonn Hermannstr./Konrad-Adenauer-Platz",
    time: "9min",
    distance: "650m",
  },
  {
    name: "Bonn Rheindorfer Str.",
    time: "5min",
    distance: "400m",
  },
  {
    name: "Bonn Goetheallee",
    time: "10min",
    distance: "650m",
  },
  {
    name: "Bonn Beuel Hallenbad",
    time: "11min",
    distance: "750m",
  },
  {
    name: "Doktor-Weis-Platz",
    time: "9min",
    distance: "600m",
  },
  {
    name: "Bonn Obere Wilhelmstr.",
    time: "10min",
    distance: "650m",
  },
  {
    name: "Beueler Bahnhofsplatz",
    time: "10min",
    distance: "700m",
  },
  {
    name: "Bonn Beuel Bf",
    time: "13min",
    distance: "900m",
  },
  {
    name: "I need",
    time: "<1min",
    distance: "<10m",
  },
  {
    name: "More data",
    time: "5min",
    distance: "350m",
  },
  {
    name: "To see",
    time: "9min",
    distance: "650m",
  },
  {
    name: "How scroll behaves",
    time: "5min",
    distance: "400m",
  },
];

export default function Home() {
  const [isLocation, setIsLocation] = createSignal(true);
  return (
    <main class="grid h-full grid-rows-[1fr_auto]">
      <ol class="col-start-1 row-start-1 divide-y divide-zinc-100 overflow-y-scroll px-4">
        {/* TODO add next departure line icon and time */}
        {/* TODO add map and A/B tests */}
        {/* TODO add that ticket sale, management and information is out of scope. That's why the navigation options are limited and focus is on public transport not long distance travel */}
        <For each={data}>
          {(item) => (
            <li class="py-5">
              <p class="text-sm font-semibold leading-6 text-zinc-900">
                {item.name}
              </p>
              <p class="mt-1 flex gap-x-2 text-xs leading-5 text-zinc-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                  class="inline-block size-5 text-zinc-400"
                >
                  <path d="m280-40 112-564-72 28v136h-80v-188l202-86q14-6 29.5-7t29.5 4q14 5 26.5 14t20.5 23l40 64q26 42 70.5 69T760-520v80q-70 0-125-29t-94-74l-25 123 84 80v300h-80v-260l-84-64-72 324h-84Zm260-700q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z" />
                </svg>
                <time>{item.time}</time>

                <span>{item.distance}</span>
              </p>
            </li>
          )}
        </For>
      </ol>
      <fieldset class="col-start-1 row-start-1 space-x-2 place-self-end self-end text-zinc-400">
        <legend class="sr-only">Switch view</legend>
        <label class="inline-block rounded-full bg-zinc-200 p-3 shadow-2xl has-[:checked]:text-purple-600">
          <span class="sr-only">List</span>
          <input type="radio" name="view" class="sr-only" checked />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z" />
          </svg>
        </label>
        <label class="inline-block rounded-full bg-zinc-200 p-3 shadow-2xl has-[:checked]:text-purple-600">
          <span class="sr-only">Map</span>
          <input type="radio" name="view" class="sr-only" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z" />
          </svg>
        </label>
      </fieldset>

      <form class="mt-auto block animate-move-in space-y-5 rounded-t-xl bg-purple-600 p-4 px-4 shadow-md">
        {/* As the naviation UI is bottom to top, we should make the search use the same to be not confusing.
        Also don't you first think of where you want to go and not where you are right now? */}
        {/* animation moving bottom sheet for search into view to get focus from user */}
        <fieldset class="space-y-2">
          <legend class="sr-only">Search stations</legend>
          <div>
            <label
              for="destination"
              class="block text-sm font-semibold leading-6 text-zinc-100"
            >
              Destination
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="destination"
                id="destination"
                class="block w-full rounded-md border-0 bg-zinc-50 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="start"
              class="block text-sm font-semibold leading-6 text-zinc-100"
            >
              Start
            </label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="start"
                id="start"
                class="block w-full rounded-md border-0 bg-zinc-50 px-3 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <label class="absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-400">
                <input type="checkbox" class="peer sr-only" />
                {/* Conditional with CSS and no JS 😌 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  class="h-5 w-5 text-zinc-400 peer-checked:hidden"
                  fill="currentColor"
                >
                  <path d="M440-40v-80q-125-14-214.5-103.5T122-438H42v-80h80q14-125 103.5-214.5T440-836v-80h80v80q125 14 214.5 103.5T838-518h80v80h-80q-14 125-103.5 214.5T520-120v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  class="hidden h-5 w-5 text-purple-600 peer-checked:block"
                  fill="currentColor"
                >
                  <path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z" />
                </svg>
              </label>
            </div>
          </div>
        </fieldset>
        <button
          type="submit"
          class="w-full rounded-full bg-zinc-50 px-3.5 py-2 text-sm font-bold text-purple-600 shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Go
        </button>
      </form>
    </main>
  );
}
