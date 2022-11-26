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
<div class="grid grid-cols-5">
  <h1>e7 Timeline</h1>
  ${events()}

  ${banners()}

  ${patches()}
</div>
`
app(appElement);
