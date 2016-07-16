# Create view in Admin button for current view
Adds a quick button to the page to jump to the currently viewed resource. 


This version opts to avoid any Liquid edits so can be handled in JavaScript alone. The drawback to this is that Articles can be harder to capture so we fallback to the common tracking scripts in place. If the theme removes `content_for_header` or the tracking object changes, this script will no longer be able to jump to articles. Adding the ID to the page as a global within the theme (along with the edits to this script) could overcome that.

This is related to [this blog post](http://freakdesign.com.au/blogs/news/15572921-add-an-edit-button-on-shopify-storefronts).