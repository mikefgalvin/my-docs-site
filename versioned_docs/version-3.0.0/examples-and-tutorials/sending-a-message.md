
#### `version-3.0.0/examples-and-tutorials/sending-a-message.md`

```markdown
# Example: Sending a Message

```paraflow
task !messageMe($message) {
    pncp messaging notify($message) to "scott1943@1.0.0";
}

event sendMessage($message string) {
    !messageMe($message);
}
