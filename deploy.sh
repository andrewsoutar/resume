#!/bin/bash

SRCDIR="$(dirname "$0")"
source "$SRCDIR"/.env

podman run --rm --volume "$SRCDIR":/usr/src/app:Z -w /usr/src/app node:latest npm run build
rsync --recursive --copy-links --delete -- \
      "$SRCDIR"/build/ "${DEPLOY_LOC:?Please set DEPLOY_LOC in your .env}"
