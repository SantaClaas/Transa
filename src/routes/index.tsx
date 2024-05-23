import { Show, createSignal } from "solid-js";
import { Icons } from "~/components/Icons";
import Input from "~/components/Input";
export default function Home() {
  const [isLocation, setIsLocation] = createSignal(true);
  return (
    <main class="px-4">
      <form class="block p-4 space-y-5 rounded-t-lg bg-zinc-100 mt-auto animate-move-in absolute bottom-0 inset-x-4 shadow-2xl">
        {/* As the naviation UI is bottom to top, we should make the search use the same to be not confusing.
        Also don't you first think of where you want to go and not where you are right now? */}
        {/* TODO add animation moving bottom sheet for search into view to get focus from user */}
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
                <input type="checkbox" class="sr-only peer" />
                {/* Conditional with CSS and no JS 😌 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  class="h-5 w-5 peer-checked:hidden text-zinc-400"
                  fill="currentColor"
                >
                  <path d="M440-40v-80q-125-14-214.5-103.5T122-438H42v-80h80q14-125 103.5-214.5T440-836v-80h80v80q125 14 214.5 103.5T838-518h80v80h-80q-14 125-103.5 214.5T520-120v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  class="h-5 w-5 text-purple-600 hidden peer-checked:block"
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
          class="rounded-full w-full bg-purple-600 px-3.5 py-2 text-sm font-semibold text-zinc-50 shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Go
        </button>
      </form>
    </main>
  );
}
