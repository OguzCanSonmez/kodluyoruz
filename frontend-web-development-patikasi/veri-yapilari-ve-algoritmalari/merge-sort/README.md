# Merge Sort Projesi

## Soru
[16,21,11,8,12,22] -> Merge Sort

* Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
* Big-O gösterimini yazınız.

## Cevap
*  [16,21,11,8,12,22]

1. [16,21,11] [8,12,22]
2. [16,21] [11] [8,12] [22]
3. [16] [21] [11] [8] [12] [22]
4. [16,21] [11] [8,12] [22]
5. [11,16,21] [8,12,22]
6. [8,11,12,16,21,22]

* Big O gösterimi: O(nlogn)