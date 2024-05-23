import { For, Show, createSignal } from "solid-js";
import { Icons } from "~/components/Icons";
import Input from "~/components/Input";

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
];
export default function Home() {
  const [isLocation, setIsLocation] = createSignal(true);
  return (
    <main class="grid h-full grid-rows-[1fr_auto]">
      <ol class="divide-y divide-zinc-100 overflow-y-scroll">
        {/* TODO add next departure line icon and time */}
        {/* TODO add map and A/B tests */}
        {/* TODO add that ticket sale, management and information is out of scope. That's why the navigation options are limited and focus is on public transport not long distance travel */}
        <For each={data}>
          {(item) => (
            <li class="px-4 py-5">
              <p class="text-sm font-semibold leading-6 text-zinc-900">
                {item.name}
              </p>
              <p class="space-x-2 text-xs leading-5 text-zinc-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                  class="inline-block h-5 w-5 text-zinc-400"
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
      <form class=" mt-auto block animate-move-in space-y-5 rounded-t-lg bg-zinc-100 p-4 px-4 shadow-2xl">
        {/* As the naviation UI is bottom to top, we should make the search use the same to be not confusing.
        Also don't you first think of where you want to go and not where you are right now? */}
        {/* animation moving bottom sheet for search into view to get focus from user */}
        <fieldset class="space-y-2">
          <div>
            <label
              for="destination"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Destination
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="destination"
                id="destination"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="start"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Start
            </label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="start"
                id="start"
                class="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          class="w-full rounded-full bg-purple-600 px-3.5 py-2 text-sm font-semibold text-zinc-50 shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Go
        </button>
      </form>
    </main>
  );
}
