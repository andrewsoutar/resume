#!/bin/bash

SRCDIR="$(dirname "$0")"
source "$SRCDIR"/.env

podman run --rm --volume "$SRCDIR":/usr/src/app:Z -w /usr/src/app node:latest yarn run export --basepath /resume
rsync --recursive --copy-links --delete -- \
      "$SRCDIR"/__sapper__/export/resume/ "${DEPLOY_LOC:?Please set DEPLOY_LOC in your .env}"
