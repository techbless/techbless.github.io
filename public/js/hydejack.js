/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-classlist-csspointerevents-cssremunit-csstransforms-eventlistener-matchmedia-opacity-queryselector-requestanimationframe-touchevents !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,a;for(var u in y)if(y.hasOwnProperty(u)){if(e=[],t=y[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=s(T?"svg":"body"),e.fake=!0),e}function u(e,n,r,o){var i,u,f,l,d="modernizr",c=s("div"),p=a();if(parseInt(r,10))for(;r--;)f=s("div"),f.id=o?o[r]:d+(r+1),c.appendChild(f);return i=s("style"),i.type="text/css",i.id="s"+d,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",l=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),u=n(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=l,S.offsetHeight):c.parentNode.removeChild(c),!!u}function f(e,t){return!!~(""+e).indexOf(t)}function l(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?l(o,n||t):o);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+c(t[o])+":"+r+")");return i=i.join(" or "),u("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function m(e,t,o,a){function u(){d&&(delete A.style,delete A.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var l=p(e,o);if(!r(l,"undefined"))return l}for(var d,c,m,v,h,y=["modernizr","tspan","samp"];!A.style&&y.length;)d=!0,A.modElem=s(y.shift()),A.style=A.modElem.style;for(m=e.length,c=0;m>c;c++)if(v=e[c],h=A.style[v],f(v,"-")&&(v=i(v)),A.style[v]!==n){if(a||r(o,"undefined"))return u(),"pfx"==t?v:!0;try{A.style[v]=o}catch(g){}if(A.style[v]!=h)return u(),"pfx"==t?v:!0}return u(),!1}function v(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?m(a,t,o,i):(a=(e+" "+b.join(s+" ")+s).split(" "),d(a,t,n))}function h(e,t,r){return v(e,n,n,t,r)}var y=[],g={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=g,Modernizr=new Modernizr,Modernizr.addTest("eventlistener","addEventListener"in e),Modernizr.addTest("queryselector","querySelector"in t&&"querySelectorAll"in t);var C=[],x=g._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];g._prefixes=x;var S=t.documentElement;Modernizr.addTest("classlist","classList"in S);var T="svg"===S.nodeName.toLowerCase();Modernizr.addTest("opacity",function(){var e=s("a").style;return e.cssText=x.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("csspointerevents",function(){var e=s("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("cssremunit",function(){var e=s("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)});var w=g.testStyles=u;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",x.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");w(r,function(e){n=9===e.offsetTop})}return n});var _="Moz O ms Webkit",z=g._config.usePrefixes?_.split(" "):[];g._cssomPrefixes=z;var E=function(t){var r,o=x.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var s=0;o>s;s++){var a=x[s],u=a.toUpperCase()+"_"+r;if(u in i)return"@-"+a.toLowerCase()+"-"+t}return!1};g.atRule=E;var b=g._config.usePrefixes?_.toLowerCase().split(" "):[];g._domPrefixes=b;var q={elem:s("modernizr")};Modernizr._q.push(function(){delete q.elem});var A={style:q.elem.style};Modernizr._q.unshift(function(){delete A.style}),g.testAllProps=v;var P=g.prefixed=function(e,t,n){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=i(e)),t?v(e,t,n):v(e,"pfx"))};Modernizr.addTest("requestanimationframe",!!P("requestAnimationFrame",e),{aliases:["raf"]}),Modernizr.addTest("matchmedia",!!P("matchMedia",e)),g.testAllProps=h,Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)}),o(),delete g.addTest,delete g.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);

(function() {
  /**
   * tap.js
   * Copyright (c) 2015 Alex Gibson
   * https://github.com/alexgibson/tap.js/
   * Released under MIT license
   */
  function Tap(el) {
      this.el = typeof el === 'object' ? el : document.getElementById(el);
      this.moved = false; //flags if the finger has moved
      this.startX = 0; //starting x coordinate
      this.startY = 0; //starting y coordinate
      this.hasTouchEventOccured = false; //flag touch event
      this.el.addEventListener('touchstart', this, false);
      this.el.addEventListener('mousedown', this, false);
  }

  // return true if left click is in the event, handle many browsers
  Tap.prototype.leftButton = function(event) {
      // modern & preferred:  MSIE>=9, Firefox(all)
      if ('buttons' in event) {
         // https://developer.mozilla.org/docs/Web/API/MouseEvent/buttons
         return event.buttons === 1;
      } else {
         return 'which' in event ?
             // 'which' is well defined (and doesn't exist on MSIE<=8)
             // https://developer.mozilla.org/docs/Web/API/MouseEvent/which
             event.which === 1 :
             // for MSIE<=8 button is 1=left (0 on all other browsers)
             // https://developer.mozilla.org/docs/Web/API/MouseEvent/button
             event.button === 1;
      }
      return false;
  };

  Tap.prototype.start = function(e) {
      if (e.type === 'touchstart') {

          this.hasTouchEventOccured = true;
          this.el.addEventListener('touchmove', this, false);
          this.el.addEventListener('touchend', this, false);
          this.el.addEventListener('touchcancel', this, false);

      } else if (e.type === 'mousedown' && this.leftButton(e)) {

          this.el.addEventListener('mousemove', this, false);
          this.el.addEventListener('mouseup', this, false);
      }

      this.moved = false;
      this.startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
      this.startY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
  };

  Tap.prototype.move = function(e) {
      //if finger moves more than 10px flag to cancel
      var x = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
      var y = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
      if (Math.abs(x - this.startX) > 10 || Math.abs(y - this.startY) > 10) {
          this.moved = true;
      }
  };

  Tap.prototype.end = function(e) {
      var evt;

      this.el.removeEventListener('touchmove', this, false);
      this.el.removeEventListener('touchend', this, false);
      this.el.removeEventListener('touchcancel', this, false);
      this.el.removeEventListener('mouseup', this, false);
      this.el.removeEventListener('mousemove', this, false);

      if (!this.moved) {
          //create custom event
          try {
              evt = new window.CustomEvent('tap', {
                  bubbles: true,
                  cancelable: true
              });
          } catch (e) {
              evt = document.createEvent('Event');
              evt.initEvent('tap', true, true);
          }

          //prevent touchend from propagating to any parent
          //nodes that may have a tap.js listener attached
          e.stopPropagation();

          // dispatchEvent returns false if any handler calls preventDefault,
          if (!e.target.dispatchEvent(evt)) {
              // in which case we want to prevent clicks from firing.
              e.preventDefault();
          }
      }
  };

  Tap.prototype.cancel = function() {
      this.hasTouchEventOccured = false;
      this.moved = false;
      this.startX = 0;
      this.startY = 0;
  };

  Tap.prototype.destroy = function() {
      this.el.removeEventListener('touchstart', this, false);
      this.el.removeEventListener('touchmove', this, false);
      this.el.removeEventListener('touchend', this, false);
      this.el.removeEventListener('touchcancel', this, false);
      this.el.removeEventListener('mousedown', this, false);
      this.el.removeEventListener('mouseup', this, false);
      this.el.removeEventListener('mousemove', this, false);
  };

  Tap.prototype.handleEvent = function(e) {
      switch (e.type) {
          case 'touchstart': this.start(e); break;
          case 'touchmove': this.move(e); break;
          case 'touchend': this.end(e); break;
          case 'touchcancel': this.cancel(e); break;
          case 'mousedown': this.start(e); break;
          case 'mouseup': this.end(e); break;
          case 'mousemove': this.move(e); break;
      }
  };

  //this function will work cross-browser for loading scripts asynchronously
  function loadScript(src, callback) {
    var s,
        r,
        t;
    r = false;
    s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.onload = s.onreadystatechange = function() {
      //console.log( this.readyState ); //uncomment this line to see which ready states are called.
      if (!r && (!this.readyState || this.readyState == 'complete')) {
        r = true;
        callback();
      }
    };
    t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
  }

  function loadCSS(href) {
    var l,
        h;

    // load KaTeX CSS
    l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = href;

    h = document.getElementsByTagName('head')[0];
    h.parentNode.insertBefore(l, h);
  }

  function hasFeatures(features) {
    var acc = true;
    for (var i = 0; i < features.length; i++) {
      var feature = features[i];
      var hasFeature = Modernizr[feature];
      // if (!hasFeature) console.warn('Feature "' + feature + '" missing!');
      acc = acc && hasFeature;
    }
    return acc;
  }

  /**
   * Copyright (c) 2016 Florian Klampfer
   * http://qwtel.com/hydejack/
   * Released under MIT license
   */
  function createSidebar(sidebar, backdrop, menu) {

    new Tap(backdrop);
    new Tap(menu);

    var IDLE = 'IDLE';
    var START_TOUCHING = 'START_TOUCHING';
    var TOUCHING = 'TOUCHING';
    var START_ANIMATING = 'START_ANIMATING';
    var ANIMATING = 'ANIMATING';

    var DURATION = 200;
    var MAX_OPACITY = 0.67;
    var VELOCITY_THRESHOLD = 0.33;
    var VELOCITY_LINEAR_COMBINATION = 0.6;

    var startX = 0;
    var startY = 0;
    var pageX = 0;
    var pageY = 0;
    var lastPageX = 0;
    var lastPageY = 0;
    var isScrolling = undefined;
    var startedMoving = false;
    var state = IDLE;
    var menuOpen = 0;
    var velocity = 0;
    var startTranslateX = 0;
    var translateX = 0;
    var animationFrameRequested = false;
    var touching = false;

    var animationStartTime;
    var animationStartX;
    var animationEndX;
    var animationChangeInValue;
    var lastTime;
    var timeDiff;

    var sliderWidth;
    var screenWidth;

    function requestAnimationLoop() {
      if (!animationFrameRequested) {
        animationFrameRequested = true;
        requestAnimationFrame(animationLoop);
      }
    }

    function distanceToLastTouch(p) {
      return Math.sqrt(
        Math.pow(pageX - p.pageX, 2) +
        Math.pow(pageY - p.pageY, 2)
      );
    }

    function getNearestTouch(touches) {
      return Array.prototype.reduce.call(touches, function (acc, touch) {
        var dist = distanceToLastTouch(touch);
        return (dist < acc.dist) ? {
          dist: dist,
          touch: touch
        } : acc;
      }, {
        dist: Number.POSITIVE_INFINITY,
        touch: null,
      }).touch;
    }

    function onTouchMove(e) {
      if (touching) {
        var touch = getNearestTouch(e.touches);
        pageX = touch.pageX;
        pageY = touch.pageY;

        if (typeof isScrolling === 'undefined' && startedMoving) {
          isScrolling = Math.abs(startY - pageY) > Math.abs(startX - pageX);
          if (!isScrolling) {
            state = START_TOUCHING;
            requestAnimationLoop();
          }
        }

        if (isScrolling && !menuOpen) return;

        e.preventDefault();

        startedMoving = true;
      }
    }

    function onTouchEnd(e) {
      if (touching) {
        if (isScrolling || e.touches.length > 0) {
          return;
        }

        if (startedMoving) {
          menuOpen = velocity > VELOCITY_THRESHOLD ? 1 :
            velocity < -VELOCITY_THRESHOLD ? 0 :
              translateX >= sliderWidth / 2 ? 1 :
              0;
        }

        touching = false;
        state = START_ANIMATING;
        startedMoving = false;
      }
    }

    function onTouchStart(e) {
      function isCodeBlock(path) {
        for (var i = 0; i < path.length; i++) {
          var node = path[i];
          var classList = node.classList;

          if (classList &&
              (classList.contains('highlight') || classList.contains('katex-display')) &&
              node.scrollLeft > 0) {
            return true;
          }
        }

        return false;
      }

      if (e.touches.length === 1) {
        isScrolling = undefined;

        var touch = e.touches[0] ;
        startX = pageX = lastPageX = touch.pageX;
        startY = pageY = lastPageY = touch.pageY;

        if (menuOpen || (!menuOpen && pageX < window.innerWidth / 3/* && !isCodeBlock(e.path)*/)) {
          touching = true;
        }
      }
    }

    function onMenuClick(e) {
      e.preventDefault();
      animateTo(1);
    }

    function onBackdropClick(e) {
      e.preventDefault();
      animateTo(0);
    }

    function animateTo(_menuOpen) {
      state = START_ANIMATING;
      menuOpen = _menuOpen;
      requestAnimationLoop();
    }

    /**
      * @param t current time
      * @param b start value
      * @param c change in value
      * @param d duration
      * @returns {number}
      */
    function linearTween(t, b, c, d) {
      return c * t / d + b;
    }

    /**
      * Since part of the slider is always visible,
      * the width that is "movable" is less than the complete slider witdh.
      */
    function getMovableSliderWidth() {
      return -sidebar.offsetLeft;
    }

    function animationLoop(time) {
      switch (state) {
        case START_TOUCHING:
          sliderWidth = getMovableSliderWidth();
          state = TOUCHING;
          // no break;

        case TOUCHING:
          timeDiff = time - lastTime;

          if (timeDiff > 0) {
            velocity = VELOCITY_LINEAR_COMBINATION  * (pageX - lastPageX) / timeDiff +
                  (1 - VELOCITY_LINEAR_COMBINATION) *  velocity;
          }

          var deltaX = pageX - startX;
          translateX = startTranslateX + deltaX;
          translateX = Math.max(0, Math.min(sliderWidth, translateX));

          updateDOM(translateX, sliderWidth);

          lastTime = time;
          lastPageX = pageX;
          lastPageY = pageY;

          requestAnimationFrame(animationLoop);
          break;

        case START_ANIMATING:
          sliderWidth = getMovableSliderWidth();

          var deltaX = pageX - startX;
          translateX = startTranslateX + deltaX;
          translateX = Math.max(0, Math.min(sliderWidth, translateX));

          animationStartX = translateX;
          animationEndX = menuOpen * sliderWidth;
          animationChangeInValue = animationEndX - animationStartX;
          animationStartTime = time;

          state = ANIMATING;
          // no break;

        case ANIMATING:
          var t = time - animationStartTime;
          if (t < DURATION) {
            startTranslateX = linearTween(t, animationStartX, animationChangeInValue, DURATION);
            requestAnimationFrame(animationLoop);
          } else {
            // end animation
            startTranslateX = animationEndX;
            animationFrameRequested = false;
            velocity = 0;

            if (menuOpen === 1) {
              document.body.classList.add('drawer-open');
            } else {
              document.body.classList.remove('drawer-open');
            }
          }

          updateDOM(startTranslateX, sliderWidth);
          break;
      }
    };

    function updateDOM(translateX, sliderWidth) {
      sidebar.style.transform = 'translate3d(' + translateX + 'px,0,0)';
      backdrop.style.opacity = MAX_OPACITY * (translateX / sliderWidth);
    }

    function enableSlider() {
      document.body.classList.add('drawer');
      document.addEventListener('touchstart', onTouchStart);
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
      menu.addEventListener('tap', onMenuClick);
      backdrop.addEventListener('tap', onBackdropClick);
      animateTo(menuOpen);
    }

    function disableSlider() {
      document.body.classList.remove('drawer')
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
      menu.removeEventListener('tap', onMenuClick);
      backdrop.removeEventListener('tap', onBackdropClick);
    }

    function onResize() {
      if (window.matchMedia("(min-width: 48em)").matches) {
        disableSlider();
      } else {
        enableSlider();
      }
    }

    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    onResize();
  }

  if (hasFeatures(['eventlistener',
                   'matchmedia',
                   'requestanimationframe',
                   'classlist',
                   'opacity',
                   'csstransforms',
                   'csspointerevents',
                   'cssremunit'])) {

    var sidebar = document.getElementById('_sidebar');
    var backdrop = document.getElementById('_backdrop');
    var menu = document.getElementById('_menu');

    createSidebar(sidebar, backdrop, menu);
  }

  // KaTeX support
  if (hasFeatures(['queryselector',
                   'classlist'])) {

    var mathBlocks = document.querySelectorAll('script[type^="math/tex"]');

    // only load if math blocks are present
    if (mathBlocks.length) {
      // enable math blocks using KaTeX
      loadCSS("https://unpkg.com/katex@0.6.0/dist/katex.min.css");
      loadScript("https://unpkg.com/katex@0.6.0/dist/katex.min.js", function () {
        // hide the preview
        document.body.classList.add('katex-loaded');

        // kramdown generates script tags with type "math/tex"
        Array.prototype.forEach.call(mathBlocks, function(el) {
          var tex = el.textContent
            .replace('% <![CDATA[', '')
            .replace('%]]>', '');

          // replace the script tag with KaTeX
          el.outerHTML = katex.renderToString(tex, {
            displayMode: el.type === 'math/tex; mode=display'
          });
        });
      });
    }
  }
}());
