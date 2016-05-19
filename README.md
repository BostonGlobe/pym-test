# Pym test

Run `make reload`

This is using raf polling for parent width. Of note: the parent can send a width message(s) before the child is even setup to receive messages.

* You can toggle the resizeChart function in src/main.js (which event triggers it)
* See the bottom of preview.html (automatically resizing twice on timeouts)
* See src/main.js for resize event handling
* See bottom of src/index.html for iframe setup
