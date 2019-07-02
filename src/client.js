import * as sapper from '@sapper/app';
import makeSwipe from "./swipe";

sapper.start({
	target: document.querySelector('#sapper')
}).then(() => {
	let swipe = makeSwipe(window)
});