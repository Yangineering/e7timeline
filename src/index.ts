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
  <div class="w-full flex flex-row">
    ${() =>
      state.tabs.map(
        (tab, index) =>
          t`
        <button
          class="${() => (index === state.selectedTab ? "underline" : "")}"
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
