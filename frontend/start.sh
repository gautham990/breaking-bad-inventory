#!/bin/bash

# Create env-config.js with runtime environment variables
echo "window._env_ = {" > /app/build/env-config.js
echo "  REACT_APP_API_URL: \"$REACT_APP_API_URL\"" >> /app/build/env-config.js
echo "}" >> /app/build/env-config.js

# Start the server
serve -s build -l 3000
