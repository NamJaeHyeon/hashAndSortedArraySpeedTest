# selection speed test "hashTable VS sortedArray"
selection speed test between hashTable and sortedArray

## compare time complexity
```
SrotedArray(s) : O(logN)
HashTable(h) : O(1) ~ O(N)
```

## test
```
iterate : 100
s: 0.269ms
h: 0.019ms
```
```
iterate : 1000
s: 1.054ms
h: 0.114ms
```
```
iterate : 10000
s: 4.983ms
h: 5.971ms
```
```
iterate : 100000
s: 34.459ms
h: 1.892ms
```
```
iterate : 1000000
s: 331.658ms
h: 19.657ms
```

**Hashtable seems to have won.**


