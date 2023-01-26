# selection speed test "hashTable VS sortedArray"
selection speed test between hashTable and sortedArray

## Motivate
```
사용 할 자료구조가 해시 테이블 배열 등 다양합니다.
저는 접근이 더 빠른 자료구조가 필요했습니다.
어떤 것이 더 빠른지 확신이 들지 않았습니다.
내부적으로 이진탐색은 logN번의 비교연산이 사용되고
해시는 1+k(충돌)번의 연산이 사용됩니다.
이론적으로는 해시가 더 빠르지만 실제 접근이 얼마나 빠른지가
더 중요하다고 생각했습니다. 해시 알고리즘을 뜯어보지 않았기 때문에
확신이 들지 않았나봅니다. 지하철역 코드를 이용해서
그 코드에 알맞는 이름값을 얻어야 하는 상황을 구현했습니다.
딕셔너리에서는 코드값을 키로, 이름값을 값으로 이용하고
정렬된 배열에서는 이진 탐색을 이용하여 이름값에 접근합니다.
결과적으로 해시 접근이 이진 탐색 접근보다 약 20배 정도 더 빨랐습니다.
```
```
There are various data structures to use, such as hash table arrays.
I needed a data structure with faster access.
I wasn't sure which one was faster.
Internally, binary search uses logN comparison operations.
The hash uses 1+k (collision) operations.
Theoretically, hashing is faster, but how fast is access in practice?
I thought it was more important. Because I haven't looked at the hash algorithm.
I guess I wasn't sure. using subway code
I implemented a situation where I need to get a name value suitable for that code.
In a dictionary, code values are used as keys and name values are used as values.
In sorted arrays, binary search is used to access name values.
As a result, the hash access was about 20 times faster than the binary search approach.
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
