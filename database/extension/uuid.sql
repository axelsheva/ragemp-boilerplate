/*
 Extintion for UUID values GENERATION and ability to use uuid type in database
 http://www.postgresqltutorial.com/postgresql-uuid/

 CREATE TABLE contacts (
 contact_id uuid DEFAULT uuid_generate_v4 (),...

 To install the uuid-ossp module:
 */
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
