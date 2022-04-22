# End-points

### Notes

| PROTOCOL | End-Point | Arguments | Short description |
| -------- | --------- | --------- | ----------------- |
| [POST] | /notes/post | name, content |  explicit |
| [POST] | /notes/update | id, name, content | explicit |
| [GET] | /notes/get | id | get a expecific note  |
| [GET] | /notes/getAll | name, content | get all user's notes  |
| [GET] | /notes/delete | id | explicit |

### Session/Account

| PROTOCOL | End-Point | Arguments | Short description |
| -------- | --------- | --------- | ----------------- |
| [POST] | /user/signup | name, email, password | register a new user |
| [POST] | /user/signin | name, email | login |
| [POST] | /user/signout | No arguments | explicit  |
| [POST] | /user/delete | No arguments | delete current user |
| [POST] | /user/change/name | name | update user's name |
| [POST] | /user/change/email | email | update user's email |
| [POST] | /user/change/password | old-password, new-password | update user's password |
