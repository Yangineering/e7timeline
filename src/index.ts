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
<div class="w-screen max-w-5xl mx-auto">
  <h1>e7 Timeline</h1>
  <div class="flex flex-col lg:flex-row border-b">
    ${() =>
      state.tabs.map(
        (tab, index) =>
          t`
        <button
          class="${() => {
            let baseClasses =
              "text-lg lg:mr-1 bg-white lg:inline-block font-bold lg:py-2 lg:px-8 max-lg:text-left lg:text-center ";
            return baseClasses.concat(
              index === state.selectedTab
                ? "max-lg:border-l-4 lg:-mb-px lg:border-t lg:border-r lg:rounded-t text-slate-700"
                : "text-slate-500 lg:hover:text-slate-800"
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
          let baseClasses = "max-lg:w-96 ";
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
