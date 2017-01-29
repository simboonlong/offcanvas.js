## offcanvas.js
Yet another offcanvas solution...

1. Requires Jquery.
2. Manually tested to work on latest version of Chrome, Firefox, Safari and IE.


## Demo
![offcanvas.js demo](offcanvas.gif)

Demo link at http://htmlpreview.github.io/?https://github.com/simboonlong/offcanvas.js/blob/master/index.html


## But why?

There are many offcanvas plugins out there, but I need a plugin that tackles mainly these issues:

1. Basic responsiveness + works in mobile.
2. Position fixed elements within transformed offcanvas element.
3. Choice between underlaying menu and overlapping menu.
4. Preferably, both content and menu remains scrollable when in active state.
5. Separation of concerns (css, js).


## Here's how

1. Apply breakpoints implementation on `$oc-menu-width` as accordingly.
2. Apply `.oc-slide` css class to slide element(s).
3. Default is underlaying menu. For overlapping menu, apply `.oc-menu-overlap` css class to `.oc-menu` element(s).
4. Uses native scrollbar. Nothing fancy. `-webkit-overflow-scrolling: touch` for menu in mobile.
5. Data attributes used as triggers for JavaScript. Transitions/animations by toggling css classes.

## Usage

Follow the structure in index.html. Import the css styles, otherwise scss version is available too. Notice that offcanvas.js is written loosely. Please feel free to modify to your needs.

To initialize:

```

OffCanvas.init();

```

To change left/right direction of the offcanvas slide:

1. Apply either `data-oc-menu-trigger="left"` or `data-oc-menu-trigger="left"` data attribute to both `.oc-menu` and `.oc-menu-trigger` elements in the html.

To use overlapping menu:

1. Apply `.oc-menu-overlap` css class to `.oc-menu` element(s) in the html.


## License
offcanvas.js is licensed under the MIT license. (http://opensource.org/licenses/MIT)


## Contributing
Feel free to contribute.