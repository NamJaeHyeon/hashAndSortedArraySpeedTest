# selection speed test "hashTable VS sortedArray"
selection speed test between hashTable and sortedArray

값을 탐색할때 b-tree를 사용할지 hashTable을 사용할지 이진탐색을 사용할지 고민하셨나요?
제가 자바스크립트로 테스트 코드를 짜보았습니다.
이론적으로는
이진탐색의 탐색 속도가 b-tree의 탐색 속도보다 빠르며,
해시테이블의 탐색 속도가 이진탐색의 탐색 속도보다 빠릅니다.
b-tree의 장점은 b-tree의 삽입/삭제가 이진탐색의 삽입/삭제 속도보다 빠르다는 점입니다.
작은 데이터 베이스에서 탐색을 할 때 해시테이블을 사용할지 이진탐색을 사용할지 결정하기 위해서 테스트를 해보았습니다.
결과적으로 해시테이블이 이진탐색보다 1.5배가량 빨랐습니다.

## compare time complexity
```
SrotedArray(s) : O(logN)
HashTable(h) : O(1) ~ O(N)
```

## test
```
테이블의 길이 :  1024
테스트 횟수 : 10000
이진탐색 성공
이진탐색: 5.922ms
해시테이블 성공
해시테이블: 3.284ms
```
```
테이블의 길이 :  2048
테스트 횟수 : 10000
이진탐색 성공
이진탐색: 6.72ms
해시테이블 성공
해시테이블: 3.386ms
```
```
테이블의 길이 :  4096
테스트 횟수 : 10000
이진탐색 성공
이진탐색: 6.356ms
해시테이블 성공
해시테이블: 3.463ms
```
```
테이블의 길이 :  1024
테스트 횟수 : 100000
이진탐색 성공
이진탐색: 18.944ms
해시테이블 성공
해시테이블: 6.205ms
```
```
테이블의 길이 :  2048
테스트 횟수 : 100000
이진탐색 성공
이진탐색: 20.908ms
해시테이블 성공
해시테이블: 6.19ms
```
```
테이블의 길이 :  4096
테스트 횟수 : 100000
이진탐색 성공
이진탐색: 25.313ms
해시테이블 성공
해시테이블: 7.147ms
```

**Hashtable seems to have won.**

**The hash table access time is about 20 times faster than the sorted array access time. (We estimate that only the 10,000~20,000th access is slower due to the execution environment.)**
