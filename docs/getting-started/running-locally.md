
#### `version-3.0.0/getting-started/running-locally.md`

```markdown
# Running Locally

Paraflow requires a database to store its internal state. By default, it uses MySQL, but SQLite is also supported. To run Paraflow locally with MySQL:

1. Create a `.paraflow` file with your event, rule, and task definitions.
2. Start a MySQL instance using Docker Compose for development:

```sh
docker-compose -f testing-compose/docker-compose.yml up

3. Run Paraflow with your definition file:

cargo run --release -- <paraflow-file>

Optionally, provide an additional schema file with the --schema argument.