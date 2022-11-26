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
<div class="grid grid-cols-2 md:grid-cols-5 w-full">
  ${events()}

  ${banners()}

  ${patches()}
</div>
`
app(appElement);
