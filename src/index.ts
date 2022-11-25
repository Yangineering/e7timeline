import { reactive, watch, html } from "@arrow-js/core";
import events from './components/events';
import banners from './components/banners';
import patches from './components/patches';
const appElement = document.getElementById("app");

const data = reactive({
  cardView: false,
})
const state = reactive({
  isOpen: false
})
const viewTypeStates = [
  "Table View",
  "Card View"
]
const app = html`
<h1>e7 Timeline</h1>
<h2>Events</h2>
${events()}

<h2>Banners</h2>
${banners()}

<h2>Patch Notes</h2>
${patches()}
`
app(appElement);
