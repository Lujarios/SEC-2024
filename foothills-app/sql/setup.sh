#!/bin/bash

DB_USER="user"
DB_PASSWORD="root"
DB_NAME="Hospital (SEC)"

# Create database
psql -U postgres -c "CREATE DATABASE $DB_NAME;"

# Apply schema
psql -U postgres -d $DB_NAME -f db/schema.sql

# Insert seed data
psql -U postgres -d $DB_NAME -f db/seed.sql

echo "Database $DB_NAME has been set up."
echo "User: $DB_USER"
echo "Password: $DB_PASSWORD"
