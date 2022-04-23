## Database

```mysql
create database notes;
```

## Tables

```mysql
create table if not exists users (
  id int not null AUTO_INCREMENT,
  primary key(id),
  name text,
  email text,
  password text
);
```

```mysql
create table if not exists notes (
  id int not null AUTO_INCREMENT,
  primary key(id),
  owner int,
  title text,
  content text,
  foreign key(owner) references users(id) on delete cascade
);
```
