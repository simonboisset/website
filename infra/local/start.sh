#!/bin/bash
docker run -d -p 27017:27017 --name react-pass-server mongo
docker run -d -p 6379:6379 --name react-pass-redis redis