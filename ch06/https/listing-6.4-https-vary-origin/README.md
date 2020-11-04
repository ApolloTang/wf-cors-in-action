(1) In chrome goto:

  https://127.0.0.1:9999/login-fetch.html

(2) Chrome will not accept self-assigned localhost certificate.
To get around this simply click anywhere in the browser and
type "thisisunsafe" [1].

(3) Enter password "owner".

(4) Hit return.

After hitting return, window location will change to:

  https://localhost:1111/client-fetch.html

Server will check for cookie with key value pair of "username=owner"
as a permission to perform delete operation.


-----
reference:
[1]
https://stackoverflow.com/a/38926117/3136861
https://stackoverflow.com/a/63539455/3136861
https://medium.com/@dblazeski/chrome-bypass-net-err-cert-invalid-for-development-daefae43eb12

-----
![show vary:origin header](https://github.com/ApolloTang/wf-cors-in-action/blob/main/ch06/https/listing-6.4-https-vary-origin/listing-6.4-vary-origin-header.png?raw=true)



