# Redirect Server

Monitor a site on multiple devices using webpack dev server. Useful for seeing the same site on different size screens or operating systems.

# INSTALL

The redirect server requires you to have node and npm installed

1. `git clone https://github.com/KevinBritten/redirect-server.git`
2. `npm i`

# USEAGE

1. `webpack run dev`
2. `node siteloader.js *URL*`

replace *URL* with the site you want to visit. If the url does not contain "http", then "https://" will be prepended. To overwrite this behaviour add `--nohttps`.
Open the specified url with any device (may not work on all devices).

To update the site being viewed, run `node siteloader.js *URL*` with a new url.



