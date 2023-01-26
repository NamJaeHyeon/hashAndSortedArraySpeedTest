# selection speed test "hashTable VS sortedArray"
selection speed test between hashTable and sortedArray

## Motivate
```
딕셔너리 자료구조를 쓸지 정렬된 배열을 자료구조로 쓸지 정해야하지만 무엇이 더 좋은지 확신이 들지 않았습니다. 그래서 직접 테스트를 해보았습니다. 코드값을 이용해서 그 코드에 알맞는 이름값을 얻어야 하는 상황을 구현했습니다. 딕셔너리에서는 코드값을 키로, 이름값을 값으로 이용하고, 정렬된 배열에서는 이진 탐색을 이용하여 이름값에 접근합니다. 결과적으로 해시 접근이 이진 탐색 접근보다 약 20배 정도 더 빨랐습니다.
```
```
I have to decide whether to use a dictionary data structure or a sorted array as a data structure, but I'm not sure which is better. So I tested it myself. We have implemented a situation where we need to obtain a name value suitable for the code by using the code value. Dictionaries use code values as keys and name values as values, and in sorted arrays, binary search is used to access name values. As a result, the hash access was about 20 times faster than the binary search approach.
```

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

**The hash table access time is about 20 times faster than the sorted array access time. (We estimate that only the 10,000~20,000th access is slower due to the execution environment.)**
