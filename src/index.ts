import { r, w, t } from "@arrow-js/core";
import events from './components/events';
import banners from './components/banners';
import patches from './components/patches';
const appElement = document.getElementById("app");

const state = r({
  tabs: [
    { name: 'Events' },
    { name: 'Banners' },
    { name: 'Patches' }
  ]
})

const app = t`
<h1>e7 Timeline</h1>
<h2>Events</h2>
${events()}

<h2>Banners</h2>
${banners()}

<h2>Patch Notes</h2>
${patches()}
`
app(appElement);
