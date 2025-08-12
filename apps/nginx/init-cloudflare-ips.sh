curl -s https://www.cloudflare.com/ips-v4 | awk '{print "set_real_ip_from " $1 ";"}' > cloudflare.conf
curl -s https://www.cloudflare.com/ips-v6 | awk '{print "set_real_ip_from " $1 ";"}' >> cloudflare.conf
echo "real_ip_header CF-Connecting-IP;" >> cloudflare.conf