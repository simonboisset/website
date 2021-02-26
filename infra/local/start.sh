#!/bin/bash
# docker run -d -p 27017:27017 --name react-pass-server mongo
# docker run -d -p 6379:6379 --name react-pass-redis redis
docker run -d -p 5432:5432 --name react-pass-server -e POSTGRES_PASSWORD=secret -e POSTGRES_USER=simon -e POSTGRES_DB=simonboisset-db -d postgres