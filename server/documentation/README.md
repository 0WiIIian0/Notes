# End-points

## Session/Account
<details>
  <summary>[POST] /user/signup</summary>
  <details>
    <summary>Arguments</summary>
    <p>
      name: String
      email: String
      password: String
    </p>
  </details>
</details>

[POST] /user/signin
email: String
password: String

[GET]  /user/signout
No arguments

[GET]  /user/delete
No arguments


## Note Management

[POST] /notes/post
name: String
content: String

[POST] /notes/edit?:id
name: String
content: String

[GET]  /notes/get?:id
id: Number

[GET]  /notes/getAll
No arguments

[GET]  /notes/delete?:id
id: Number
