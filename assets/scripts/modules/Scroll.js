import { module } from 'modujs';
// import { lazyLoadImage } from '../utils/image';
import LoconativeScroll from 'loconative-scroll';

export default class extends module {
    constructor(m) {
        super(m);
    }

    init() {
        this.scroll = new LoconativeScroll({
            el: this.el,
            mouseMultiplier: 0.5,
            duration: 1.2
        });

        this.scroll.on('scroll', (args) => {

            if (typeof args.currentElements['scene'] === 'object') {
                let currentElement = args.currentElements['scene'];
                this.call('onScroll', {
                    currentElement: currentElement,
                    speed: args.speed,
                    direction: args.direction,
                    scrollY: args.scroll.y
                }, 'Scene');
            }

            let currentElementsKeys = Object.keys(args.currentElements);

            currentElementsKeys.forEach(key => {
                let element = args.currentElements[key];

                if(element.el.getAttribute('data-module-timeline')) {
                    let progress = element.progress;
                    this.call('setProgress', progress, 'Timeline', key);
                }
            });
        });

    }

    /**
     * Lazy load the related image.
     *
     * @see ../utils/image.js
     *
     * It is recommended to wrap your `<img>` into an element with the
     * CSS class name `.c-lazy`. The CSS class name modifier `.-lazy-loaded`
     * will be applied on both the image and the parent wrapper.
     *
     * ```html
     * <div class="c-lazy o-ratio u-4:3">
     *     <img data-scroll data-scroll-call="lazyLoad, Scroll, main" data-src="http://picsum.photos/640/480?v=1" alt="" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
     * </div>
     * ```
     *
     * @param {LocomotiveScroll} args - The Locomotive Scroll instance.
     */
    // lazyLoad(args) {
    //     lazyLoadImage(args.obj.el, null, () => {
    //         //callback
    //     })
    // }

    destroy() {
        this.scroll.destroy();
    }
}
