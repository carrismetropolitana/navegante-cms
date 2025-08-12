# # #
# STAGE 1

# Use a generic alpine image as base image
# to install the necessary packages and
# transform the nginx configuration files

FROM alpine AS builder

WORKDIR /app

# Make the full repository available to the builder stage
# and generate cloudflare.conf with the setup script

COPY . .

RUN apk --no-cache add curl

RUN sh ./apps/nginx/init-cloudflare-ips.sh
RUN mv ./cloudflare.conf ./apps/nginx/configs/cloudflare.conf

# From the existing nginx configuration files,
# replace the variables declared in .variables file,
# and mapped on the nginx.conf file, with the values
# from the current environment variables.

ARG ENVIRONMENT

RUN apk --no-cache add envsubst

RUN set -a && . ./environments/${ENVIRONMENT}/.variables && set +a && \
    export VARS=$(env | cut -d= -f1 | awk '{ printf "$%s ", $1 }') && \
    envsubst "$VARS" < ./apps/nginx/configs/nginx.conf > ./apps/nginx/configs/nginx.conf.tmp

RUN mv ./apps/nginx/configs/nginx.conf.tmp ./apps/nginx/configs/nginx.conf



# # #
# STAGE 2

# Use nginx:alpine-slim as base image and
# copy only the necessary files into the final image

FROM nginx:alpine-slim

WORKDIR /app

COPY --from=builder /app/apps/nginx/configs /etc/nginx/

# Start the nginx server in the foreground
# and reload the configuration every 6 hours
# This refreshes the container preventing any memory leaks
# that may occur over time due to the nginx process

CMD ["/bin/sh", "-c", "while :; do sleep 6h & wait ${!}; nginx -s reload; done & nginx -g 'daemon off;'"]
