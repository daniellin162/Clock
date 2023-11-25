(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",u="day",a="week",o="month",c="quarter",f="year",h="date",d="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,u=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:f,w:a,d:u,D:h,h:s,m:i,s:r,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",M={};M[p]=y;var D="$isDayjsObject",b=function(t){return t instanceof w||!(!t||!t[D])},g=function t(e,n,r){var i;if(!e)return p;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(i=s),n&&(M[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;M[a]=e,i=a}return!r&&i&&(p=i),i||!r&&p},S=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},O=m;O.l=g,O.i=b,O.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function y(t){this.$L=g(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var v=y.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return O},v.isValid=function(){return!(this.$d.toString()===d)},v.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return S(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<S(t)},v.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!O.u(e)||e,d=O.p(t),l=function(t,e){var r=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?r:r.endOf(u)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,v=this.$M,m=this.$D,p="set"+(this.$u?"UTC":"");switch(d){case f:return c?l(1,0):l(31,11);case o:return c?l(1,v):l(0,v+1);case a:var M=this.$locale().weekStart||0,D=(y<M?y+7:y)-M;return l(c?m-D:m+(6-D),v);case u:case h:return $(p+"Hours",0);case s:return $(p+"Minutes",1);case i:return $(p+"Seconds",2);case r:return $(p+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,c=O.p(t),d="set"+(this.$u?"UTC":""),l=(a={},a[u]=d+"Date",a[h]=d+"Date",a[o]=d+"Month",a[f]=d+"FullYear",a[s]=d+"Hours",a[i]=d+"Minutes",a[r]=d+"Seconds",a[n]=d+"Milliseconds",a)[c],$=c===u?this.$D+(e-this.$W):e;if(c===o||c===f){var y=this.clone().set(h,1);y.$d[l]($),y.init(),this.$d=y.set(h,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[O.p(t)]()},v.add=function(n,c){var h,d=this;n=Number(n);var l=O.p(c),$=function(t){var e=S(d);return O.w(e.date(e.date()+Math.round(t*n)),d)};if(l===o)return this.set(o,this.$M+n);if(l===f)return this.set(f,this.$y+n);if(l===u)return $(1);if(l===a)return $(7);var y=(h={},h[i]=t,h[s]=e,h[r]=1e3,h)[l]||1,v=this.$d.getTime()+n*y;return O.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},l=function(t){return O.s(s%12||12,t,"0")},y=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace($,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return O.s(e.$y,4,"0");case"M":return a+1;case"MM":return O.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return O.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return O.s(s,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return y(s,u,!0);case"A":return y(s,u,!1);case"m":return String(u);case"mm":return O.s(u,2,"0");case"s":return String(e.$s);case"ss":return O.s(e.$s,2,"0");case"SSS":return O.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,h,d){var l,$=this,y=O.p(h),v=S(n),m=(v.utcOffset()-this.utcOffset())*t,p=this-v,M=function(){return O.m($,v)};switch(y){case f:l=M()/12;break;case o:l=M();break;case c:l=M()/3;break;case a:l=(p-m)/6048e5;break;case u:l=(p-m)/864e5;break;case s:l=p/e;break;case i:l=p/t;break;case r:l=p/1e3;break;default:l=p}return d?l:O.a(l)},v.daysInMonth=function(){return this.endOf(o).$D},v.$locale=function(){return M[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=g(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return O.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},y}(),_=w.prototype;return S.prototype=_,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",u],["$M",o],["$y",f],["$D",h]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,w,S),t.$i=!0),S},S.locale=g,S.isDayjs=b,S.unix=function(t){return S(1e3*t)},S.en=M[p],S.Ls=M,S.p={},S}()},69:function(t){t.exports=function(){"use strict";return function(t,e,n){var r=e.prototype,i=function(t){var e,i=t.date,s=t.utc,u={};if(!(null===(e=i)||e instanceof Date||e instanceof Array||r.$utils().u(e)||"Object"!==e.constructor.name)){if(!Object.keys(i).length)return new Date;var a=s?n.utc():n();Object.keys(i).forEach((function(t){var e,n;u[(e=t,n=r.$utils().p(e),"date"===n?"day":n)]=i[t]}));var o=u.day||(u.year||u.month>=0?1:a.date()),c=u.year||a.year(),f=u.month>=0?u.month:u.year||u.day?0:a.month(),h=u.hour||0,d=u.minute||0,l=u.second||0,$=u.millisecond||0;return s?new Date(Date.UTC(c,f,o,h,d,l,$)):new Date(c,f,o,h,d,l,$)}return i},s=r.parse;r.parse=function(t){t.date=i.bind(this)(t),s.bind(this)(t)};var u=r.set,a=r.add,o=r.subtract,c=function(t,e,n,r){void 0===r&&(r=1);var i=Object.keys(e),s=this;return i.forEach((function(n){s=t.bind(s)(e[n]*r,n)})),s};r.set=function(t,e){return e=void 0===e?t:e,"Object"===t.constructor.name?c.bind(this)((function(t,e){return u.bind(this)(e,t)}),e,t):u.bind(this)(t,e)},r.add=function(t,e){return"Object"===t.constructor.name?c.bind(this)(a,t,e):a.bind(this)(t,e)},r.subtract=function(t,e){return"Object"===t.constructor.name?c.bind(this)(a,t,e,-1):o.bind(this)(t,e)}}}()}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(484),e=n.n(t),r=n(69),i=n.n(r);e().extend(i());const s=e()().hour(),u=e()().minute(),a=e()().second();document.body.appendChild(function(){const t=document.querySelector("#time"),e=`${s}:${u}:${a}`;return t.innerHTML=e,t}())})()})();