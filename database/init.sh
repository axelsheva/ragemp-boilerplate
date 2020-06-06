#!/bin/bash

ENV=dev
MOCK=0

while getopts ":e:m:" opt; do
  case $opt in
    e) ENV="$OPTARG"
    ;;
    m) MOCK="$OPTARG"
    ;;
    \?) echo "Invalid option -$OPTARG"
    ;;
  esac
done

if [ ! -f .db.env ]
then
  export $(cat ./docker/$ENV/.db.env | grep = | xargs)
fi

if [ -z "$POSTGRES_PORT_EXTERNAL" ]
then
  POSTGRES_PORT_EXTERNAL=$POSTGRES_PORT
fi

echo "Wait database..."
while ! pg_isready -d $POSTGRES_DB -h localhost -p $POSTGRES_PORT_EXTERNAL -U $POSTGRES_USER; do
  sleep 1
done

CONNECTION="postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@localhost:$POSTGRES_PORT_EXTERNAL/$POSTGRES_DB"

psql "$CONNECTION" -f ./database/extension/citext.sql
psql "$CONNECTION" -f ./database/extension/uuid.sql

psql "$CONNECTION" -f ./database/schema/user.sql
psql "$CONNECTION" -f ./database/schema/vehicle.sql

if [[ $MOCK == "1" ]]; then
  echo "Add mock data"
fi
