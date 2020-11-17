(1) In Firefox goto:

  http://127.0.0.1:9999/login-fetch.html

(2) Enter password is owner

(3) Hit return

After hitting return, window location will change to:

  http://localhost:1111/client-fetch.html

----------
highlight
----------

Highlight of this excercise:
The api call of the blog post collection has been redirected
But this time it is a x-origin redirect (developer.mozilla.org)

open network inspector to see 301
Observe that Origin has been set to 'null'










