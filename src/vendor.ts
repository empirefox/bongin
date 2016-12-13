import 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
// import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/retryWhen';
// import 'rxjs/add/operator/take';
import 'rxjs/add/operator/publishReplay';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';

// import 'lodash/groupBy';
// import 'lodash/isEqual';
// import 'lodash/keyBy';
// import 'lodash/sumBy';
// import 'lodash/uniq';
// import 'lodash/values';
// import 'lodash/unescape';

// import 'angular2-infinite-scroll';
// import 'angular2-jwt'; // user
// import 'angular2-modal';
// import 'angular2-modal/plugins/bootstrap';
// import 'angular2-swiper';
// require('!!style!css!swiper/dist/css/swiper.css');

// import 'querystringify';
// import 'url-parse';
// import 'timeago.js';

// // import 'cross-storage'; // xstorage

// require('list-to-tree-lite'); // category

import { environment } from './environments/environment';
if (environment.twemojiBase) {
  require('twemoji').base = environment.twemojiBase;
}
