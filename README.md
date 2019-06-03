# guitar-tabs
Simple library to write guitar tabs.

## Example
The snippet:
```javascript
GuitarTabs.init()
    .addNotes(-1,-1,-1,7)
    .addNotes(-1,-1,5)
    .addNotes(-1,5)
    .addNotes(5)
    .addNotes(7,-1,-1,6)
    .addNotes(-1,5)
    .addNotes(-1,-1,5)
    .addNotes(-1,-1,-1,7)
    .addSeparator();

let s = GuitarTabs.getString();
console.log(s);
```

Generates the following output in the console:
```javascript
e|-------5-7-------|
B|-----5-----5-----|
G|---5---------5---|
D|-7-------6-----7-|
A|-----------------|
E|-----------------|
```
