
(1) In Firefox goto:

  http://127.0.0.1:9999/login-fetch.html

(2) Enter password "owner".

(3) Hit return.

After hitting return, window location will change to:

  http://localhost:1111/client-fetch.html

Where you can perform delete operation.

Server will check for cookie with key value pair of "username=owner"
as a permission perform delete operation.

This works on Firefox but does not on Chrome because Chrome has
disabled 3rd party cookie.

To enble 3rd party cookie, you have to set "sameSite:none" in cookie.
"sameSite:none" can only be set if it is a https request.

---

![show vary:origin header](https://github.com/ApolloTang/wf-cors-in-action/blob/main/ch06/listing-6.4-vary-origin/listing-6.4-vary-origin-header-ff.png?raw=true)








