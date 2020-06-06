DROP TABLE IF EXISTS "user" CASCADE;

CREATE TABLE IF NOT EXISTS "user"
(
    id         UUID         NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    name       VARCHAR(64)  NOT NULL UNIQUE,
    email      citext       NOT NULL UNIQUE,
    password   CHAR(60)     NOT NULL,
    money      INTEGER      NOT NULL DEFAULT 0,
    health     SMALLINT     NOT NULL DEFAULT 100,
    armour     SMALLINT     NOT NULL DEFAULT 0,
    pos_x      REAL         NOT NULL,
    pos_y      REAL         NOT NULL,
    pos_z      REAL         NOT NULL,
    admin      SMALLINT,
    created_at TIMESTAMP    NOT NULL DEFAULT NOW()
);
