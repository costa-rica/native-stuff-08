# Native Stuff 07

Screen Orientation

## install

1. terminal: `npx expo install expo-screen-orientation`
2. app.json: make sure the orientation is set to "default" otherwise it won't adjust.

```json
{
  "expo": {
    "orientation": "default" // <---- important
  }
}
```
