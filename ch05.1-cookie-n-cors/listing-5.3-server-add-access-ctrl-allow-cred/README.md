(1) in firefox goto:

  http://127.0.0.1:9999/login-fetch.html

(2) enter password is owner

(3) hit return

After hitting return, window location will change to:

  http://localhost:1111/client-fetch.html

Where you can perform delete operation.

Server will check for cookie with key "username" with value
"owner" as a permission to delete.

Now server has enabled "access-ctrl-allow-cred" during preflight.
However client still refuce to send cookie.

This is b/c client is not enable to send cookie.
For client to send 3rd party cookie it need to set withCredentials.





