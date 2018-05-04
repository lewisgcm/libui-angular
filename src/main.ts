import 'core-js/es7/reflect'
import 'zone.js/dist/zone-node.js'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const libui = require('libui-node');
platformBrowserDynamic().bootstrapModule(AppModule);
libui.startLoop();