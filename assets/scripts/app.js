import modular from 'modujs';
import * as modules from './modules';
import globals from './globals';
import { html } from './utils/environment';

const app = new modular({
    modules: modules
});

window.isMobile = (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

if (window.isMobile) {
    html.classList.add('is-mobile');
} else {
    html.classList.add('is-desktop');
}

window.isWindows = navigator.platform.indexOf('Win') > -1;

if(window.isWindows) {
    html.classList.add('is-windows');
}

window.isIos = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
if(window.isIos) {
    html.classList.add('is-ios');
}

window.onload = (event) => {
    const $style = document.getElementById('main-css');

    if ($style) {
        if ($style.isLoaded) {
            init();
        } else {
            $style.addEventListener('load', (event) => {
                init();
            });
        }
    } else {
        console.warn('The "main-css" stylesheet not found');
    }
};

function init() {
    globals();

    app.init(app);

    html.classList.add('is-loaded');
    html.classList.add('is-ready');
    html.classList.remove('is-loading');

    setTimeout(() => {
        html.classList.add('has-dom-ready');

        setTimeout(() => {
            html.classList.add('has-dom-animated');
        }, 2000);
    }, 1000);

    // Credits
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        var args = ['\n %c Developed by Quentin Hocdé \u00A9 https://quentinhocde.com \n','background: #1d1d1d; padding:10px 0;color: #ffffff;'];
        window.console.log.apply(console, args);
    } else if (window.console) {
        window.console.log('Developed by Quentin Hocdé - https://quentinhocde.com');
    }
}

