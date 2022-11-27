import { r, w, t } from "@arrow-js/core";
import events from './components/events';
import banners from './components/banners';
import patches from './components/patches';
const appElement = document.getElementById("app");

const state = r({
  tabs: [
    { name: 'Events', element: events() },
    { name: 'Banners', element: banners() },
    { name: 'Patches', element: patches() }
  ],
  selectedTab: 0
})

const app = t`
<h1>e7 Timeline</h1>

<div class="container">
  <div class="tabs">
    ${() => state.tabs.map((tab, index) =>
      t`
        <button
          class="${() => index === state.selectedTab ? 'underline' : ''}"
          @click="${() => (state.selectedTab = index)}"
        >
          <p>${tab.name}</p>
        </button>
      `
    )}
    <div
      class="tab-indicator"
    ></div>
  </div>
  <div class="tab-panels">
    ${() => state.tabs[state.selectedTab].element}
  </div>
</div>
`
app(appElement);
