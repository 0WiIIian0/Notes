# End-points

### Tables

```mysql
create table users (
  id int not null AUTO_INCREMENT,
  primary key(id),
  name text,
  email text,
  pass text
);

```

```mysql
create table notes (
  id int not null AUTO_INCREMENT,
  primary key(id),
  owner int,
  title text,
  content text,
  foreign key(owner) references users(id) on delete cascade
);

```
