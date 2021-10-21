# Binary Search Tree Projesi - Proje 3

## Soru
[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.

## Cevap
1. root 7'dir.
2. 5 7'den küçük olduğu için root'un soluna yerleşir.
3. 1 7'den küçüktür, aşağıda 5 node'u vardır. 1 5'den de küçüktür. 5'in soluna yerleşir.
4. 8 root'dan yani 7den büyüktür. Root'un sağına yerleşir.
5. 3 rootdan küçüktür, sola yönlenir. ilk olarak 5 node'u ile kıyaslanır. 5'den küçük olduğu sola gider. 1'den büyük olduğu için de 1 node'unun sağına yerleşir.
6. 6 sayısı rootdan küçüktür. Sola yönlenir, 5 node'undan büyüktür. Dolayısıyla 5'in sağına yerleşir.
7. 0 sayısı ilk önce root(7) dan küçüktür. Sonra sırasıyla soldaki 5, ve onunda solundaki 1 den küçük olduğu için 1'in altında sola yerleşir.
8. 9 sayısı ise ilk önce rootdan büyüktür, sağa yönlenir. Sağda 8'den de büyüktür. O yüzden 8 node'unun sağına yerleşir.
9. 4 sayısı root'dan küçüktür, sola yönlenir. 5'den küçüktür, sola yönlenir. 1'den büyüktür sağa yönlenir. 3'den ise büyüktür ve sağına yerleşir.
10. 2 sayısı rootun soluna yönlenir, 5 ile kıyaslanınca yine sola yönlenir. 1'den büyük olduğu için sağa yönlenir. 3 den küçük olduğu için 3 node'unun soluna yerleşir.

Böylece 4 seviyeli bir binary search tree yapımız olmuş olur.