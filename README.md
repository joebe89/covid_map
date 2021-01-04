# covid_map
Covid UK web map

# Global dependencies
1. Docker engine
2. Docker Compose

# Starting the project
1. Make sure port 80 hasn't been binded by another project, otherwise Nginx will fail to load.
2. Via a terminal, navigate to the projects root directory
3. Run: `docker-compose up -d`
4. Go to your browser, type `localhost` for the url, and press enter

# Stopping the project
1. Run: `docker-compose down` 

# Technology stack
- Nginx: as a static website server, and a proxy server for any future API services.
- Web Framework: TBC...