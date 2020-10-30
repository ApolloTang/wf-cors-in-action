(1) in firefox goto:

  http://127.0.0.1:9999/login-fetch.html

(2) enter password is owner

(3) hit return

After hitting return, window location will change to:

  http://localhost:1111/client-fetch.html

Where you can perform delete operation, but this time server will
check for cookie with key "username" with value "owner" as a permission
to delete.

However client never sent cookie because server needs to enable
"access-ctrl-allow-cred" during preflight.





