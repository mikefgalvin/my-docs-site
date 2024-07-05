
#### `version-3.0.0/getting-started/feature-flags.md`

```markdown
# Feature Flags

Paraflow supports various feature flags that can be enabled during the build process:

- `mysql_store` (default): Enables MySQL backend support for state and application data storage.
- `sqlite_store`: Enables SQLite backend support for state and application data storage.
- `actor_store`: Enables using a spreadsheet for application data storage. One of the other backends is required for state storage.
- `vendored-deps`: Vendors a few dependencies, used for cross-compiling to ARM.

To enable a feature flag, use the `--features` argument. For example, to enable SQLite support, run:

```sh
cargo build --release --features=sqlite_store
