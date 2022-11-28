import { r, w, t } from "@arrow-js/core";
import events from "./components/events";
import banners from "./components/banners";
import patches from "./components/patches";
import about from "./components/about";
import disclaimer from "./components/disclaimer";

const appElement = document.getElementById("app");

const state = r({
  tabs: [
    { name: "Events", element: events() },
    { name: "Banners", element: banners() },
    { name: "Patches", element: patches() },
    { name: "About", element: about() },
  ],
  selectedTab: 0,
});

const app = t`
<div class="w-screen lg:max-w-5xl mx-auto">
  <h1 class='font-bold text-lg'>e7 Timeline</h1>
  <div class="flex flex-col lg:flex-row border-b">
    ${() =>
      state.tabs.map(
        (tab, index) =>
          t`
        <button
          class="${() => {
            let baseClasses =
              "text-2xl h-24 lg:text-md bg-white lg:inline-block font-bold lg:py-2 lg:px-8 text-left lg:text-center ";
            return baseClasses.concat(
              index === state.selectedTab
                ? "max-lg:border-l-4 lg:border-t lg:border-x lg:rounded-t lg:rounded-x text-slate-700"
                : "lg:mx-px text-slate-500 lg:hover:text-slate-800"
            );
          }}"
          @click="${() => (state.selectedTab = index)}"
        >
          <p>${tab.name}</p>
        </button>
      `
      )}
  </div>
  <div>
    ${() =>
      state.tabs.map((tab, index) => {
        return t`<div class="${() => {
          let baseClasses = " ";
          return baseClasses.concat(
            index === state.selectedTab ? "flex-1" : "hidden"
          );
        }}"
        >
         ${() => tab.element}
        </div>`;
      })}
  </div>
  ${disclaimer()}
</div>
`;
app(appElement);
