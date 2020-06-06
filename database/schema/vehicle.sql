DROP TABLE IF EXISTS vehicle CASCADE;

CREATE TABLE IF NOT EXISTS vehicle
(
    id           UUID           NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    alpha        SMALLINT       NOT NULL,
    color        JSONB          NOT NULL,
    dimension    SMALLINT       NOT NULL,
    engine       BOOLEAN        NOT NULL,
    heading      REAL           NOT NULL,
    locked       BOOLEAN        NOT NULL,
    model_id     INTEGER        NOT NULL,
    number_plate VARCHAR(24),
    pos_x        REAL           NOT NULL,
    pos_y        REAL           NOT NULL,
    pos_z        REAL           NOT NULL,
    rot_x        REAL           NOT NULL,
    rot_y        REAL           NOT NULL,
    rot_z        REAL           NOT NULL,
    created_at   TIMESTAMP      NOT NULL DEFAULT NOW()
);
