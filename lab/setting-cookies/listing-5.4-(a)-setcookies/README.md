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
Client will now send cookie because client has enable "withCredentials".

This work on firefox but does not on Chrome because chrome has
disable 3rd party cookie.

To enble 3rd party cookie, you have to set sameSite:none in cookie.
sameSite:none can only be set if it is a https request.









