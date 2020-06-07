run-postgres:
	docker run -d --publish 5432:5432 \
              --env POSTGRES_USER="localhost" \
              --env POSTGRES_PASSWORD="localhost" \
              --env POSTGRES_DB="localhost_test" \
              postgres:alpine && \
    npm run knex:migrate && \
    npm run knex:seed 
