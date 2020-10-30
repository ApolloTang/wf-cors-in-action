(1) in chrome goto:

  https://127.0.0.1:9999/login-fetch.html

(2) Chrome will not accept self-assigned localhost certificate.

to get around this simply click anywhere in the browser and
type "thisisunsafe" [1]

(3) enter password "owner"

(4) hit return

After hitting return, window location will change to:

  https://localhost:1111/client-fetch.html

Server will check for cookie with key "username" with value
"owner" as a permission to delete.

Buth Third party cookie is block, need to set sameSite:none

Note: for https to work you need to install certificate on your computer.

-----
reference:
[1]
  https://stackoverflow.com/a/38926117/3136861
  https://stackoverflow.com/a/63539455/3136861
  https://medium.com/@dblazeski/chrome-bypass-net-err-cert-invalid-for-development-daefae43eb12



