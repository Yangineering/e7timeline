import { r, w, t } from "@arrow-js/core";
import events from "./components/events";
import banners from "./components/banners";
import patches from "./components/patches";
import about from "./components/about";
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
<h1>e7 Timeline</h1>

<div>
  <div class="flex border-b">
    ${() =>
      state.tabs.map(
        (tab, index) =>
          t`
        <button
          class="text-lg mr-1 bg-white inline-block font-bold py-2 px-8 ${() =>
            index === state.selectedTab
              ? "-mb-px border-l border-t border-r rounded-t text-slate-700"
              : "text-slate-500 hover:text-slate-800"}"
          @click="${() => (state.selectedTab = index)}"
        >
          <p>${tab.name}</p>
        </button>
      `
      )}
  </div>
  <div class="w-full">
    ${() => state.tabs[state.selectedTab].element}
  </div>
</div>
`;
app(appElement);
