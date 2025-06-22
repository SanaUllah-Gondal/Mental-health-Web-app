# Run MongoDB (adjust path if needed)
Start-Process -NoNewWindow -FilePath "C:\Program Files\MongoDB\Server\8.1\bin\mongod.exe"

# Wait for a few seconds to let MongoDB start
Start-Sleep -Seconds 5

# Start Backend Server
Start-Process -NoNewWindow powershell -ArgumentList 'cd ../backend; node server.js'

# Start Frontend React App on port 3001 to avoid conflict
Start-Process -NoNewWindow powershell -ArgumentList 'cd ../frontend-react; $env:PORT=3001; npm start'
