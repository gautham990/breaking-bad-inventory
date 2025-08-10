FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve
RUN apk add --no-cache bash
RUN echo $'#!/bin/bash\n\
echo "window._env_ = {" > /app/build/env-config.js\n\
echo "  REACT_APP_API_URL: \\"$REACT_APP_API_URL\\"" >> /app/build/env-config.js\n\
echo "}" >> /app/build/env-config.js\n\
serve -s build -l 3000' > /app/start.sh && chmod +x /app/start.sh
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser
EXPOSE 3000
CMD ["/app/start.sh"]
